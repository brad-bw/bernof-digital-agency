# Bernof Digital Agency WordPress Theme

A custom WordPress theme designed for Bernof Digital Agency, featuring a modern design with Tailwind CSS, custom animations, and comprehensive functionality.

## Features

- **Modern Design**: Clean, professional design with geometric elements and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Custom Post Types**: Services and Testimonials post types with custom fields
- **Contact Form**: AJAX-powered contact form with email functionality
- **Customizer Integration**: Easy customization through WordPress Customizer
- **SEO Optimized**: Built with SEO best practices
- **Performance Optimized**: Fast loading with optimized assets

## Installation

1. **Upload the Theme**:
   - Upload the `bernof-digital` folder to your WordPress themes directory: `/wp-content/themes/`
   - Or zip the folder and upload through WordPress admin

2. **Activate the Theme**:
   - Go to WordPress Admin → Appearance → Themes
   - Activate "Bernof Digital Agency"

3. **Configure the Theme**:
   - Go to Appearance → Customize
   - Configure hero section content, contact information, and other settings

## Setup Instructions

### 1. Logo Setup
- Go to Appearance → Customize → Site Identity
- Upload your logo (recommended size: 240x60px)

### 2. Contact Information
- Go to Appearance → Customize → Contact Information
- Update email and phone number

### 3. Hero Section Content
- Go to Appearance → Customize → Hero Section
- Update title and subtitle text

### 4. Services Setup
- Go to Services → Add New
- Create your services with the following fields:
  - **Title**: Service name
  - **Excerpt**: Short description
  - **Content**: Detailed description
  - **Icon**: Lucide icon name (e.g., "code", "globe", "rocket")
  - **Price Range**: e.g., "$5,000 - $50,000"
  - **Timeline**: e.g., "4-12 weeks"
  - **Features**: One feature per line
  - **Technologies**: Comma-separated list

### 5. Navigation Menu
- Go to Appearance → Menus
- Create a new menu and assign it to "Primary Menu"

## Customization

### Colors
The theme uses CSS custom properties for colors:
- Primary: `#3B82F6` (Blue)
- Accent: `#10B981` (Green)

### Fonts
- Primary font: Inter (loaded from Google Fonts)

### Icons
- Uses Lucide Icons (loaded from CDN)

## File Structure

```
bernof-digital/
├── style.css              # Main stylesheet with theme info
├── functions.php          # Theme functions and setup
├── header.php            # Header template
├── footer.php            # Footer template
├── index.php             # Main template (home page)
├── js/
│   └── main.js          # Custom JavaScript
└── README.md            # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

1. **Optimize Images**: Use WebP format when possible
2. **Caching**: Enable WordPress caching plugins
3. **CDN**: Use a CDN for faster asset delivery
4. **Database Optimization**: Regularly clean up your database

## Support

For support and customization requests, contact:
- Email: hello@bernof.co
- Website: https://bernof.co

## Changelog

### Version 1.0.0
- Initial release
- Complete home page with hero, services, about, and contact sections
- Custom post types for services and testimonials
- AJAX contact form
- Responsive design with Tailwind CSS
- Custom animations and geometric elements

## License

This theme is custom-built for Bernof Digital Agency. All rights reserved. 