<<<<<<< HEAD
// Theme toggle functionality
function initTheme() {
    const themeToggle = document.querySelector('.theme-toggle');
    const icon = themeToggle.querySelector('i');
    
    // Check for saved theme preference or default to 'light'
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(icon, savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(icon, newTheme);
    });
}

function updateThemeIcon(icon, theme) {
    icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// Call initTheme when the document is loaded
document.addEventListener('DOMContentLoaded', initTheme);

// Add these CSS variables to your styles
document.head.insertAdjacentHTML('beforeend', `
    <style>
        :root {
            --bg-color: #ffffff;
            --text-color: #333333;
            --nav-bg: #ffffff;
            --nav-text: #333333;
            --nav-hover: #007bff;
            --nav-border: #ddd;
            --card-bg: #ffffff;
            --shadow-color: rgba(0, 0, 0, 0.1);
            --border-color: #ddd;
            --heading-color: #333;
            --footer-bg: #f8f9fa;
            --section-bg: #ffffff;
            --card-text: #333333;
            --feature-bg: #ffffff;
            --input-bg: #ffffff;
        }

        [data-theme="dark"] {
            --bg-color: #121212;
            --text-color: #ffffff;
            --nav-bg: #1a1a1a;
            --nav-text: #ffffff;
            --nav-hover: #007bff;
            --nav-border: #333;
            --card-bg: #1a1a1a;
            --shadow-color: rgba(255, 255, 255, 0.1);
            --border-color: #333;
            --heading-color: #ffffff;
            --footer-bg: #1a1a1a;
            --section-bg: #121212;
            --card-text: #ffffff;
            --feature-bg: #1a1a1a;
            --input-bg: #2d2d2d;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            transition: all 0.3s ease;
        }

        .navbar {
            background-color: var(--nav-bg);
            border-bottom: 1px solid var(--nav-border);
            transition: all 0.3s ease;
        }

        .nav-links li a {
            color: var(--nav-text);
            transition: color 0.3s ease;
        }

        .nav-links li a:hover {
            color: var(--nav-hover);
        }

        .logo {
            color: var(--nav-text);
            transition: color 0.3s ease;
        }

        .idea-card {
            background-color: var(--card-bg);
            border-color: var(--border-color);
            color: var(--card-text);
        }

        .idea-card h3, .idea-card p {
            color: var(--card-text);
        }

        .footer {
            background-color: var(--footer-bg);
            color: var(--text-color);
        }

        h1, h2, h3, h4, h5, h6 {
            color: var(--heading-color);
        }

        .about-contact, .sell-idea, .ceo-section, .idea-listings {
            background-color: var(--section-bg);
            color: var(--text-color);
        }

        .feature-item {
            background-color: var(--feature-bg);
            border: 1px solid var(--border-color);
            color: var(--text-color);
        }

        input, textarea, select {
            background-color: var(--input-bg);
            color: var(--text-color);
            border-color: var(--border-color);
        }

        input::placeholder, textarea::placeholder {
            color: var(--text-color);
            opacity: 0.7;
        }

        .footer-section h3 {
            color: var(--heading-color);
        }

        .footer-section ul li a {
            color: var(--text-color);
        }

        .social-links a {
            color: var(--text-color);
        }

        .ceo-message {
            color: var(--text-color);
        }

        .designation {
            color: var(--text-color);
        }

        .features-list .feature-item {
            background-color: var(--card-bg);
            color: var(--text-color);
        }

        .features-list .feature-item h3 {
            color: var(--heading-color);
        }

        .features-list .feature-item p {
            color: var(--text-color);
        }

        .about-cta {
            color: var(--text-color);
        }

        .theme-toggle {
            color: var(--nav-text);
            transition: all 0.3s ease;
        }

        [data-theme="dark"] .navbar {
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        [data-theme="dark"] .theme-toggle {
            color: #ffd700;
        }

        [data-theme="dark"] .theme-toggle:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }

        [data-theme="dark"] .nav-links li a:hover {
            color: #007bff;
        }

        [data-theme="dark"] .navbar.scrolled {
            background-color: rgba(26, 26, 26, 0.95);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }

        [data-theme="dark"] .login-btn {
            background: #007bff;
            color: white;
        }

        [data-theme="dark"] .login-btn:hover {
            background: #0056b3;
        }

        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: start;
            margin-bottom: 0.5rem;
        }

        .remove-btn {
            background: none;
            border: none;
            color: #ff4444;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0 0.5rem;
            line-height: 1;
            opacity: 0.7;
            transition: all 0.3s ease;
        }

        .remove-btn:hover {
            opacity: 1;
            transform: scale(1.1);
        }

        .idea-card {
            transition: all 0.3s ease;
        }
    </style>
`);

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'white';
        navbar.style.boxShadow = 'none';
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Search bar functionality
const searchBar = document.querySelector('.search-bar');
searchBar.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const ideaCards = document.querySelectorAll('.idea-card');
    
    ideaCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        const tags = card.querySelector('.tags').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm) || tags.includes(searchTerm)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
});

