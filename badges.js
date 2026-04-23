// TALEX Badges Management Logic

const userBadges = [
    {
        id: 'b1',
        courseName: 'Full Stack Web Dev',
        tier: 'Gold',
        dateEarned: '2023-09-12',
        icon: 'shield-check',
        color: '#FFD700',
        description: 'Awarded for completing the 40-hour Full Stack Bootcamp with 95% accuracy.'
    },
    {
        id: 'b2',
        courseName: 'UI/UX Design',
        tier: 'Silver',
        dateEarned: '2023-10-05',
        icon: 'award',
        color: '#C0C0C0',
        description: 'Demonstrated excellence in visual hierarchy and user empathy mapping.'
    },
    {
        id: 'b3',
        courseName: 'React Patterns',
        tier: 'Gold',
        dateEarned: '2023-10-20',
        icon: 'zap',
        color: '#FFD700',
        description: 'Mastered advanced composition and hook patterns.'
    },
    {
        id: 'b4',
        courseName: 'Python for AI',
        tier: 'Bronze',
        dateEarned: '2023-08-15',
        icon: 'brain',
        color: '#CD7F32',
        description: 'Completed foundational modules in data processing with NumPy.'
    }
];

function renderBadgesView() {
    const grid = document.getElementById('badges-grid');
    if (!grid) return;

    grid.innerHTML = `
        <div class="badges-container">
            ${userBadges.map(badge => `
                <div class="badge-card ${badge.tier.toLowerCase()}">
                    <div class="badge-ribbon"></div>
                    <div class="badge-icon-wrap" style="background: ${badge.color}20; color: ${badge.color}">
                        <i data-lucide="${badge.icon}" size="40"></i>
                    </div>
                    <div class="badge-info">
                        <span class="badge-tier">${badge.tier}</span>
                        <h3 class="badge-course">${badge.courseName}</h3>
                        <p class="badge-date">Earned on ${badge.dateEarned}</p>
                        <div class="badge-desc">${badge.description}</div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    lucide.createIcons();
}
