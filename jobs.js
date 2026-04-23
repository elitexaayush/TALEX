const jobsData = [
    {
        id: 'j1',
        title: 'Frontend Developer Intern',
        company: 'TechFlow Solutions',
        location: 'Remote',
        type: 'Internship',
        salary: '$20 - $30 / hr',
        tags: ['React', 'CSS', 'JavaScript'],
        posted: '2 days ago',
        logo: 'briefcase'
    },
    {
        id: 'j2',
        title: 'Junior UI/UX Designer',
        company: 'Creative Studio',
        location: 'New York, NY',
        type: 'Full-time',
        salary: '$60k - $80k',
        tags: ['Figma', 'Prototyping', 'Design Systems'],
        posted: '1 day ago',
        logo: 'layout'
    },
    {
        id: 'j3',
        title: 'Backend Engineering Intern',
        company: 'DataStream Inc.',
        location: 'San Francisco, CA',
        type: 'Internship',
        salary: '$35 / hr',
        tags: ['Node.js', 'PostgreSQL', 'API Design'],
        posted: '4 hours ago',
        logo: 'server'
    },
    {
        id: 'j4',
        title: 'React Native Developer',
        company: 'AppInnovators',
        location: 'Remote',
        type: 'Contract',
        salary: '$40 - $55 / hr',
        tags: ['Mobile', 'React Native', 'Typescript'],
        posted: '3 days ago',
        logo: 'smartphone'
    },
    {
        id: 'j5',
        title: 'Data Analyst Intern',
        company: 'FinTech Hub',
        location: 'London, UK (Hybrid)',
        type: 'Internship',
        salary: '£20,000 prorated',
        tags: ['Python', 'SQL', 'Tableau'],
        posted: '1 week ago',
        logo: 'pie-chart'
    },
    {
        id: 'j6',
        title: 'Full Stack Developer',
        company: 'Startup Alpha',
        location: 'Berlin, DE',
        type: 'Full-time',
        salary: '€50k - €70k',
        tags: ['Vue.js', 'Django', 'AWS'],
        posted: '5 days ago',
        logo: 'code'
    }
];

function renderJobsView() {
    const container = document.getElementById('jobs-grid');
    if (!container) return;

    container.innerHTML = jobsData.map(job => `
        <div class="job-card">
            <div class="job-header">
                <div class="job-logo">
                    <i data-lucide="${job.logo}"></i>
                </div>
                <span class="job-type ${job.type.toLowerCase().replace('-', '')}">${job.type}</span>
            </div>
            
            <h3 class="job-title">${job.title}</h3>
            <p class="job-company">${job.company}</p>
            
            <div class="job-meta">
                <div class="meta-item">
                    <i data-lucide="map-pin"></i>
                    <span>${job.location}</span>
                </div>
                <div class="meta-item">
                    <i data-lucide="dollar-sign"></i>
                    <span>${job.salary}</span>
                </div>
            </div>
            
            <div class="job-tags">
                ${job.tags.map(tag => `<span class="job-tag">${tag}</span>`).join('')}
            </div>
            
            <div class="job-footer">
                <span class="job-posted"><i data-lucide="clock"></i> ${job.posted}</span>
                <button class="btn btn-primary btn-sm job-apply-btn" onclick="applyJob('${job.id}')">Apply Now</button>
            </div>
        </div>
    `).join('');
    
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

function applyJob(id) {
    const job = jobsData.find(j => j.id === id);
    if (!job) return;
    
    if (typeof showToast === 'function') {
        showToast(`Application sent for ${job.title} at ${job.company}!`, 'success');
    } else {
        alert(`Application sent for ${job.title} at ${job.company}!`);
    }
}
