// Course Data
const courses = [
    {
        id: 1,
        title: "Full Stack Web Development",
        category: "Technical",
        instructor: "Alex Johnson",
        rating: 4.8,
        reviews: "1.5k",
        duration: "12 weeks",
        lessons: 48,
        cost: 150,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
        description: "Master HTML, CSS, JavaScript, React, Node.js and build real-world web apps from scratch.",
        curriculum: ["HTML5 & CSS3 Deep Dive", "JavaScript ES6+ Fundamentals", "React Hooks & Context API", "Node.js & Express Backend", "MongoDB Database Integration"],
        trending: true,
        new: false
    },
    {
        id: 2,
        title: "UI/UX Designing Masterclass",
        category: "Technical",
        instructor: "Priya Sharma",
        rating: 4.7,
        reviews: "2.1k",
        duration: "8 weeks",
        lessons: 32,
        cost: 120,
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?auto=format&fit=crop&w=800&q=80",
        description: "Learn user research, wireframing, prototyping and design thinking using Figma and Adobe XD.",
        curriculum: ["Intro to User-Centered Design", "User Research & Personas", "Wireframing in Figma", "Interactive Prototyping", "Design Systems & Handover"],
        trending: true,
        new: false
    },
    {
        id: 3,
        title: "Artificial Intelligence & Machine Learning",
        category: "Technical",
        instructor: "Dr. Raj Patel",
        rating: 4.9,
        reviews: "850",
        duration: "16 weeks",
        lessons: 64,
        cost: 200,
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
        description: "Dive into supervised learning, neural networks, NLP and build AI models using Python & TensorFlow.",
        curriculum: ["Linear Algebra for ML", "Supervised vs Unsupervised Learning", "Neural Network Architecture", "Natural Language Processing", "Deploying ML Models"],
        trending: true,
        new: true
    },
    {
        id: 4,
        title: "Cloud Computing with AWS",
        category: "Technical",
        instructor: "Sarah Kim",
        rating: 4.6,
        reviews: "920",
        duration: "10 weeks",
        lessons: 40,
        cost: 180,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
        description: "Learn EC2, S3, Lambda, DevOps pipelines and deploy scalable cloud applications on AWS.",
        curriculum: ["AWS Global Infrastructure", "Compute Services (EC2, Lambda)", "Storage Solutions (S3, EBS)", "Networking (VPC, Route53)", "AWS Security & IAM"],
        trending: false,
        new: false
    },
    {
        id: 5,
        title: "AI in Resource Management",
        category: "Technical",
        instructor: "James Carter",
        rating: 4.5,
        reviews: "450",
        duration: "6 weeks",
        lessons: 24,
        cost: 130,
        image: "https://images.unsplash.com/photo-1551288049-bbdac8a28a1e?auto=format&fit=crop&w=800&q=80",
        description: "Understand how AI optimizes resource allocation, workforce planning and operational efficiency.",
        curriculum: ["Predictive Analytics for Resources", "AI in Supply Chain", "Workforce Optimization Models", "Inventory Management AI", "Case Studies in Efficiency"],
        trending: false,
        new: true
    },
    {
        id: 6,
        title: "Cybersecurity & Ethical Hacking",
        category: "Technical",
        instructor: "Marcus Lee",
        rating: 4.8,
        reviews: "1.1k",
        duration: "12 weeks",
        lessons: 52,
        cost: 160,
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
        description: "Learn penetration testing, network security, vulnerability assessment and ethical hacking tools.",
        curriculum: ["Linux Basics for Hackers", "Network Scanning & Enumeration", "Web App Vulnerabilities", "Exploitation Techniques", "Incident Response Basics"],
        trending: true,
        new: false
    },
    {
        id: 7,
        title: "Data Science & Analytics",
        category: "Technical",
        instructor: "Anita Roy",
        rating: 4.7,
        reviews: "1.8k",
        duration: "14 weeks",
        lessons: 56,
        cost: 170,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        description: "Master data wrangling, visualization, statistical analysis and predictive modeling with Python.",
        curriculum: ["Pandas & NumPy for Data Science", "Data Visualization with Seaborn", "Statistical Hypothesis Testing", "Regression & Classification", "Time Series Analysis"],
        trending: false,
        new: false
    },
    {
        id: 8,
        title: "Mobile App Development (Flutter)",
        category: "Technical",
        instructor: "Chris Wang",
        rating: 4.6,
        reviews: "750",
        duration: "10 weeks",
        lessons: 44,
        cost: 140,
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
        description: "Build cross-platform iOS and Android apps using Flutter and Dart from beginner to advanced.",
        curriculum: ["Dart Language Basics", "Flutter Widget Tree", "State Management (Provider/Bloc)", "API Integration in Flutter", "Firebase for Mobile Apps"],
        trending: true,
        new: false
    },
    {
        id: 9,
        title: "Blockchain & Web3 Development",
        category: "Technical",
        instructor: "Ethan Brooks",
        rating: 4.4,
        reviews: "600",
        duration: "8 weeks",
        lessons: 36,
        cost: 150,
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
        description: "Learn Solidity, smart contracts, DeFi, NFTs and build decentralized applications on Ethereum.",
        curriculum: ["Blockchain Fundamentals", "Solidity Smart Contracts", "ERC20 & ERC721 Tokens", "Web3.js/Ethers.js Integration", "Building your first DApp"],
        trending: false,
        new: true
    },
    {
        id: 10,
        title: "DevOps & CI/CD Pipelines",
        category: "Technical",
        instructor: "Nina Patel",
        rating: 4.5,
        reviews: "820",
        duration: "8 weeks",
        lessons: 30,
        cost: 145,
        image: "https://images.unsplash.com/photo-1618401471353-b98aadebc248?auto=format&fit=crop&w=800&q=80",
        description: "Master Docker, Kubernetes, Jenkins, Git workflows and automate software deployment pipelines.",
        curriculum: ["Version Control with Git", "Containerization with Docker", "Kubernetes Orchestration", "CI/CD with Jenkins/GitHub Actions", "Infrastructure as Code"],
        trending: false,
        new: false
    },
    {
        id: 11,
        title: "Python Programming — Zero to Hero",
        category: "Technical",
        instructor: "Omar Hassan",
        rating: 4.9,
        reviews: "3.2k",
        duration: "6 weeks",
        lessons: 28,
        cost: 100,
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
        description: "Complete Python course covering syntax, OOP, file handling, APIs and automation scripting.",
        curriculum: ["Python Syntax & Data Types", "Control Flow & Functions", "Object-Oriented Python", "File I/O & Error Handling", "Web Scraping & Automation"],
        trending: true,
        new: false
    },
    {
        id: 12,
        title: "Game Development with Unity",
        category: "Technical",
        instructor: "Lena Fischer",
        rating: 4.6,
        reviews: "540",
        duration: "12 weeks",
        lessons: 45,
        cost: 155,
        image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=800&q=80",
        description: "Build 2D and 3D games using Unity engine, C# scripting, physics and game design principles.",
        curriculum: ["Unity Editor Basics", "C# for Unity Developers", "Physics & Collision Detection", "Game UI & Sound Effects", "Publishing to Mobile/PC"],
        trending: false,
        new: false
    },
    {
        id: 13,
        title: "Digital Marketing & SEO",
        category: "Non-Technical",
        instructor: "Sofia Martinez",
        rating: 4.7,
        reviews: "1.4k",
        duration: "6 weeks",
        lessons: 22,
        cost: 110,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        description: "Master SEO, Google Ads, social media strategy, email marketing and content creation.",
        curriculum: ["SEO Keyword Research", "Google Search Ads", "Social Media Engagement", "Email Funnel Marketing", "Analytics & Reporting"],
        trending: true,
        new: false
    },
    {
        id: 14,
        title: "Content Writing & Copywriting",
        category: "Non-Technical",
        instructor: "David Clarke",
        rating: 4.5,
        reviews: "890",
        duration: "4 weeks",
        lessons: 16,
        cost: 80,
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
        description: "Learn persuasive writing, blog creation, SEO content, brand storytelling and copywriting.",
        curriculum: ["Writing for the Web", "Copywriting Headlines", "Storytelling for Brands", "SEO Optimized Articles", "Freelance Writing Career"],
        trending: false,
        new: false
    },
    {
        id: 15,
        title: "Entrepreneurship & Startup Fundamentals",
        category: "Non-Technical",
        instructor: "Aisha Nkosi",
        rating: 4.8,
        reviews: "670",
        duration: "6 weeks",
        lessons: 20,
        cost: 120,
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
        description: "Build your startup idea, validate markets, pitch investors and launch your MVP confidently.",
        curriculum: ["Ideation & Problem Solving", "Business Model Canvas", "Market Validation", "Pitching to Investors", "Launching your MVP"],
        trending: true,
        new: true
    },
    {
        id: 16,
        title: "Graphic Designing with Canva & Photoshop",
        category: "Non-Technical",
        instructor: "Riya Desai",
        rating: 4.6,
        reviews: "2.5k",
        duration: "5 weeks",
        lessons: 25,
        cost: 90,
        image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=800&q=80",
        description: "Create stunning social media posts, logos, banners and brand kits using Canva and Photoshop.",
        curriculum: ["Color Theory & Typography", "Canva for Fast Design", "Photoshop Layering & Retouching", "Logo Design Principles", "Brand Kit Creation"],
        trending: false,
        new: false
    },
    {
        id: 17,
        title: "Public Speaking & Communication Skills",
        category: "Non-Technical",
        instructor: "Thomas Grant",
        rating: 4.7,
        reviews: "1.2k",
        duration: "4 weeks",
        lessons: 12,
        cost: 75,
        image: "https://images.unsplash.com/photo-1475721027187-402ad2989a3b?auto=format&fit=crop&w=800&q=80",
        description: "Overcome stage fear, build confidence, master storytelling and ace interviews and presentations.",
        curriculum: ["Body Language & Tone", "Overcoming Anxiety", "Speech Structure", "Engaging the Audience", "Interview Mastery"],
        trending: true,
        new: false
    },
    {
        id: 18,
        title: "Financial Literacy & Personal Finance",
        category: "Non-Technical",
        instructor: "Meera Joshi",
        rating: 4.6,
        reviews: "1.6k",
        duration: "4 weeks",
        lessons: 15,
        cost: 85,
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
        description: "Learn budgeting, investing, tax basics, stock markets and building long-term wealth strategies.",
        curriculum: ["Budgeting 101", "Saving vs Investing", "Intro to Stock Markets", "Taxes & Retirement", "Asset Allocation"],
        trending: false,
        new: false
    },
    {
        id: 19,
        title: "Video Editing & YouTube Content Creation",
        category: "Non-Technical",
        instructor: "Jake Turner",
        rating: 4.5,
        reviews: "1.1k",
        duration: "5 weeks",
        lessons: 18,
        cost: 95,
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
        description: "Master video editing, color grading, transitions, thumbnails and grow a YouTube channel.",
        curriculum: ["Premiere Pro Workflow", "Cutting & Transitions", "Audio Mixing for Video", "YouTube Algorithm Basics", "Thumbnail Design"],
        trending: true,
        new: true
    },
    {
        id: 20,
        title: "Leadership & Team Management",
        category: "Non-Technical",
        instructor: "Claire Dubois",
        rating: 4.8,
        reviews: "780",
        duration: "4 weeks",
        lessons: 14,
        cost: 100,
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
        description: "Develop leadership mindset, manage teams effectively, resolve conflicts and drive performance.",
        curriculum: ["Situational Leadership", "Effective Delegation", "Conflict Resolution", "Motivating your Team", "Decision Making Models"],
        trending: false,
        new: false
    }
];

