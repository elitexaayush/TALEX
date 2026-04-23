const eventsData = [
    {
        id: 'e1',
        title: 'Global Hackathon 2026',
        type: 'Hackathon',
        date: 'Oct 15 - Oct 17',
        participants: '1.2k+',
        reward: 'Legendary Hacker Badge',
        color: '#4F46E5', // Indigo
        icon: 'terminal',
        description: 'A 48-hour global hackathon building AI-driven solutions.'
    },
    {
        id: 'e2',
        title: 'React Performance Workshop',
        type: 'Workshop',
        date: 'Oct 20, 10:00 AM',
        participants: '300+',
        reward: 'React Mastery Badge',
        color: '#0EA5E9', // Sky Blue
        icon: 'layout',
        description: 'Deep dive into optimizing large-scale React applications.'
    },
    {
        id: 'e3',
        title: 'Weekly Algo Test Series',
        type: 'Test Series',
        date: 'Every Sunday',
        participants: '850+',
        reward: 'Algorithmic Thinker Badge',
        color: '#10B981', // Emerald
        icon: 'brain',
        description: 'Competitive programming challenges to sharpen your logic.'
    },
    {
        id: 'e4',
        title: 'UI/UX Design Sprint',
        type: 'Workshop',
        date: 'Oct 25, 2:00 PM',
        participants: '450+',
        reward: 'Design Innovator Badge',
        color: '#F43F5E', // Rose
        icon: 'pen-tool',
        description: 'Hands-on sprint designing accessible interfaces.'
    },
    {
        id: 'e5',
        title: 'Web3 & Blockchain Hackathon',
        type: 'Hackathon',
        date: 'Nov 5 - Nov 7',
        participants: '800+',
        reward: 'Web3 Pioneer Badge',
        color: '#8B5CF6', // Violet
        icon: 'hexagon',
        description: 'Build decentralized apps and smart contracts.'
    },
    {
        id: 'e6',
        title: 'Mock Interview Series',
        type: 'Test Series',
        date: 'Ongoing',
        participants: '500+',
        reward: 'Interview Ready Badge',
        color: '#F59E0B', // Amber
        icon: 'mic',
        description: 'Peer-to-peer technical and behavioral mock interviews.'
    }
];

function renderEventsView() {
    const container = document.getElementById('events-grid');
    if (!container) return;

    container.innerHTML = eventsData.map(event => `
        <div class="event-card-v2" style="--event-color: ${event.color}">
            <div class="event-header">
                <div class="event-icon-wrap">
                    <i data-lucide="${event.icon}"></i>
                </div>
                <span class="event-type">${event.type}</span>
            </div>
            <h3 class="event-title">${event.title}</h3>
            <p class="event-desc">${event.description}</p>
            
            <div class="event-meta">
                <div class="meta-item">
                    <i data-lucide="calendar"></i>
                    <span>${event.date}</span>
                </div>
                <div class="meta-item">
                    <i data-lucide="users"></i>
                    <span>${event.participants}</span>
                </div>
            </div>
            
            <div class="event-reward">
                <i data-lucide="award"></i>
                <div class="reward-text">
                    <span class="reward-label">Reward:</span>
                    <span class="reward-value">${event.reward}</span>
                </div>
            </div>
            
            <button class="btn-register-event" onclick="registerEvent('${event.id}')">
                Register for ${event.type}
            </button>
        </div>
    `).join('');
    
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

function registerEvent(id) {
    const event = eventsData.find(e => e.id === id);
    if (!event) return;
    
    if (typeof showToast === 'function') {
        showToast(`Successfully registered for ${event.title}!`, 'success');
    } else {
        alert(`Successfully registered for ${event.title}!`);
    }
}
