/**
 * Bernof Digital Agency Theme JavaScript
 */

(function($) {
    'use strict';

    // Initialize when DOM is ready
    $(document).ready(function() {
        initSmoothScrolling();
        initAnimations();
        initContactForm();
        initMobileMenu();
        initLucideIcons();
    });

    /**
     * Smooth Scrolling
     */
    function initSmoothScrolling() {
        $('a[href^="#"]').on('click', function(e) {
            e.preventDefault();
            
            const target = $(this.getAttribute('href'));
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 80
                }, 800);
            }
        });
    }

    /**
     * Animations
     */
    function initAnimations() {
        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, observerOptions);

        // Observe elements with animation classes
        $('.animate-on-scroll').each(function() {
            observer.observe(this);
        });

        // Geometric floating animations
        $('.geometric-element').each(function(index) {
            $(this).css('animation-delay', (index * 0.5) + 's');
        });
    }

    /**
     * Contact Form Handler
     */
    function initContactForm() {
        $('#contact-form').on('submit', function(e) {
            e.preventDefault();
            
            const form = $(this);
            const submitBtn = form.find('button[type="submit"]');
            const originalText = submitBtn.text();
            
            // Show loading state
            submitBtn.text('Sending...').prop('disabled', true);
            
            const formData = {
                action: 'contact_form',
                nonce: bernof_ajax.nonce,
                name: form.find('input[name="name"]').val(),
                email: form.find('input[name="email"]').val(),
                message: form.find('textarea[name="message"]').val()
            };
            
            $.ajax({
                url: bernof_ajax.ajax_url,
                type: 'POST',
                data: formData,
                success: function(response) {
                    if (response.success) {
                        showNotification('Message sent successfully!', 'success');
                        form[0].reset();
                    } else {
                        showNotification('Failed to send message. Please try again.', 'error');
                    }
                },
                error: function() {
                    showNotification('An error occurred. Please try again.', 'error');
                },
                complete: function() {
                    submitBtn.text(originalText).prop('disabled', false);
                }
            });
        });
    }

    /**
     * Mobile Menu
     */
    function initMobileMenu() {
        const menuToggle = $('.mobile-menu-toggle');
        const mobileMenu = $('.mobile-menu');
        const overlay = $('.mobile-menu-overlay');
        
        menuToggle.on('click', function() {
            mobileMenu.toggleClass('active');
            overlay.toggleClass('active');
            $('body').toggleClass('menu-open');
        });
        
        // Close menu when clicking overlay
        overlay.on('click', function() {
            mobileMenu.removeClass('active');
            overlay.removeClass('active');
            $('body').removeClass('menu-open');
        });
        
        // Close menu when clicking menu items
        mobileMenu.find('a').on('click', function() {
            mobileMenu.removeClass('active');
            overlay.removeClass('active');
            $('body').removeClass('menu-open');
        });
    }

    /**
     * Initialize Lucide Icons
     */
    function initLucideIcons() {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    /**
     * Show Notification
     */
    function showNotification(message, type = 'info') {
        const notification = $(`
            <div class="fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full">
                <div class="flex items-center">
                    <span class="mr-2">${type === 'success' ? '✓' : '✗'}</span>
                    <span>${message}</span>
                </div>
            </div>
        `);
        
        // Add appropriate styling based on type
        if (type === 'success') {
            notification.addClass('bg-green-500 text-white');
        } else if (type === 'error') {
            notification.addClass('bg-red-500 text-white');
        } else {
            notification.addClass('bg-blue-500 text-white');
        }
        
        $('body').append(notification);
        
        // Animate in
        setTimeout(() => {
            notification.removeClass('translate-x-full');
        }, 100);
        
        // Remove after 5 seconds
        setTimeout(() => {
            notification.addClass('translate-x-full');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 5000);
    }

    /**
     * Parallax Effect for Hero Section
     */
    function initParallax() {
        $(window).on('scroll', function() {
            const scrolled = $(window).scrollTop();
            const parallaxElements = $('.parallax');
            
            parallaxElements.each(function() {
                const speed = $(this).data('speed') || 0.5;
                const yPos = -(scrolled * speed);
                $(this).css('transform', `translateY(${yPos}px)`);
            });
        });
    }

    /**
     * Service Card Interactions
     */
    function initServiceCards() {
        $('.service-card').on('mouseenter', function() {
            $(this).addClass('scale-105');
        }).on('mouseleave', function() {
            $(this).removeClass('scale-105');
        });
    }

    /**
     * Testimonial Slider
     */
    function initTestimonialSlider() {
        const testimonials = $('.testimonial-item');
        let currentIndex = 0;
        
        function showTestimonial(index) {
            testimonials.removeClass('active');
            testimonials.eq(index).addClass('active');
        }
        
        // Auto-rotate testimonials
        setInterval(function() {
            currentIndex = (currentIndex + 1) % testimonials.length;
            showTestimonial(currentIndex);
        }, 5000);
        
        // Show first testimonial
        if (testimonials.length > 0) {
            showTestimonial(0);
        }
    }

    /**
     * Lazy Loading for Images
     */
    function initLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }

    // Initialize additional features
    $(window).on('load', function() {
        initParallax();
        initServiceCards();
        initTestimonialSlider();
        initLazyLoading();
    });

})(jQuery); 