// App State
let userCredits = 500;
let enrolledCourses = [];
let currentCategory = 'all';
let searchQuery = '';
let currentSort = 'popular';

// DOM Elements
const grid = document.getElementById('explore-grid');
const balanceEl = document.getElementById('wallet-balance');
const searchInput = document.getElementById('course-search');
const filterBtns = document.querySelectorAll('.filter-btn');
const sortSelect = document.getElementById('course-sort');
const modal = document.getElementById('course-modal');
const modalClose = document.querySelector('.modal-close');
const toastContainer = document.getElementById('toast-container');

// View Switching Elements
const navHome = document.getElementById('nav-home');
const navMyCourses = document.getElementById('nav-my-courses');
const navExplore = document.getElementById('nav-explore');
const viewHome = document.getElementById('view-home');
const viewMyCourses = document.getElementById('view-my-courses');
const myCoursesFullGrid = document.getElementById('my-courses-full-grid');
const noCoursesMsg = document.getElementById('no-courses-msg');

// Initialization
function init() {
    // Load user name from localStorage
    const savedName = localStorage.getItem('talex-user-name');
    if (savedName) {
        const welcomeNameEl = document.getElementById('welcome-user-name');
        if (welcomeNameEl) {
            // Extract just the first name for the welcome banner
            const firstName = savedName.split(' ')[0];
            welcomeNameEl.textContent = firstName;
        }
        
        const profileInputEl = document.getElementById('profile-name-input');
        if (profileInputEl) {
            profileInputEl.value = savedName;
        }
    }

    renderCourses();
    setupEventListeners();
    setupNavigation();
}

