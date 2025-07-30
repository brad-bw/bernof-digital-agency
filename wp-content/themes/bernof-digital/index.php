<?php get_header(); ?>

<main class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="pt-32 pb-20 relative overflow-hidden">
        <!-- Main geometric background -->
        <div class="absolute inset-0 geometric-bg-primary opacity-60"></div>
        
        <!-- Overlay for better text readability -->
        <div class="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/85"></div>
        
        <!-- Additional flowing geometric elements -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute top-20 right-10 w-40 h-40 opacity-10 animate-geometric-float">
                <div class="w-full h-full bg-gradient-to-br from-primary to-accent rounded-full"></div>
            </div>
            <div class="absolute bottom-20 left-10 w-32 h-32 opacity-10 animate-fluid-motion">
                <div class="w-full h-full bg-gradient-to-tr from-accent to-primary organic-shape"></div>
            </div>
            <div class="absolute top-1/2 right-1/4 w-24 h-24 opacity-15 animate-geometric-float" style="animation-delay: 5s;">
                <div class="w-full h-full bg-primary/20 curved-element"></div>
            </div>
            
            <!-- Flowing curves background elements -->
            <div class="absolute top-0 left-0 w-full h-full flowing-curves"></div>
        </div>

        <div class="container mx-auto px-6 relative z-10">
            <div class="max-w-4xl mx-auto text-center">
                <h1 class="font-inter text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight relative">
                    <?php echo esc_html(get_theme_mod('hero_title', 'Managing the')); ?>
                    <span class="text-primary block relative">
                        <?php echo esc_html(get_theme_mod('hero_title_future', 'Future')); ?>
                        <!-- Enhanced decorative elements with organic shapes -->
                        <div class="absolute -right-12 top-4 w-8 h-8 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full animate-geometric-float"></div>
                        <div class="absolute -left-8 -top-2 w-6 h-6 bg-accent/20 curved-element animate-fluid-motion" style="animation-delay: 3s;"></div>
                    </span>
                </h1>
                
                <p class="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed font-inter relative">
                    <?php echo esc_html(get_theme_mod('hero_subtitle', 'Transform your digital presence with comprehensive development solutions, creative design services, and strategic marketing that drives measurable growth.')); ?>
                    <!-- Subtle geometric accent -->
                    <div class="absolute -bottom-4 right-1/4 w-16 h-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full"></div>
                </p>
                
                <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                    <a href="#discovery-call" class="btn-primary">
                        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        <div class="relative z-10 flex items-center gap-2">
                            Book Discovery Call
                            <i data-lucide="arrow-right" class="w-5 h-5"></i>
                        </div>
                    </a>
                    
                    <a href="#services" class="btn-outline">
                        <div class="absolute inset-0 bg-gradient-to-r from-primary to-primary/90 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-2xl"></div>
                        <div class="relative z-10 flex items-center gap-2">
                            <i data-lucide="play" class="w-4 h-4"></i>
                            View Our Services
                        </div>
                    </a>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    <div class="text-center animate-fade-in relative group">
                        <div class="absolute -top-4 -left-4 w-6 h-6 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-geometric-float"></div>
                        <div class="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 font-inter">50+</div>
                        <div class="text-gray-600 font-medium font-inter">Projects Delivered</div>
                    </div>
                    <div class="text-center animate-fade-in relative group" style="animation-delay: 0.2s;">
                        <div class="absolute -top-3 -right-3 w-5 h-5 bg-gradient-to-tr from-primary/20 to-accent/20 curved-element opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-fluid-motion"></div>
                        <div class="text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2 font-inter">3</div>
                        <div class="text-gray-600 font-medium font-inter">Core Service Pillars</div>
                    </div>
                    <div class="text-center animate-fade-in relative group" style="animation-delay: 0.4s;">
                        <div class="absolute -bottom-3 -left-3 w-6 h-6 bg-gradient-to-bl from-accent/20 to-primary/20 organic-shape opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-geometric-float"></div>
                        <div class="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 font-inter">100%</div>
                        <div class="text-gray-600 font-medium font-inter">Client Satisfaction</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <!-- Services Background -->
        <div class="absolute inset-0 geometric-bg-primary opacity-5"></div>
        
        <div class="container mx-auto px-6 relative z-10">
            <!-- Services Header -->
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-inter">
                    Our Core Services
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-inter">
                    We offer comprehensive digital solutions tailored to your business needs, from web development to strategic marketing.
                </p>
            </div>

            <!-- Services Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <?php
                $services = bernof_get_services();
                if (!empty($services)) {
                    foreach ($services as $index => $service) {
                        ?>
                        <div class="service-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 relative overflow-hidden group">
                            <!-- Decorative background -->
                            <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <div class="relative z-10">
                                <!-- Icon -->
                                <div class="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <i data-lucide="<?php echo esc_attr($service['icon'] ?: 'code'); ?>" class="w-8 h-8 text-white"></i>
                                </div>
                                
                                <!-- Title -->
                                <h3 class="text-2xl font-bold text-gray-900 mb-4 font-inter"><?php echo esc_html($service['title']); ?></h3>
                                
                                <!-- Description -->
                                <p class="text-gray-600 mb-6 leading-relaxed"><?php echo esc_html($service['description']); ?></p>
                                
                                <!-- Features -->
                                <?php if (!empty($service['features'])) { ?>
                                    <ul class="space-y-3 mb-6">
                                        <?php foreach (array_slice($service['features'], 0, 3) as $feature) { ?>
                                            <li class="flex items-center text-gray-600">
                                                <i data-lucide="check" class="w-4 h-4 text-accent mr-3 flex-shrink-0"></i>
                                                <span><?php echo esc_html(trim($feature)); ?></span>
                                            </li>
                                        <?php } ?>
                                    </ul>
                                <?php } ?>
                                
                                <!-- Price and Timeline -->
                                <div class="flex justify-between items-center text-sm text-gray-500 mb-6">
                                    <?php if ($service['price_range']) { ?>
                                        <span><?php echo esc_html($service['price_range']); ?></span>
                                    <?php } ?>
                                    <?php if ($service['timeline']) { ?>
                                        <span><?php echo esc_html($service['timeline']); ?></span>
                                    <?php } ?>
                                </div>
                                
                                <!-- Technologies -->
                                <?php if (!empty($service['technologies'])) { ?>
                                    <div class="flex flex-wrap gap-2 mb-6">
                                        <?php foreach (array_slice($service['technologies'], 0, 4) as $tech) { ?>
                                            <span class="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"><?php echo esc_html(trim($tech)); ?></span>
                                        <?php } ?>
                                    </div>
                                <?php } ?>
                                
                                <!-- CTA Button -->
                                <a href="<?php echo esc_url(home_url('/services/' . sanitize_title($service['title']))); ?>" class="inline-flex items-center justify-center w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 group-hover:shadow-lg">
                                    Learn More
                                    <i data-lucide="arrow-right" class="w-4 h-4 ml-2"></i>
                                </a>
                            </div>
                        </div>
                        <?php
                    }
                } else {
                    // Default services if none are created
                    $default_services = [
                        [
                            'title' => 'Web Development',
                            'description' => 'Custom websites and web applications built with modern technologies and best practices.',
                            'icon' => 'globe',
                            'features' => ['Responsive Design', 'SEO Optimization', 'Performance Focused'],
                            'price_range' => '$5,000 - $50,000',
                            'timeline' => '4-12 weeks'
                        ],
                        [
                            'title' => 'Software Development',
                            'description' => 'Scalable software solutions and applications tailored to your business requirements.',
                            'icon' => 'code',
                            'features' => ['Custom Architecture', 'API Development', 'Database Design'],
                            'price_range' => '$10,000 - $100,000',
                            'timeline' => '8-24 weeks'
                        ],
                        [
                            'title' => 'Startup Development',
                            'description' => 'End-to-end development services for startups, from MVP to full-scale applications.',
                            'icon' => 'rocket',
                            'features' => ['MVP Development', 'Growth Strategy', 'Technical Consulting'],
                            'price_range' => '$15,000 - $150,000',
                            'timeline' => '12-36 weeks'
                        ]
                    ];
                    
                    foreach ($default_services as $index => $service) {
                        ?>
                        <div class="service-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 relative overflow-hidden group">
                            <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <div class="relative z-10">
                                <div class="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <i data-lucide="<?php echo esc_attr($service['icon']); ?>" class="w-8 h-8 text-white"></i>
                                </div>
                                
                                <h3 class="text-2xl font-bold text-gray-900 mb-4 font-inter"><?php echo esc_html($service['title']); ?></h3>
                                <p class="text-gray-600 mb-6 leading-relaxed"><?php echo esc_html($service['description']); ?></p>
                                
                                <ul class="space-y-3 mb-6">
                                    <?php foreach ($service['features'] as $feature) { ?>
                                        <li class="flex items-center text-gray-600">
                                            <i data-lucide="check" class="w-4 h-4 text-accent mr-3 flex-shrink-0"></i>
                                            <span><?php echo esc_html($feature); ?></span>
                                        </li>
                                    <?php } ?>
                                </ul>
                                
                                <div class="flex justify-between items-center text-sm text-gray-500 mb-6">
                                    <span><?php echo esc_html($service['price_range']); ?></span>
                                    <span><?php echo esc_html($service['timeline']); ?></span>
                                </div>
                                
                                <a href="<?php echo esc_url(home_url('/services/' . sanitize_title($service['title']))); ?>" class="inline-flex items-center justify-center w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 group-hover:shadow-lg">
                                    Learn More
                                    <i data-lucide="arrow-right" class="w-4 h-4 ml-2"></i>
                                </a>
                            </div>
                        </div>
                        <?php
                    }
                }
                ?>
            </div>

            <!-- Services CTA -->
            <div class="text-center mt-16">
                <a href="<?php echo esc_url(home_url('/services')); ?>" class="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent/80 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-xl text-lg relative overflow-hidden group">
                    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <span class="relative z-10">View All Services</span>
                    <i data-lucide="arrow-right" class="w-5 h-5 relative z-10"></i>
                </a>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section class="py-20 bg-white relative overflow-hidden">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="space-y-8">
                    <h2 class="text-4xl md:text-5xl font-bold text-gray-900 font-inter">
                        Why Choose Bernof Digital?
                    </h2>
                    <p class="text-xl text-gray-600 leading-relaxed font-inter">
                        We combine technical expertise with strategic thinking to deliver solutions that not only meet your immediate needs but also scale with your business growth.
                    </p>
                    
                    <div class="space-y-6">
                        <div class="flex items-start space-x-4">
                            <div class="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                                <i data-lucide="users" class="w-6 h-6 text-white"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
                                <p class="text-gray-600">Our team of experienced developers, designers, and strategists work together to deliver exceptional results.</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start space-x-4">
                            <div class="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center flex-shrink-0">
                                <i data-lucide="zap" class="w-6 h-6 text-white"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
                                <p class="text-gray-600">We prioritize efficiency without compromising quality, ensuring your projects are delivered on time.</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start space-x-4">
                            <div class="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                                <i data-lucide="shield" class="w-6 h-6 text-white"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                                <p class="text-gray-600">Every project undergoes rigorous testing and quality checks to ensure the highest standards.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="relative">
                    <div class="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 relative overflow-hidden">
                        <div class="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full animate-geometric-float"></div>
                        <div class="absolute bottom-6 left-6 w-6 h-6 bg-gradient-to-tr from-accent/20 to-primary/20 organic-shape animate-fluid-motion"></div>
                        
                        <div class="space-y-6">
                            <div class="text-center">
                                <div class="text-4xl font-bold text-primary mb-2">50+</div>
                                <div class="text-gray-600">Projects Completed</div>
                            </div>
                            
                            <div class="grid grid-cols-2 gap-4">
                                <div class="text-center p-4 bg-white/50 rounded-xl">
                                    <div class="text-2xl font-bold text-accent mb-1">100%</div>
                                    <div class="text-sm text-gray-600">Client Satisfaction</div>
                                </div>
                                <div class="text-center p-4 bg-white/50 rounded-xl">
                                    <div class="text-2xl font-bold text-primary mb-1">24/7</div>
                                    <div class="text-sm text-gray-600">Support Available</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Discovery Call Section -->
    <section id="discovery-call" class="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div class="absolute inset-0 geometric-bg-primary opacity-10"></div>
        
        <div class="container mx-auto px-6 relative z-10">
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-4xl md:text-5xl font-bold mb-6 font-inter">
                    Ready to Transform Your Digital Presence?
                </h2>
                <p class="text-xl text-gray-300 mb-8 leading-relaxed font-inter">
                    Let's discuss your project and explore how we can help you achieve your goals. Book a free discovery call today.
                </p>
                
                <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a href="mailto:<?php echo esc_attr(get_theme_mod('contact_email', 'hello@bernof.co')); ?>" class="btn-primary">
                        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        <div class="relative z-10 flex items-center gap-2">
                            Book Discovery Call
                            <i data-lucide="calendar" class="w-5 h-5"></i>
                        </div>
                    </a>
                    
                    <a href="tel:<?php echo esc_attr(get_theme_mod('contact_phone', '+1 (555) 123-4567')); ?>" class="btn-outline border-white/30 text-white hover:bg-white hover:text-gray-900">
                        <div class="absolute inset-0 bg-gradient-to-r from-white to-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-2xl"></div>
                        <div class="relative z-10 flex items-center gap-2">
                            <i data-lucide="phone" class="w-4 h-4"></i>
                            Call Us Now
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20 bg-white relative overflow-hidden">
        <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-inter">
                        Get In Touch
                    </h2>
                    <p class="text-xl text-gray-600 leading-relaxed font-inter">
                        Have a project in mind? Let's discuss how we can help bring your vision to life.
                    </p>
                </div>
                
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <!-- Contact Form -->
                    <div class="space-y-6">
                        <form id="contact-form" class="space-y-6">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <input type="text" id="name" name="name" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300">
                                </div>
                                <div>
                                    <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input type="email" id="email" name="email" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300">
                                </div>
                            </div>
                            
                            <div>
                                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea id="message" name="message" rows="6" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"></textarea>
                            </div>
                            
                            <button type="submit" class="w-full bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent/80 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-xl text-lg relative overflow-hidden group">
                                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                <span class="relative z-10">Send Message</span>
                            </button>
                        </form>
                    </div>
                    
                    <!-- Contact Info -->
                    <div class="space-y-8">
                        <div class="space-y-6">
                            <h3 class="text-2xl font-bold text-gray-900 font-inter">Contact Information</h3>
                            
                            <div class="space-y-4">
                                <div class="flex items-center space-x-4">
                                    <div class="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                                        <i data-lucide="mail" class="w-6 h-6 text-white"></i>
                                    </div>
                                    <div>
                                        <div class="font-semibold text-gray-900">Email</div>
                                        <a href="mailto:<?php echo esc_attr(get_theme_mod('contact_email', 'hello@bernof.co')); ?>" class="text-gray-600 hover:text-primary transition-colors">
                                            <?php echo esc_html(get_theme_mod('contact_email', 'hello@bernof.co')); ?>
                                        </a>
                                    </div>
                                </div>
                                
                                <div class="flex items-center space-x-4">
                                    <div class="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center">
                                        <i data-lucide="phone" class="w-6 h-6 text-white"></i>
                                    </div>
                                    <div>
                                        <div class="font-semibold text-gray-900">Phone</div>
                                        <a href="tel:<?php echo esc_attr(get_theme_mod('contact_phone', '+1 (555) 123-4567')); ?>" class="text-gray-600 hover:text-primary transition-colors">
                                            <?php echo esc_html(get_theme_mod('contact_phone', '+1 (555) 123-4567')); ?>
                                        </a>
                                    </div>
                                </div>
                                
                                <div class="flex items-center space-x-4">
                                    <div class="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                                        <i data-lucide="map-pin" class="w-6 h-6 text-white"></i>
                                    </div>
                                    <div>
                                        <div class="font-semibold text-gray-900">Location</div>
                                        <div class="text-gray-600">Global Remote Team</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6">
                            <h4 class="text-lg font-semibold text-gray-900 mb-4">Business Hours</h4>
                            <div class="space-y-2 text-gray-600">
                                <div class="flex justify-between">
                                    <span>Monday - Friday</span>
                                    <span>9:00 AM - 6:00 PM</span>
                                </div>
                                <div class="flex justify-between">
                                    <span>Saturday</span>
                                    <span>10:00 AM - 4:00 PM</span>
                                </div>
                                <div class="flex justify-between">
                                    <span>Sunday</span>
                                    <span>Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?> 