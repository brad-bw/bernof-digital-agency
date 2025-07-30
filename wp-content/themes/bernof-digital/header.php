<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
    <header class="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 relative">
        <!-- Decorative elements -->
        <div class="absolute top-0 right-20 w-2 h-2 bg-accent/30 rounded-full animate-pulse"></div>
        <div class="absolute bottom-0 left-1/3 w-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        
        <div class="container mx-auto px-6 py-4">
            <div class="flex items-center justify-between">
                <!-- Logo -->
                <div class="relative">
                    <a href="<?php echo esc_url(home_url('/')); ?>" class="group">
                        <div class="flex items-center space-x-4">
                            <?php
                            if (has_custom_logo()) {
                                the_custom_logo();
                            } else {
                                echo '<h1 class="text-2xl font-bold text-gray-900">' . get_bloginfo('name') . '</h1>';
                            }
                            ?>
                        </div>
                    </a>
                    <div class="absolute -top-1 -right-1 w-2 h-2 bg-accent/40 rounded-full animate-pulse"></div>
                </div>

                <!-- Desktop Navigation -->
                <nav class="hidden md:flex items-center space-x-8">
                    <a href="#services" class="text-gray-600 hover:text-primary transition-colors font-medium relative group">
                        Services
                        <div class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
                    </a>
                    
                    <!-- Global Coverage Dropdown -->
                    <div class="relative group">
                        <a href="<?php echo esc_url(home_url('/global-services')); ?>" class="flex items-center text-gray-600 hover:text-primary transition-colors font-medium relative group">
                            Global Coverage
                            <i data-lucide="chevron-down" class="w-4 h-4 ml-1"></i>
                            <div class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
                        </a>
                        <div class="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200 py-4 transition-all duration-200 opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                            <a href="<?php echo esc_url(home_url('/global-services/switzerland')); ?>" class="flex items-center px-6 py-3 hover:bg-gray-50 transition-colors">
                                <span class="text-2xl mr-3">🇨🇭</span>
                                <span class="text-gray-700 hover:text-primary">Switzerland</span>
                            </a>
                            <a href="<?php echo esc_url(home_url('/global-services/uk')); ?>" class="flex items-center px-6 py-3 hover:bg-gray-50 transition-colors">
                                <span class="text-2xl mr-3">🇬🇧</span>
                                <span class="text-gray-700 hover:text-primary">United Kingdom</span>
                            </a>
                            <a href="<?php echo esc_url(home_url('/global-services/usa')); ?>" class="flex items-center px-6 py-3 hover:bg-gray-50 transition-colors">
                                <span class="text-2xl mr-3">🇺🇸</span>
                                <span class="text-gray-700 hover:text-primary">United States</span>
                            </a>
                            <a href="<?php echo esc_url(home_url('/global-services/italy')); ?>" class="flex items-center px-6 py-3 hover:bg-gray-50 transition-colors">
                                <span class="text-2xl mr-3">🇮🇹</span>
                                <span class="text-gray-700 hover:text-primary">Italy</span>
                            </a>
                            <div class="border-t border-gray-200 mt-2 pt-2">
                                <a href="<?php echo esc_url(home_url('/global-services')); ?>" class="flex items-center px-6 py-3 hover:bg-gray-50 transition-colors text-sm text-gray-500">
                                    View All Countries →
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <a href="<?php echo esc_url(home_url('/startup-development')); ?>" class="text-gray-600 hover:text-primary transition-colors font-medium relative group">
                        For Startups
                        <div class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
                    </a>
                    
                    <a href="<?php echo esc_url(home_url('/blog')); ?>" class="text-gray-600 hover:text-primary transition-colors font-medium relative group">
                        Blog
                        <div class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
                    </a>
                    
                    <a href="#discovery-call" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-accent hover:bg-accent/90 text-white font-semibold px-6 py-2 rounded-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group">
                        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        <span class="relative z-10">Book Discovery Call</span>
                    </a>
                </nav>

                <!-- Mobile Menu Toggle -->
                <button class="md:hidden p-2 relative mobile-menu-toggle">
                    <i data-lucide="menu" class="w-6 h-6 text-gray-900"></i>
                    <div class="absolute -top-1 -right-1 w-2 h-2 bg-accent/40 rounded-full"></div>
                </button>
            </div>
        </div>

        <!-- Mobile Menu -->
        <nav class="md:hidden mobile-menu bg-white border-t border-gray-100 transform -translate-y-full transition-transform duration-300">
            <div class="px-4 py-4 space-y-4">
                <a href="#services" class="block w-full text-left text-gray-700 hover:text-primary font-medium transition-colors">
                    Services
                </a>
                
                <div class="mobile-dropdown">
                    <button class="flex items-center justify-between w-full text-gray-700 hover:text-primary font-medium transition-colors mobile-dropdown-toggle">
                        Global Coverage
                        <i data-lucide="chevron-down" class="h-4 w-4 transition-transform"></i>
                    </button>
                    <div class="mt-2 ml-4 space-y-2 mobile-dropdown-content hidden">
                        <a href="<?php echo esc_url(home_url('/global-services/switzerland')); ?>" class="flex items-center text-sm text-gray-600 hover:text-primary">
                            <span class="mr-2">🇨🇭</span>
                            Switzerland
                        </a>
                        <a href="<?php echo esc_url(home_url('/global-services/uk')); ?>" class="flex items-center text-sm text-gray-600 hover:text-primary">
                            <span class="mr-2">🇬🇧</span>
                            United Kingdom
                        </a>
                        <a href="<?php echo esc_url(home_url('/global-services/usa')); ?>" class="flex items-center text-sm text-gray-600 hover:text-primary">
                            <span class="mr-2">🇺🇸</span>
                            United States
                        </a>
                        <a href="<?php echo esc_url(home_url('/global-services/italy')); ?>" class="flex items-center text-sm text-gray-600 hover:text-primary">
                            <span class="mr-2">🇮🇹</span>
                            Italy
                        </a>
                        <a href="<?php echo esc_url(home_url('/global-services')); ?>" class="block text-sm text-primary font-medium">
                            View All Countries →
                        </a>
                    </div>
                </div>
                
                <a href="<?php echo esc_url(home_url('/startup-development')); ?>" class="block text-gray-700 hover:text-primary font-medium transition-colors">
                    For Startups
                </a>
                
                <a href="<?php echo esc_url(home_url('/blog')); ?>" class="block text-gray-700 hover:text-primary font-medium transition-colors">
                    Blog
                </a>
                
                <a href="#discovery-call" class="w-full bg-accent hover:bg-accent/90 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200 text-center block">
                    Book Discovery Call
                </a>
            </div>
        </nav>
    </header>

    <!-- Mobile Menu Overlay -->
    <div class="mobile-menu-overlay fixed inset-0 bg-black/50 z-40 opacity-0 invisible transition-all duration-300"></div>

    <div id="content" class="site-content"> 