// Navigation Logic
const navCommunity = document.getElementById('nav-community');
const navProfile = document.getElementById('nav-profile');
const navLeaderboard = document.getElementById('nav-leaderboard');
const navBadges = document.getElementById('nav-badges');
const navEvents = document.getElementById('nav-events');
const navSettings = document.getElementById('nav-settings');
const navJobs = document.getElementById('nav-jobs');
const navCompanies = document.getElementById('nav-companies');
const navResume = document.getElementById('nav-resume');

const viewCommunity = document.getElementById('view-community');
const viewProfile = document.getElementById('view-profile');
const viewLeaderboard = document.getElementById('view-leaderboard');
const viewBadges = document.getElementById('view-badges');
const viewEvents = document.getElementById('view-events');
const viewSettings = document.getElementById('view-settings');
const viewJobs = document.getElementById('view-jobs');
const viewCompanies = document.getElementById('view-companies');
const viewResume = document.getElementById('view-resume');

function setupNavigation() {
    navHome.onclick = (e) => {
        e.preventDefault();
        switchView('home');
    };
    navMyCourses.onclick = (e) => {
        e.preventDefault();
        switchView('my-courses');
    };
    navExplore.onclick = (e) => {
        e.preventDefault();
        switchView('home');
        setTimeout(() => {
            document.getElementById('explore-section').scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };
    if (navCommunity) {
        navCommunity.onclick = (e) => {
            e.preventDefault();
            switchView('community');
        };
    }
    if (navProfile) {
        navProfile.onclick = (e) => {
            e.preventDefault();
            switchView('profile');
        };
    }
    if (navLeaderboard) {
        navLeaderboard.onclick = (e) => {
            e.preventDefault();
            switchView('leaderboard');
        };
    }
    if (navBadges) {
        navBadges.onclick = (e) => {
            e.preventDefault();
            switchView('badges');
        };
    }
    if (navEvents) {
        navEvents.onclick = (e) => {
            e.preventDefault();
            switchView('events');
        };
    }
    if (navSettings) {
        navSettings.onclick = (e) => {
            e.preventDefault();
            switchView('settings');
        };
    }
    if (navJobs) {
        navJobs.onclick = (e) => {
            e.preventDefault();
            switchView('jobs');
        };
    }
    if (navResume) {
        navResume.onclick = (e) => {
            e.preventDefault();
            switchView('resume');
        };
    }
    if (navCompanies) {
        navCompanies.onclick = (e) => {
            e.preventDefault();
            switchView('companies');
        };
    }

    // Settings Inner Tabs Logic
    const settingsTabs = document.querySelectorAll('.settings-tab');
    settingsTabs.forEach(tab => {
        tab.onclick = () => {
            settingsTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            document.querySelectorAll('.settings-panel').forEach(p => p.style.display = 'none');
            const targetPanel = document.getElementById(`setting-${tab.dataset.tab}`);
            if (targetPanel) targetPanel.style.display = 'block';
        };
    });
}

function switchView(viewId) {
    // Update Nav
    document.querySelectorAll('.menu-item').forEach(item => item.classList.remove('active'));
    if (viewId === 'home') navHome.classList.add('active');
    if (viewId === 'my-courses') navMyCourses.classList.add('active');
    if (viewId === 'community' && navCommunity) navCommunity.classList.add('active');
    if (viewId === 'profile' && navProfile) navProfile.classList.add('active');
    if (viewId === 'leaderboard' && navLeaderboard) navLeaderboard.classList.add('active');
    if (viewId === 'badges' && navBadges) navBadges.classList.add('active');
    if (viewId === 'events' && navEvents) navEvents.classList.add('active');
    if (viewId === 'settings' && navSettings) navSettings.classList.add('active');
    if (viewId === 'jobs' && navJobs) navJobs.classList.add('active');
    if (viewId === 'companies' && navCompanies) navCompanies.classList.add('active');

    // Update Views
    document.querySelectorAll('.dashboard-view').forEach(view => view.classList.remove('active'));
    if (viewId === 'home') viewHome.classList.add('active');
    if (viewId === 'my-courses') {
        viewMyCourses.classList.add('active');
        renderMyCoursesFullView();
    }
    if (viewId === 'community' && viewCommunity) {
        viewCommunity.classList.add('active');
        if (typeof renderFeed === 'function') renderFeed();
    }
    if (viewId === 'profile' && viewProfile) {
        viewProfile.classList.add('active');
        if (typeof renderProfileUploads === 'function') renderProfileUploads();
    }
    if (viewId === 'leaderboard' && viewLeaderboard) {
        viewLeaderboard.classList.add('active');
        if (typeof renderLeaderboardView === 'function') renderLeaderboardView();
    }
    if (viewId === 'badges' && viewBadges) {
        viewBadges.classList.add('active');
        if (typeof renderBadgesView === 'function') renderBadgesView();
    }
    if (viewId === 'events' && viewEvents) {
        viewEvents.classList.add('active');
        if (typeof renderEventsView === 'function') renderEventsView();
    }
    if (viewId === 'settings' && viewSettings) {
        viewSettings.classList.add('active');
    }
    if (viewId === 'jobs' && viewJobs) {
        viewJobs.classList.add('active');
        if (typeof renderJobsView === 'function') renderJobsView();
    }
    if (viewId === 'companies' && viewCompanies) {
        viewCompanies.classList.add('active');
        if (typeof renderCompaniesView === 'function') renderCompaniesView();
    }

    if (viewId === 'resume') {
        if (navResume) navResume.classList.add('active');
        if (viewResume) {
            viewResume.classList.add('active');
            if (typeof initResumeBuilder === 'function') initResumeBuilder();
        }
    }
}

function renderMyCoursesFullView() {
    myCoursesFullGrid.innerHTML = '';
    
    if (enrolledCourses.length === 0) {
        noCoursesMsg.style.display = 'flex';
        myCoursesFullGrid.style.display = 'none';
        return;
    }

    noCoursesMsg.style.display = 'none';
    myCoursesFullGrid.style.display = 'grid';

    enrolledCourses.forEach(courseId => {
        const course = courses.find(c => c.id === courseId);
        if (!course) return;

        const card = document.createElement('div');
        card.className = 'course-card';
        card.style.minWidth = 'auto'; // Reset min-width for grid
        card.innerHTML = `
            <div class="course-thumb" style="background: url('${course.image}'); background-size: cover; background-position: center;">
                <div style="background: rgba(0,0,0,0.3); width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
                    <i data-lucide="play-circle" color="white" size="48"></i>
                </div>
            </div>
            <div class="course-details">
                <span class="card-tag">${course.category}</span>
                <h4 style="margin-top: 0.5rem;">${course.title}</h4>
                <div class="progress-container" style="margin-top: 1rem;">
                    <div class="progress-bar" style="width: 0%;"></div>
                </div>
                <div class="course-footer">
                    <span>0% Complete</span>
                    <button class="btn btn-sm btn-primary">Continue</button>
                </div>
            </div>
        `;
        myCoursesFullGrid.appendChild(card);
    });
    
    lucide.createIcons();
}

// Event Listeners
function setupEventListeners() {
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        renderCourses();
    });

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderCourses();
        });
    });

    sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderCourses();
    });

    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
    });

    // Settings Functionality
    const saveProfileBtn = document.getElementById('save-profile-btn');
    if (saveProfileBtn) {
        saveProfileBtn.addEventListener('click', () => {
            showToast('Profile settings saved successfully!', 'success');
        });
    }

    const updatePwdBtn = document.getElementById('update-password-btn');
    if (updatePwdBtn) {
        updatePwdBtn.addEventListener('click', () => {
            showToast('Password updated securely!', 'success');
        });
    }

    // Theme Toggle Logic
    const themeLight = document.getElementById('theme-light');
    const themeDark = document.getElementById('theme-dark');
    
    if (themeLight && themeDark) {
        themeLight.addEventListener('click', () => {
            document.body.classList.remove('dark-theme');
            themeLight.classList.add('active');
            themeDark.classList.remove('active');
            localStorage.setItem('talex-theme', 'light');
            showToast('Light theme applied.', 'success');
        });

        themeDark.addEventListener('click', () => {
            document.body.classList.add('dark-theme');
            themeDark.classList.add('active');
            themeLight.classList.remove('active');
            localStorage.setItem('talex-theme', 'dark');
            showToast('Dark theme applied.', 'success');
        });

        // Load saved theme
        const savedTheme = localStorage.getItem('talex-theme') || 'dark';
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
            themeDark.classList.add('active');
            themeLight.classList.remove('active');
        } else {
            document.body.classList.remove('dark-theme');
            themeLight.classList.add('active');
            themeDark.classList.remove('active');
        }
    }
}