// File upload preview
const fileUpload = document.getElementById('file-upload');
const fileLabel = document.querySelector('.file-upload-label');

fileUpload.addEventListener('change', function(e) {
    const fileName = e.target.files[0]?.name;
    if (fileName) {
        fileLabel.textContent = `Selected: ${fileName}`;
    } else {
        fileLabel.textContent = 'Choose File';
    }
});

// Form submission handling
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Submitting...';
        submitBtn.disabled = true;

        setTimeout(() => {
            submitBtn.textContent = 'Success!';
            form.reset();
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        }, 1500);
    });
});

// Idea cards hover effect
const ideaCards = document.querySelectorAll('.idea-card');
ideaCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Horizontal scroll for idea listings using mouse wheel
const ideaGrid = document.querySelector('.idea-grid');
ideaGrid.addEventListener('wheel', function(e) {
    if (e.deltaY !== 0) {
        e.preventDefault();
        this.scrollLeft += e.deltaY;
    }
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate sections on scroll
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
});

// Dynamic copyright year
document.querySelector('.copyright').textContent = 
    `© ${new Date().getFullYear()} IdeaMart. All rights reserved.`;

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Function to create a new idea card
function createIdeaCard(ideaData) {
    const card = document.createElement('div');
    card.className = 'idea-card';
    
    card.innerHTML = `
        <h3>${ideaData.title}</h3>
        <p>${ideaData.description}</p>
        <span class="price">$${ideaData.price}</span>
        <span class="tags">${ideaData.category}</span>
        <button class="view-btn">View Details</button>
    `;
    
    // Add hover effects
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    });
    
    return card;
}

// Handle sell idea form submission
const sellIdeaForm = document.querySelector('.sell-idea form');
if (sellIdeaForm) {
    sellIdeaForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const title = this.querySelector('input[placeholder="Title"]').value;
        const description = this.querySelector('textarea[placeholder="Description"]').value;
        const category = this.querySelector('input[placeholder="Category"]').value;
        const price = this.querySelector('input[placeholder="Price (Optional)"]').value || '0';
        
        // Validate form data
        if (!title || !description || !category) {
            alert('Please fill in all required fields');
            return;
        }
        
        // Create new idea object
        const newIdea = {
            title: title,
            description: description,
            category: category,
            price: price.replace(/[^0-9]/g, '') // Remove non-numeric characters
        };
        
        // Create new idea card
        const newCard = createIdeaCard(newIdea);
        
        // Find the idea-row and add the new card
        const ideaRow = document.querySelector('.idea-row');
        if (ideaRow) {
            // Add new card at the beginning
            ideaRow.insertBefore(newCard, ideaRow.firstChild);
            
            // Save to localStorage
            saveIdeaToStorage(newIdea);
            
            // Show success message
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Submitting...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.textContent = 'Success! Idea Listed';
                this.reset();
                
                // Scroll to ideas section
                const ideasSection = document.querySelector('.idea-listings');
                if (ideasSection) {
                    ideasSection.scrollIntoView({ behavior: 'smooth' });
                }
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            }, 1500);
        }
    });
}

