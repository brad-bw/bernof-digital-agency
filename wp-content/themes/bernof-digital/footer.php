    </div><!-- #content -->

    <footer class="bg-gray-900 text-white relative overflow-hidden">
        <!-- Background decorative elements -->
        <div class="absolute inset-0 geometric-bg-primary opacity-10"></div>
        <div class="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full animate-geometric-float"></div>
        <div class="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-tr from-accent/20 to-primary/20 organic-shape animate-fluid-motion"></div>
        
        <div class="container mx-auto px-6 py-16 relative z-10">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Company Info -->
                <div class="space-y-6">
                    <div class="relative">
                        <?php
                        if (has_custom_logo()) {
                            the_custom_logo();
                        } else {
                            echo '<h3 class="text-2xl font-bold text-white">' . get_bloginfo('name') . '</h3>';
                        }
                        ?>
                        <div class="absolute -top-1 -right-1 w-2 h-2 bg-accent/40 rounded-full animate-pulse"></div>
                    </div>
                    
                    <p class="text-gray-300 leading-relaxed">
                        Transform your digital presence with comprehensive development solutions, creative design services, and strategic marketing that drives measurable growth.
                    </p>
                    
                    <div class="flex space-x-4">
                        <a href="#" class="text-gray-400 hover:text-white transition-colors">
                            <i data-lucide="linkedin" class="w-5 h-5"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition-colors">
                            <i data-lucide="twitter" class="w-5 h-5"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition-colors">
                            <i data-lucide="github" class="w-5 h-5"></i>
                        </a>
                    </div>
                </div>

                <!-- Services -->
                <div class="space-y-6">
                    <h4 class="text-lg font-semibold text-white">Services</h4>
                    <ul class="space-y-3">
                        <li><a href="<?php echo esc_url(home_url('/services/web-development')); ?>" class="text-gray-300 hover:text-white transition-colors">Web Development</a></li>
                        <li><a href="<?php echo esc_url(home_url('/services/software-development')); ?>" class="text-gray-300 hover:text-white transition-colors">Software Development</a></li>
                        <li><a href="<?php echo esc_url(home_url('/services/startup-development')); ?>" class="text-gray-300 hover:text-white transition-colors">Startup Development</a></li>
                        <li><a href="<?php echo esc_url(home_url('/services/digital-marketing')); ?>" class="text-gray-300 hover:text-white transition-colors">Digital Marketing</a></li>
                    </ul>
                </div>

                <!-- Global Coverage -->
                <div class="space-y-6">
                    <h4 class="text-lg font-semibold text-white">Global Coverage</h4>
                    <ul class="space-y-3">
                        <li><a href="<?php echo esc_url(home_url('/global-services/switzerland')); ?>" class="text-gray-300 hover:text-white transition-colors flex items-center">
                            <span class="mr-2">🇨🇭</span> Switzerland
                        </a></li>
                        <li><a href="<?php echo esc_url(home_url('/global-services/uk')); ?>" class="text-gray-300 hover:text-white transition-colors flex items-center">
                            <span class="mr-2">🇬🇧</span> United Kingdom
                        </a></li>
                        <li><a href="<?php echo esc_url(home_url('/global-services/usa')); ?>" class="text-gray-300 hover:text-white transition-colors flex items-center">
                            <span class="mr-2">🇺🇸</span> United States
                        </a></li>
                        <li><a href="<?php echo esc_url(home_url('/global-services/italy')); ?>" class="text-gray-300 hover:text-white transition-colors flex items-center">
                            <span class="mr-2">🇮🇹</span> Italy
                        </a></li>
                    </ul>
                </div>

                <!-- Contact Info -->
                <div class="space-y-6">
                    <h4 class="text-lg font-semibold text-white">Contact</h4>
                    <div class="space-y-3">
                        <div class="flex items-center text-gray-300">
                            <i data-lucide="mail" class="w-4 h-4 mr-3"></i>
                            <a href="mailto:<?php echo esc_attr(get_theme_mod('contact_email', 'hello@bernof.co')); ?>" class="hover:text-white transition-colors">
                                <?php echo esc_html(get_theme_mod('contact_email', 'hello@bernof.co')); ?>
                            </a>
                        </div>
                        <div class="flex items-center text-gray-300">
                            <i data-lucide="phone" class="w-4 h-4 mr-3"></i>
                            <a href="tel:<?php echo esc_attr(get_theme_mod('contact_phone', '+1 (555) 123-4567')); ?>" class="hover:text-white transition-colors">
                                <?php echo esc_html(get_theme_mod('contact_phone', '+1 (555) 123-4567')); ?>
                            </a>
                        </div>
                        <div class="flex items-center text-gray-300">
                            <i data-lucide="map-pin" class="w-4 h-4 mr-3"></i>
                            <span>Global Remote Team</span>
                        </div>
                    </div>
                    
                    <a href="#discovery-call" class="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group">
                        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        <span class="relative z-10">Book Discovery Call</span>
                    </a>
                </div>
            </div>

            <!-- Bottom Section -->
            <div class="border-t border-gray-800 mt-12 pt-8">
                <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div class="text-gray-400 text-sm">
                        <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. All rights reserved.</p>
                    </div>
                    
                    <div class="flex space-x-6 text-sm">
                        <a href="<?php echo esc_url(home_url('/privacy-policy')); ?>" class="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                        <a href="<?php echo esc_url(home_url('/terms-of-service')); ?>" class="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                        <a href="<?php echo esc_url(home_url('/cookie-policy')); ?>" class="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <!-- Back to Top Button -->
    <button id="back-to-top" class="fixed bottom-8 right-8 bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 invisible hover:scale-110">
        <i data-lucide="arrow-up" class="w-5 h-5"></i>
    </button>

</div><!-- #page -->

<?php wp_footer(); ?>

<script>
// Back to top functionality
document.addEventListener('DOMContentLoaded', function() {
    const backToTop = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.remove('opacity-0', 'invisible');
        } else {
            backToTop.classList.add('opacity-0', 'invisible');
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
</script>

</body>
</html> 