// Render Functions
function renderCourses() {
    // Show skeleton loaders if needed (simulating delay)
    // grid.innerHTML = '<div class="skeleton-card"></div>'.repeat(4);
    
    let filtered = courses.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(searchQuery) || 
                            course.instructor.toLowerCase().includes(searchQuery);
        const matchesCategory = currentCategory === 'all' || 
                               (currentCategory === 'technical' && course.category === 'Technical') ||
                               (currentCategory === 'non-technical' && course.category === 'Non-Technical') ||
                               (currentCategory === 'trending' && course.trending) ||
                               (currentCategory === 'new' && course.new) ||
                               (currentCategory === 'free' && course.cost === 0);
        return matchesSearch && matchesCategory;
    });

    // Sorting
    filtered.sort((a, b) => {
        if (currentSort === 'popular') return b.reviews.replace('k', '') * 1000 - a.reviews.replace('k', '') * 1000;
        if (currentSort === 'newest') return b.new - a.new;
        if (currentSort === 'low-credits') return a.cost - b.cost;
        if (currentSort === 'high-rated') return b.rating - a.rating;
        return 0;
    });

    grid.innerHTML = '';
    
    if (filtered.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-gray);">No courses found matching your criteria.</div>';
        return;
    }

    filtered.forEach(course => {
        const isEnrolled = enrolledCourses.includes(course.id);
        const card = document.createElement('div');
        card.className = 'explore-card';
        card.innerHTML = `
            <img src="${course.image}" class="card-img" alt="${course.title}">
            ${isEnrolled ? '<div class="enrolled-badge">✅ Enrolled</div>' : ''}
            <div class="card-content">
                <div class="card-header">
                    <span class="card-tag">${course.category}</span>
                    <span class="credit-badge">${course.cost} CP</span>
                </div>
                <h4>${course.title}</h4>
                <p class="instructor-line">by ${course.instructor}</p>
                <div class="card-meta">
                    <span><i data-lucide="star" fill="#FFD700" color="#FFD700"></i> ${course.rating} (${course.reviews})</span>
                    <span><i data-lucide="clock"></i> ${course.duration}</span>
                </div>
                <button class="btn ${isEnrolled ? 'btn-primary' : 'btn-primary-outline'} enroll-btn" data-id="${course.id}">
                    ${isEnrolled ? 'Go to Course <i data-lucide="arrow-right"></i>' : 'Enroll Now'}
                </button>
            </div>
            <div class="hover-desc">
                ${course.description}
            </div>
        `;
        
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.enroll-btn')) {
                openModal(course);
            }
        });

        card.querySelector('.enroll-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            if (isEnrolled) {
                showToast('Launching course...', 'success');
            } else {
                confirmEnrollment(course);
            }
        });

        grid.appendChild(card);
    });

    lucide.createIcons();
}

