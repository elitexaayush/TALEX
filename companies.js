const companiesData = [
    {
        id: 'c1',
        name: 'Google',
        logo: 'https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png',
        industry: 'Technology',
        location: 'Mountain View, CA',
        description: 'Google is a global leader in technology, specializing in Internet-related services and products, which include online advertising technologies, search engine, cloud computing, software, and hardware.',
        hiringStatus: 'Hiring Now',
        talexHires: 124,
        openings: 15,
        rating: 4.8,
        roles: [
            { title: 'Software Engineer', package: '₹18 - 25 LPA' },
            { title: 'Data Scientist', package: '₹20 - 28 LPA' },
            { title: 'Product Manager', package: '₹22 - 30 LPA' }
        ]
    },
    {
        id: 'c2',
        name: 'Microsoft',
        logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/image/RWBM6V?ver=1279&q=90&m=6&h=30&w=90&b=%23FFFFFFFF&f=jpg&o=f&aim=true',
        industry: 'Software',
        location: 'Redmond, WA',
        description: 'Microsoft Corporation is an American multinational technology corporation which produces computer software, consumer electronics, personal computers, and related services.',
        hiringStatus: 'Hiring Now',
        talexHires: 98,
        openings: 22,
        rating: 4.7,
        roles: [
            { title: 'Cloud Solutions Architect', package: '₹24 - 32 LPA' },
            { title: 'Full Stack Developer', package: '₹15 - 22 LPA' },
            { title: 'Security Engineer', package: '₹18 - 26 LPA' }
        ]
    },
    {
        id: 'c3',
        name: 'Amazon',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
        industry: 'E-commerce & Cloud',
        location: 'Seattle, WA',
        description: 'Amazon is a multinational technology company that focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence. It is one of the Big Five companies in the U.S. information technology industry.',
        hiringStatus: 'Active',
        talexHires: 210,
        openings: 45,
        rating: 4.5,
        roles: [
            { title: 'SDE-I', package: '₹16 - 20 LPA' },
            { title: 'SDE-II', package: '₹28 - 35 LPA' },
            { title: 'AWS Support Engineer', package: '₹12 - 18 LPA' }
        ]
    },
    {
        id: 'c4',
        name: 'Meta',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg',
        industry: 'Social Media',
        location: 'Menlo Park, CA',
        description: 'Meta Platforms, Inc., doing business as Meta and formerly named Facebook, Inc., is an American multinational technology conglomerate based in Menlo Park, California.',
        hiringStatus: 'Hiring Now',
        talexHires: 85,
        openings: 12,
        rating: 4.6,
        roles: [
            { title: 'Frontend Engineer (React)', package: '₹20 - 28 LPA' },
            { title: 'Machine Learning Engineer', package: '₹25 - 35 LPA' },
            { title: 'Product Designer', package: '₹18 - 24 LPA' }
        ]
    },
    {
        id: 'c5',
        name: 'Apple',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
        industry: 'Consumer Electronics',
        location: 'Cupertino, CA',
        description: 'Apple Inc. is an American multinational technology company that specializes in consumer electronics, software, and online services.',
        hiringStatus: 'Active',
        talexHires: 67,
        openings: 8,
        rating: 4.9,
        roles: [
            { title: 'iOS Developer', package: '₹22 - 30 LPA' },
            { title: 'Hardware Engineer', package: '₹20 - 28 LPA' },
            { title: 'Siri AI Engineer', package: '₹24 - 32 LPA' }
        ]
    },
    {
        id: 'c6',
        name: 'Netflix',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
        industry: 'Entertainment',
        location: 'Los Gatos, CA',
        description: 'Netflix, Inc. is an American content platform and production company headquartered in Los Gatos, California.',
        hiringStatus: 'Hiring Now',
        talexHires: 42,
        openings: 5,
        rating: 4.8,
        roles: [
            { title: 'Streaming Algorithms Engineer', package: '₹30 - 45 LPA' },
            { title: 'Content Systems Developer', package: '₹22 - 30 LPA' },
            { title: 'UI Engineer', package: '₹25 - 35 LPA' }
        ]
    }
];

function renderCompaniesView() {
    const container = document.getElementById('companies-grid');
    if (!container) return;

    container.innerHTML = companiesData.map(company => `
        <div class="company-card" onclick="openCompanyModal('${company.id}')">
            <div class="company-header">
                <div class="company-logo-container">
                    <img src="${company.logo}" alt="${company.name}" class="company-logo">
                </div>
                <div class="company-status ${company.hiringStatus.toLowerCase().replace(' ', '-')}">
                    ${company.hiringStatus}
                </div>
            </div>
            
            <div class="company-info">
                <h3>${company.name}</h3>
                <p class="company-industry"><i data-lucide="briefcase"></i> ${company.industry}</p>
                <p class="company-location"><i data-lucide="map-pin"></i> ${company.location}</p>
                <p class="company-desc">${company.description}</p>
            </div>
            
            <div class="company-stats">
                <div class="comp-stat">
                    <span>Hires</span>
                    <strong>${company.talexHires}</strong>
                </div>
                <div class="comp-stat">
                    <span>Jobs</span>
                    <strong>${company.openings}</strong>
                </div>
                <div class="comp-stat">
                    <span>Rating</span>
                    <strong>${company.rating} <i data-lucide="star" fill="currentColor"></i></strong>
                </div>
            </div>
            
            <div class="company-actions">
                <button class="btn btn-primary btn-block">View Details</button>
                <button class="btn btn-primary-outline btn-block" onclick="event.stopPropagation(); showToast('Following ${company.name}', 'success')">Follow</button>
            </div>
        </div>
    `).join('');
    
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

function openCompanyModal(companyId) {
    const company = companiesData.find(c => c.id === companyId);
    if (!company) return;

    const modal = document.getElementById('company-detail-modal');
    if (!modal) return;

    document.getElementById('comp-modal-logo').src = company.logo;
    document.getElementById('comp-modal-name').textContent = company.name;
    document.getElementById('comp-modal-industry').textContent = company.industry;
    document.getElementById('comp-modal-location').textContent = company.location;
    document.getElementById('comp-modal-desc').textContent = company.description;
    document.getElementById('comp-modal-hires').textContent = company.talexHires;
    document.getElementById('comp-modal-openings').textContent = company.openings;
    document.getElementById('comp-modal-rating').textContent = company.rating;

    const rolesList = document.getElementById('comp-modal-roles');
    rolesList.innerHTML = company.roles.map(role => `
        <div class="role-item">
            <div class="role-main">
                <h4>${role.title}</h4>
                <p><i data-lucide="package"></i> Package: <strong>${role.package}</strong></p>
            </div>
            <button class="btn btn-sm btn-primary">Apply Now</button>
        </div>
    `).join('');

    modal.classList.add('active');
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// Close Modal Logic
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('company-detail-modal');
    const closeBtn = document.getElementById('close-company-modal');
    
    if (closeBtn && modal) {
        closeBtn.onclick = () => modal.classList.remove('active');
        modal.onclick = (e) => {
            if (e.target === modal) modal.classList.remove('active');
        };
    }
});
