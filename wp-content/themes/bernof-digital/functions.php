<?php
/**
 * Bernof Digital Agency Theme Functions
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Theme Setup
 */
function bernof_theme_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'bernof-digital'),
        'footer' => __('Footer Menu', 'bernof-digital'),
    ));
}
add_action('after_setup_theme', 'bernof_theme_setup');

/**
 * Enqueue Scripts and Styles
 */
function bernof_enqueue_scripts() {
    // Enqueue main stylesheet
    wp_enqueue_style('bernof-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Enqueue Google Fonts
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap', array(), null);
    
    // Enqueue Lucide Icons
    wp_enqueue_script('lucide-icons', 'https://unpkg.com/lucide@latest/dist/umd/lucide.js', array(), null, true);
    
    // Enqueue custom JavaScript
    wp_enqueue_script('bernof-scripts', get_template_directory_uri() . '/js/main.js', array('jquery'), '1.0.0', true);
    
    // Localize script for AJAX
    wp_localize_script('bernof-scripts', 'bernof_ajax', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('bernof_nonce'),
    ));
}
add_action('wp_enqueue_scripts', 'bernof_enqueue_scripts');

/**
 * Custom Post Types
 */
function bernof_custom_post_types() {
    // Services Post Type
    register_post_type('services', array(
        'labels' => array(
            'name' => 'Services',
            'singular_name' => 'Service',
            'add_new' => 'Add New Service',
            'add_new_item' => 'Add New Service',
            'edit_item' => 'Edit Service',
            'new_item' => 'New Service',
            'view_item' => 'View Service',
            'search_items' => 'Search Services',
            'not_found' => 'No services found',
            'not_found_in_trash' => 'No services found in trash',
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-admin-tools',
        'rewrite' => array('slug' => 'services'),
    ));
    
    // Testimonials Post Type
    register_post_type('testimonials', array(
        'labels' => array(
            'name' => 'Testimonials',
            'singular_name' => 'Testimonial',
            'add_new' => 'Add New Testimonial',
            'add_new_item' => 'Add New Testimonial',
            'edit_item' => 'Edit Testimonial',
            'new_item' => 'New Testimonial',
            'view_item' => 'View Testimonial',
            'search_items' => 'Search Testimonials',
            'not_found' => 'No testimonials found',
            'not_found_in_trash' => 'No testimonials found in trash',
        ),
        'public' => true,
        'has_archive' => false,
        'supports' => array('title', 'editor', 'thumbnail'),
        'menu_icon' => 'dashicons-format-quote',
        'rewrite' => array('slug' => 'testimonials'),
    ));
}
add_action('init', 'bernof_custom_post_types');

/**
 * Custom Fields for Services
 */
function bernof_add_service_meta_boxes() {
    add_meta_box(
        'service_details',
        'Service Details',
        'bernof_service_meta_box_callback',
        'services',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'bernof_add_service_meta_boxes');

function bernof_service_meta_box_callback($post) {
    wp_nonce_field('bernof_save_service_meta', 'bernof_service_meta_nonce');
    
    $icon = get_post_meta($post->ID, '_service_icon', true);
    $price_range = get_post_meta($post->ID, '_service_price_range', true);
    $timeline = get_post_meta($post->ID, '_service_timeline', true);
    $features = get_post_meta($post->ID, '_service_features', true);
    $technologies = get_post_meta($post->ID, '_service_technologies', true);
    
    ?>
    <table class="form-table">
        <tr>
            <th><label for="service_icon">Icon (Lucide icon name)</label></th>
            <td><input type="text" id="service_icon" name="service_icon" value="<?php echo esc_attr($icon); ?>" class="regular-text" /></td>
        </tr>
        <tr>
            <th><label for="service_price_range">Price Range</label></th>
            <td><input type="text" id="service_price_range" name="service_price_range" value="<?php echo esc_attr($price_range); ?>" class="regular-text" /></td>
        </tr>
        <tr>
            <th><label for="service_timeline">Timeline</label></th>
            <td><input type="text" id="service_timeline" name="service_timeline" value="<?php echo esc_attr($timeline); ?>" class="regular-text" /></td>
        </tr>
        <tr>
            <th><label for="service_features">Features (one per line)</label></th>
            <td><textarea id="service_features" name="service_features" rows="5" class="large-text"><?php echo esc_textarea($features); ?></textarea></td>
        </tr>
        <tr>
            <th><label for="service_technologies">Technologies (comma separated)</label></th>
            <td><input type="text" id="service_technologies" name="service_technologies" value="<?php echo esc_attr($technologies); ?>" class="regular-text" /></td>
        </tr>
    </table>
    <?php
}

function bernof_save_service_meta($post_id) {
    if (!isset($_POST['bernof_service_meta_nonce']) || !wp_verify_nonce($_POST['bernof_service_meta_nonce'], 'bernof_save_service_meta')) {
        return;
    }
    
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }
    
    $fields = array('icon', 'price_range', 'timeline', 'features', 'technologies');
    
    foreach ($fields as $field) {
        if (isset($_POST['service_' . $field])) {
            update_post_meta($post_id, '_service_' . $field, sanitize_text_field($_POST['service_' . $field]));
        }
    }
}
add_action('save_post', 'bernof_save_service_meta');

/**
 * Customizer Settings
 */
function bernof_customize_register($wp_customize) {
    // Hero Section
    $wp_customize->add_section('hero_section', array(
        'title' => 'Hero Section',
        'priority' => 30,
    ));
    
    $wp_customize->add_setting('hero_title', array(
        'default' => 'Managing the Future',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('hero_title', array(
        'label' => 'Hero Title',
        'section' => 'hero_section',
        'type' => 'text',
    ));
    
    $wp_customize->add_setting('hero_subtitle', array(
        'default' => 'Transform your digital presence with comprehensive development solutions, creative design services, and strategic marketing that drives measurable growth.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    
    $wp_customize->add_control('hero_subtitle', array(
        'label' => 'Hero Subtitle',
        'section' => 'hero_section',
        'type' => 'textarea',
    ));
    
    // Contact Information
    $wp_customize->add_section('contact_info', array(
        'title' => 'Contact Information',
        'priority' => 35,
    ));
    
    $wp_customize->add_setting('contact_email', array(
        'default' => 'hello@bernof.co',
        'sanitize_callback' => 'sanitize_email',
    ));
    
    $wp_customize->add_control('contact_email', array(
        'label' => 'Contact Email',
        'section' => 'contact_info',
        'type' => 'email',
    ));
    
    $wp_customize->add_setting('contact_phone', array(
        'default' => '+1 (555) 123-4567',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('contact_phone', array(
        'label' => 'Contact Phone',
        'section' => 'contact_info',
        'type' => 'text',
    ));
}
add_action('customize_register', 'bernof_customize_register');

/**
 * Helper Functions
 */
function bernof_get_services() {
    $services = get_posts(array(
        'post_type' => 'services',
        'numberposts' => -1,
        'post_status' => 'publish',
    ));
    
    $formatted_services = array();
    foreach ($services as $service) {
        $formatted_services[] = array(
            'title' => $service->post_title,
            'description' => $service->post_excerpt,
            'content' => $service->post_content,
            'icon' => get_post_meta($service->ID, '_service_icon', true),
            'price_range' => get_post_meta($service->ID, '_service_price_range', true),
            'timeline' => get_post_meta($service->ID, '_service_timeline', true),
            'features' => explode("\n", get_post_meta($service->ID, '_service_features', true)),
            'technologies' => explode(',', get_post_meta($service->ID, '_service_technologies', true)),
        );
    }
    
    return $formatted_services;
}

function bernof_get_testimonials() {
    return get_posts(array(
        'post_type' => 'testimonials',
        'numberposts' => 6,
        'post_status' => 'publish',
    ));
}

/**
 * AJAX Handlers
 */
function bernof_contact_form_handler() {
    check_ajax_referer('bernof_nonce', 'nonce');
    
    $name = sanitize_text_field($_POST['name']);
    $email = sanitize_email($_POST['email']);
    $message = sanitize_textarea_field($_POST['message']);
    
    $to = get_theme_mod('contact_email', 'hello@bernof.co');
    $subject = 'New Contact Form Submission from ' . $name;
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    
    $headers = array('Content-Type: text/plain; charset=UTF-8');
    
    $sent = wp_mail($to, $subject, $body, $headers);
    
    if ($sent) {
        wp_send_json_success('Message sent successfully!');
    } else {
        wp_send_json_error('Failed to send message. Please try again.');
    }
}
add_action('wp_ajax_contact_form', 'bernof_contact_form_handler');
add_action('wp_ajax_nopriv_contact_form', 'bernof_contact_form_handler'); 