function openModal(course) {
    const isEnrolled = enrolledCourses.includes(course.id);
    document.getElementById('modal-banner').style.backgroundImage = `url(${course.image})`;
    document.getElementById('modal-tag').textContent = course.category;
    document.getElementById('modal-title').textContent = course.title;
    document.getElementById('modal-price').textContent = `${course.cost} CP`;
    document.getElementById('modal-desc').textContent = course.description;
    document.getElementById('modal-inst-name').textContent = course.instructor;
    document.getElementById('modal-inst-img').src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${course.instructor}`;
    document.getElementById('modal-rating').innerHTML = `<i data-lucide="star" fill="#FFD700" color="#FFD700"></i> <span>${course.rating} (${course.reviews})</span>`;
    document.getElementById('modal-duration').textContent = course.duration;
    document.getElementById('modal-lessons').textContent = course.lessons;

    const list = document.getElementById('modal-curriculum-list');
    list.innerHTML = '';
    course.curriculum.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });

    const enrollBtn = document.getElementById('modal-enroll-btn');
    enrollBtn.innerHTML = isEnrolled ? 'Go to Course <i data-lucide="arrow-right"></i>' : 'Enroll Now';
    enrollBtn.onclick = () => {
        if (isEnrolled) {
            modal.classList.remove('active');
            showToast('Launching course...', 'success');
        } else {
            confirmEnrollment(course);
        }
    };

    modal.classList.add('active');
    lucide.createIcons();
}

function confirmEnrollment(course) {
    if (userCredits < course.cost) {
        showToast('Not enough credits! Earn more by publishing content or completing courses.', 'error');
        return;
    }

    executeEnrollment(course);
}

function executeEnrollment(course) {
    // Find the specific card element
    const cards = document.querySelectorAll('.explore-card');
    let targetCard = null;
    cards.forEach(card => {
        if (card.querySelector('.enroll-btn').dataset.id == course.id) {
            targetCard = card;
        }
    });

    if (targetCard) {
        // Play enrollment animation
        targetCard.classList.add('enrolling');
        
        // Wait for animation to finish before updating UI completely
        setTimeout(() => {
            finalizeEnrollment(course);
        }, 800);
    } else {
        finalizeEnrollment(course);
    }
}

function finalizeEnrollment(course) {
    userCredits -= course.cost;
    enrolledCourses.push(course.id);
    
    // Update Wallet UI
    balanceEl.textContent = userCredits;
    balanceEl.parentElement.parentElement.classList.add('wallet-bounce');
    setTimeout(() => balanceEl.parentElement.parentElement.classList.remove('wallet-bounce'), 500);

    // Update Main UI
    renderCourses();
    
    // If modal is open, update it
    if (modal.classList.contains('active')) {
        document.getElementById('modal-enroll-btn').innerHTML = 'Go to Course <i data-lucide="arrow-right"></i>';
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    // Success Toast
    showToast(`🎉 You're enrolled! "${course.title}" added to My Courses.`, 'success');
    
    // Add to "My Courses" section
    updateMyCoursesSection(course);
}