// Save idea to localStorage
function saveIdeaToStorage(idea) {
    let ideas = JSON.parse(localStorage.getItem('userIdeas') || '[]');
    ideas.unshift(idea);
    localStorage.setItem('userIdeas', JSON.stringify(ideas));
}

// Load saved ideas on page load
function loadSavedIdeas() {
    const ideas = JSON.parse(localStorage.getItem('userIdeas') || '[]');
    const ideaRow = document.querySelector('.idea-row');
    
    if (ideaRow && ideas.length > 0) {
        ideas.forEach(idea => {
            const card = createIdeaCard(idea);
            ideaRow.insertBefore(card, ideaRow.firstChild);
        });
    }
}

// Initialize saved ideas when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadSavedIdeas();
    
    // Add hover effects to existing cards
    document.querySelectorAll('.idea-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        });
    });

    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        // Animate hamburger to X
        this.classList.toggle('active');
        const spans = this.querySelectorAll('span');
        if (this.classList.contains('active')) {
            spans[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close mobile menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
});

// Auth Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.querySelector('.login-btn');
    const authModal = document.getElementById('authModal');
    const closeModal = document.querySelector('.close-modal');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const authForms = document.querySelectorAll('.auth-form');
    const profileContainer = document.querySelector('.profile-container');
    
    // Open modal
    loginBtn.addEventListener('click', () => {
        authModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    
    // Close modal
    closeModal.addEventListener('click', () => {
        authModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === authModal) {
            authModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Tab switching
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            authForms.forEach(f => f.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(`${btn.dataset.tab}Form`).classList.add('active');
        });
    });
    
    // Handle form submissions
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = loginForm.querySelector('input[type="email"]').value;
        const username = email.split('@')[0]; // Using email prefix as username
        
        // Store user data
        localStorage.setItem('currentUser', JSON.stringify({ username, email }));
        
        // Update UI
        updateProfileUI(username);
        
        // Close modal
        authModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = signupForm.querySelector('input[type="text"]').value;
        const email = signupForm.querySelector('input[type="email"]').value;
        
        // Store user data
        localStorage.setItem('currentUser', JSON.stringify({ username, email }));
        
        // Update UI
        updateProfileUI(username);
        
        // Close modal
        authModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Handle logout
    const logoutBtn = document.querySelector('.logout-btn');
    logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('currentUser');
        loginBtn.style.display = 'block';
        profileContainer.style.display = 'none';
    });
    
    // Check if user is logged in on page load
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        updateProfileUI(currentUser.username);
    }
    
    function updateProfileUI(username) {
        loginBtn.style.display = 'none';
        profileContainer.style.display = 'flex';
        profileContainer.querySelector('.username').textContent = username;
    }
});

// Making the View Details button functional

document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    const popupTitle = document.getElementById("popup-title");
    const popupDescription = document.getElementById("popup-description");
    const closePopupBtn = document.querySelector(".close-popup");

    // Function to show the popup with details
    function showPopup(title, description) {
        popupTitle.textContent = title;
        popupDescription.textContent = description;
        popup.style.display = "flex"; // Make it visible
    }

    // Attach event listeners to "View Details" buttons
    document.querySelectorAll(".view-btn").forEach(button => {
        button.addEventListener("click", event => {
            const ideaCard = event.target.closest(".idea-card");
            const title = ideaCard.querySelector("h3").textContent;
            const description = ideaCard.querySelector("p").textContent;
            showPopup(title, description);
        });
    });

    // Close popup functionality
    closePopupBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });

    // Close popup when clicking outside the content
    popup.addEventListener("click", (event) => {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});

