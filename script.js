document.addEventListener('DOMContentLoaded', () => {

    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 1000, // Animation duration in milliseconds
        once: true,     // Whether animation should happen only once - while scrolling down
        offset: 50,     // Offset (in px) from the original trigger point
        easing: 'ease-in-out', // Default easing
    });

    // Initialize Particles.js
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js',
            {
                "particles": {
                    "number": {
                        "value": 80, // Number of particles
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#ffffff" // Particle color
                    },
                    "shape": {
                        "type": "circle", // Shape type (circle, edge, triangle, polygon, star, image)
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        }
                    },
                    "opacity": {
                        "value": 0.5, // Particle opacity
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 3, // Particle size
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150, // Max distance for lines
                        "color": "#ffffff", // Line color
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 4, // Particle movement speed
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out", // Behavior when particles leave canvas (out, bounce)
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true, // Enable interactivity on hover
                            "mode": "repulse" // Interaction mode (grab, bubble, repulse)
                        },
                        "onclick": {
                            "enable": true, // Enable interactivity on click
                            "mode": "push" // Interaction mode (push, remove, bubble, repulse)
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 400,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 100, // Distance for repulsion effect
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4 // Number of particles pushed on click
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true // Enable retina display support
            }
        );
    } else {
        console.error("Element with ID 'particles-js' not found for particle initialization.");
    }

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuLinks = mobileMenu.querySelectorAll('.mobile-menu-link'); // Get all links inside mobile menu

    if (menuBtn && mobileMenu && closeMenuBtn) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
             // Use timeout to allow the 'hidden' class removal to render before starting transition
            setTimeout(() => {
                mobileMenu.classList.add('visible');
            }, 10); // Small delay
            menuBtn.innerHTML = '<i class="fas fa-times text-2xl"></i>'; // Change icon to 'X'
        });

        const closeMenu = () => {
             mobileMenu.classList.remove('visible');
              // Add 'hidden' back after transition ends for better accessibility/layout control
             mobileMenu.addEventListener('transitionend', () => {
                 mobileMenu.classList.add('hidden');
             }, { once: true }); // Ensure listener is removed after firing once
             menuBtn.innerHTML = '<i class="fas fa-bars text-2xl"></i>'; // Change icon back to 'bars'
        }

        closeMenuBtn.addEventListener('click', closeMenu);

        // Close menu when a link is clicked
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

    } else {
        console.error("Menu button or mobile menu element not found.");
    }

    // Optional: Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Only prevent default if it's an internal link within the page
            if (this.hash !== "") {
                 // Check if the target element exists
                 const targetElement = document.querySelector(this.hash);
                 if (targetElement) {
                     e.preventDefault();
                     targetElement.scrollIntoView({
                         behavior: 'smooth'
                     });

                     // If it's a mobile menu link, ensure the menu closes
                     if (this.classList.contains('mobile-menu-link')) {
                        const mobileMenu = document.getElementById('mobile-menu');
                        const menuBtn = document.getElementById('menu-btn');
                        if (mobileMenu && menuBtn && mobileMenu.classList.contains('visible')) {
                            mobileMenu.classList.remove('visible');
                            mobileMenu.addEventListener('transitionend', () => {
                                mobileMenu.classList.add('hidden');
                            }, { once: true });
                            menuBtn.innerHTML = '<i class="fas fa-bars text-2xl"></i>';
                        }
                    }
                 }

            }
        });
    });

});