function updateMyCoursesSection(course) {
    const myCoursesRow = document.querySelector('.course-row');
    if (!myCoursesRow) return;

    const newCourseCard = document.createElement('div');
    newCourseCard.className = 'course-card';
    newCourseCard.innerHTML = `
        <div class="course-thumb" style="background: url('${course.image}'); background-size: cover; background-position: center;">
            <div style="background: rgba(0,0,0,0.3); width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
                <i data-lucide="play-circle" color="white" size="48"></i>
            </div>
        </div>
        <div class="course-details">
            <h4>${course.title}</h4>
            <div class="progress-container">
                <div class="progress-bar" style="width: 0%;"></div>
            </div>
            <div class="course-footer">
                <span>0% Complete</span>
                <button class="btn btn-sm btn-primary">Continue</button>
            </div>
        </div>
    `;
    
    // Add to the beginning of the row
    myCoursesRow.prepend(newCourseCard);
    
    // Scroll to the "My Courses" section so user sees it
    document.querySelector('.my-courses-section').scrollIntoView({ behavior: 'smooth' });
    
    lucide.createIcons();
}

function showToast(message, type) {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <i data-lucide="${type === 'success' ? 'check-circle' : 'alert-circle'}"></i>
        <span>${message}</span>
    `;
    toastContainer.appendChild(toast);
    
    setTimeout(() => toast.classList.add('active'), 100);
    setTimeout(() => {
        toast.classList.remove('active');
        setTimeout(() => toast.remove(), 400);
    }, 4000);
    
    lucide.createIcons();
}

// Notifications System
const mockNotifications = [
    {
        id: 'n1',
        type: 'rank',
        icon: 'trending-up',
        text: '<strong>Congratulations!</strong> You have been promoted to the <strong>Diamond Tier</strong> on the Leaderboard!',
        time: 'Just now',
        unread: true
    },
    {
        id: 'n2',
        type: 'credit',
        icon: 'wallet',
        text: '<strong>-50 CP</strong> used to unlock the advanced "React System Design" module.',
        time: '2 hours ago',
        unread: true
    },
    {
        id: 'n3',
        type: 'event',
        icon: 'calendar',
        text: 'Reminder: The "Global UI/UX Hackathon" starts in exactly 24 hours.',
        time: '1 day ago',
        unread: true
    },
    {
        id: 'n4',
        type: 'credit',
        icon: 'award',
        text: '<strong>+100 CP</strong> earned for completing the Frontend Architecture path!',
        time: '3 days ago',
        unread: false
    }
];

function renderNotifications() {
    const list = document.getElementById('notif-list');
    if (!list) return;

    if (mockNotifications.length === 0) {
        list.innerHTML = '<div style="padding: 2rem; text-align: center; color: var(--text-dim);">No new notifications</div>';
        return;
    }

    list.innerHTML = mockNotifications.map(n => `
        <div class="notif-item ${n.unread ? 'unread' : ''}" onclick="readNotification('${n.id}', this)">
            <div class="notif-icon ${n.type}">
                <i data-lucide="${n.icon}"></i>
            </div>
            <div class="notif-text">
                <p>${n.text}</p>
                <span>${n.time}</span>
            </div>
        </div>
    `).join('');

    updateNotificationBadge();
    
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

function updateNotificationBadge() {
    const badge = document.querySelector('#bell-btn .badge');
    if (!badge) return;
    
    const unreadCount = mockNotifications.filter(n => n.unread).length;
    if (unreadCount > 0) {
        badge.textContent = unreadCount;
        badge.style.display = 'flex';
    } else {
        badge.style.display = 'none';
    }
}

function toggleNotifications() {
    const dropdown = document.getElementById('notif-dropdown');
    if (dropdown) {
        dropdown.classList.toggle('show');
        if (dropdown.classList.contains('show')) {
            renderNotifications();
        }
    }
}

function readNotification(id, el) {
    const notif = mockNotifications.find(n => n.id === id);
    if (notif && notif.unread) {
        notif.unread = false;
        el.classList.remove('unread');
        updateNotificationBadge();
    }
}

function markAllRead(e) {
    e.preventDefault();
    mockNotifications.forEach(n => n.unread = false);
    renderNotifications();
}

// Close notification dropdown when clicking outside
document.addEventListener('click', (e) => {
    const notifDropdown = document.getElementById('notif-dropdown');
    const bellBtn = document.getElementById('bell-btn');
    if (notifDropdown && notifDropdown.classList.contains('show')) {
        if (!notifDropdown.contains(e.target) && !bellBtn.contains(e.target)) {
            notifDropdown.classList.remove('show');
        }
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    updateNotificationBadge();
});

// Start App
init();

// Cursor Glow Follow Logic (Smooth Easing)
const cursorGlow = document.getElementById('cursor-glow');
if (cursorGlow) {
    let mouseX = 0;
    let mouseY = 0;
    let glowX = 0;
    let glowY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    const updateGlow = () => {
        glowX += (mouseX - glowX) * 0.15;
        glowY += (mouseY - glowY) * 0.15;
        
        cursorGlow.style.left = glowX + 'px';
        cursorGlow.style.top = glowY + 'px';
        
        requestAnimationFrame(updateGlow);
    };
    
    updateGlow();
}
