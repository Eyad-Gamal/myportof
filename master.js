        // Preloader
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('preloader').style.opacity = '0';
                document.getElementById('preloader').style.visibility = 'hidden';
            }, 1000);
        });

        // Create floating squares for  entire page
        function createFloatingSquares() {
            const container = document.getElementById('floating-squares');
            const squareCount = 12;
            
            for (let i = 0; i < squareCount; i++) {
                const square = document.createElement('div');
                square.classList.add('floating-square');
                
                // Alternate colors
                if (i % 2 === 0) {
                    square.classList.add('alt');
                }
                
                // Random positions
                const randomTop = Math.random() * 100;
                const randomLeft = Math.random() * 100;
                const randomDelay = Math.random() * 15;
                const randomDuration = 12 + Math.random() * 10;
                
                square.style.top = `${randomTop}%`;
                square.style.left = `${randomLeft}%`;
                square.style.animationDelay = `${randomDelay}s`;
                square.style.animationDuration = `${randomDuration}s`;
                
                container.appendChild(square);
            }
        }
        
        // Initialize floating squares
        createFloatingSquares();

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(10, 25, 47, 0.95)';
                navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.background = 'rgba(17, 34, 64, 0.85)';
                navbar.style.boxShadow = 'none';
            }
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Form submission
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            // Show loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Show success message
                alert('Thanks! Your message has been sent. I\'ll get back to you soon.');
                this.reset();
            }, 1500);
        });

        // Mobile menu toggle
        document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });