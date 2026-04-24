// TALEX CMS & Content Management Logic

// 1. Keyword Mapping for Auto-Categorization
const categoryKeywords = {
    'Programming': ['code', 'javascript', 'python', 'react', 'node', 'web', 'html', 'css', 'programming', 'dev', 'git', 'fullstack'],
    'Design': ['figma', 'design', 'ui', 'ux', 'wireframe', 'adobe', 'photoshop', 'illustrator', 'layout', 'typography'],
    'AI & Machine Learning': ['ai', 'machine learning', 'neural', 'tensor', 'model', 'data', 'algorithm', 'intelligence', 'robot'],
    'Cybersecurity': ['security', 'hack', 'cyber', 'encryption', 'firewall', 'network', 'vulnerability', 'privacy'],
    'Data Science': ['data', 'analytics', 'statistics', 'pandas', 'numpy', 'sql', 'visualization', 'graphs'],
    'Marketing': ['marketing', 'seo', 'ads', 'social', 'brand', 'content', 'growth'],
    'Business': ['business', 'startup', 'finance', 'entrepreneur', 'pitch', 'mvp', 'market'],
    'Public Speaking': ['speech', 'speaking', 'communication', 'talk', 'interview', 'presentation']
};

function autoDetectCategory(title, description, filename) {
    const text = `${title} ${description} ${filename}`.toLowerCase();
    let bestMatch = 'General';
    let maxHits = 0;

    for (const [category, keywords] of Object.entries(categoryKeywords)) {
        let hits = 0;
        keywords.forEach(word => {
            if (text.includes(word)) hits++;
        });
        if (hits > maxHits) {
            maxHits = hits;
            bestMatch = category;
        }
    }
    return bestMatch;
}

// 2. Mock Database for Uploads
let uploads = [
    {
        id: '1',
        title: 'Mastering React Context API',
        description: 'Deep dive into state management with Context.',
        file_type: 'video',
        course_category: 'Programming',
        uploader: 'Alex Johnson',
        uploader_avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
        created_at: '2023-10-20',
        views: 1205,
        downloads: 450,
        visibility: 'public'
    },
    {
        id: '2',
        title: 'UI Design Principles PDF',
        description: 'A comprehensive guide to modern UI design.',
        file_type: 'pdf',
        course_category: 'Design',
        uploader: 'Priya Sharma',
        uploader_avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
        created_at: '2023-10-22',
        views: 890,
        downloads: 210,
        visibility: 'public'
    }
];

// 3. UI Handlers
const publishModal = document.getElementById('publish-modal');
const uploadArea = document.getElementById('upload-area');
const fileInput = document.getElementById('file-input');
const uploadProgress = document.getElementById('upload-progress');
const progressFill = document.querySelector('.progress-fill');
const progressPercent = document.getElementById('progress-percent');
const publishForm = document.getElementById('publish-form');
const categorySelect = document.getElementById('publish-category');

function initCMS() {
    setupUploadHandlers();
    renderFeed();
}

function setupUploadHandlers() {
    const openBtn = document.getElementById('open-publish-modal');
    const openSidebarBtn = document.getElementById('nav-publish-sidebar');
    const closeBtn = document.getElementById('close-publish-modal');
    
    const openModal = () => {
        publishModal.classList.add('active');
    };

    if (openBtn) openBtn.onclick = openModal;
    if (openSidebarBtn) openSidebarBtn.onclick = openModal;
    
    if (closeBtn) {
        closeBtn.onclick = () => {
            publishModal.classList.remove('active');
        };
    }

    // Close on overlay click
    publishModal.onclick = (e) => {
        if (e.target === publishModal) {
            publishModal.classList.remove('active');
        }
    };

    uploadArea.onclick = () => fileInput.click();
    
    uploadArea.ondragover = (e) => {
        e.preventDefault();
        uploadArea.classList.add('dragging');
    };
    
    uploadArea.ondragleave = () => uploadArea.classList.remove('dragging');
    
    uploadArea.ondrop = (e) => {
        e.preventDefault();
        uploadArea.classList.remove('dragging');
        if (e.dataTransfer.files.length) {
            handleFileUpload(e.dataTransfer.files[0]);
        }
    };
    
    fileInput.onchange = (e) => {
        if (e.target.files.length) {
            handleFileUpload(e.target.files[0]);
        }
    };

    publishForm.onsubmit = (e) => {
        e.preventDefault();
        handleFormSubmit();
    };
}

function handleFileUpload(file) {
    // Show progress bar
    uploadProgress.style.display = 'block';
    
    // Simulate upload progress
    let progress = 0;
    const interval = setInterval(() => {
        progress += 5;
        progressFill.style.width = `${progress}%`;
        progressPercent.textContent = `${progress}%`;
        
        if (progress >= 100) {
            clearInterval(interval);
            showToast('File uploaded successfully!', 'success');
            
            // Auto-detect category
            const title = document.getElementById('publish-title').value;
            const desc = document.getElementById('publish-desc').value;
            const detected = autoDetectCategory(title, desc, file.name);
            categorySelect.value = detected;
        }
    }, 100);
}

function handleFormSubmit() {
    const title = document.getElementById('publish-title').value;
    const category = categorySelect.value;
    const type = document.getElementById('publish-type').value;

    const newUpload = {
        id: Date.now().toString(),
        title: title,
        description: document.getElementById('publish-desc').value,
        file_type: type,
        course_category: category,
        uploader: 'Alex Johnson (You)',
        uploader_avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
        created_at: new Date().toISOString().split('T')[0],
        views: 0,
        downloads: 0,
        visibility: document.getElementById('publish-visibility').checked ? 'private' : 'public'
    };

    uploads.unshift(newUpload);
    publishModal.classList.remove('active');
    showToast('Content published successfully!', 'success');
    renderFeed();
    renderProfileUploads();
    renderCommunityHighlights();
}

function renderFeed() {
    const feedGrid = document.getElementById('feed-grid');
    if (!feedGrid) return;
    
    feedGrid.innerHTML = '';
    
    // Group by category
    const grouped = {};
    uploads.forEach(item => {
        if (!grouped[item.course_category]) grouped[item.course_category] = [];
        grouped[item.course_category].push(item);
    });

    for (const [category, items] of Object.entries(grouped)) {
        const section = document.createElement('div');
        section.className = 'course-group';
        section.innerHTML = `
            <div class="course-group-header">
                <h3>${category}</h3>
            </div>
            <div class="content-grid">
                ${items.map(item => `
                    <div class="content-card">
                        <div class="card-preview">
                            <span class="type-badge">${item.file_type}</span>
                            <i data-lucide="${getFileIcon(item.file_type)}" size="48" color="#9CA3AF"></i>
                        </div>
                        <div class="card-body">
                            <h4 class="card-title">${item.title}</h4>
                            <p class="card-desc" style="font-size: 0.85rem; color: var(--text-dim); margin-bottom: 1rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${item.description}</p>
                            <div class="uploader-info">
                                <img src="${item.uploader_avatar}" alt="">
                                <span>${item.uploader}</span>
                            </div>
                            <div class="card-stats">
                                <span><i data-lucide="eye"></i> ${item.views}</span>
                                <span><i data-lucide="download"></i> ${item.downloads}</span>
                                <span>${item.created_at}</span>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        feedGrid.appendChild(section);
    }
    lucide.createIcons();
}

function getFileIcon(type) {
    if (type === 'video') return 'video';
    if (type === 'pdf') return 'file-text';
    return 'file-edit';
}

function renderProfileUploads() {
    const profileUploadsGrid = document.getElementById('profile-uploads-grid');
    if (!profileUploadsGrid) return;

    profileUploadsGrid.innerHTML = '';
    
    // Only show current user's uploads (mocked)
    const myUploads = uploads.filter(item => item.uploader.includes('You'));
    
    if (myUploads.length === 0) {
        profileUploadsGrid.innerHTML = '<p class="empty-msg">You haven\'t published anything yet.</p>';
        return;
    }

    myUploads.forEach(item => {
        const card = document.createElement('div');
        card.className = 'content-card';
        card.innerHTML = `
            <div class="card-preview">
                <span class="type-badge">${item.file_type}</span>
                <i data-lucide="${getFileIcon(item.file_type)}" size="40" color="#9CA3AF"></i>
            </div>
            <div class="card-body">
                <h4 class="card-title">${item.title}</h4>
                <div class="card-meta">
                    <span class="card-tag">${item.course_category}</span>
                </div>
                <div class="card-actions" style="margin-top: 1rem; display: flex; gap: 0.5rem;">
                    <button class="btn btn-sm btn-primary-outline" style="flex: 1;">Edit</button>
                    <button class="btn btn-sm" style="background: #FEE2E2; color: #EF4444;" onclick="deleteUpload('${item.id}')">Delete</button>
                </div>
            </div>
        `;
        profileUploadsGrid.appendChild(card);
    });
    lucide.createIcons();
}

function deleteUpload(id) {
    if (confirm('Are you sure you want to delete this content?')) {
        uploads = uploads.filter(item => item.id !== id);
        renderProfileUploads();
        renderFeed();
        showToast('Content deleted.', 'success');
    }
}

function renderCommunityHighlights() {
    const highlightsGrid = document.querySelector('.community-grid');
    if (!highlightsGrid) return;

    // Show top 3 recent uploads
    const recentItems = uploads.slice(0, 3);
    
    highlightsGrid.innerHTML = recentItems.map(item => `
        <div class="post-card content-card-style">
            <div class="post-header">
                <img src="${item.uploader_avatar}" alt="">
                <div class="post-user">
                    <strong>${item.uploader}</strong>
                    <span>${item.created_at}</span>
                </div>
                <span class="type-badge-mini">${item.file_type}</span>
            </div>
            <h4>${item.title}</h4>
            <p class="post-desc">${item.description}</p>
            <div class="post-stats">
                <span><i data-lucide="eye"></i> ${item.views}</span>
                <span><i data-lucide="download"></i> ${item.downloads}</span>
            </div>
            <button class="btn btn-sm btn-primary-outline" onclick="document.getElementById('nav-community').click()">View Details</button>
        </div>
    `).join('');
    
    if (window.lucide) {
        lucide.createIcons();
    }
}

// Initial call
function initCMS() {
    setupUploadHandlers();
    renderFeed();
    renderProfileUploads();
    renderCommunityHighlights();
}

initCMS();
