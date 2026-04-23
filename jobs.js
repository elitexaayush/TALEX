const topStudentsData = [
    {
        rank: 1,
        id: 's1',
        name: 'Rahul Sharma',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul',
        specialty: 'Full Stack',
        totalScore: 9850,
        badges: 42,
        academicScore: '98%',
        problemSolving: 'Elite',
        hackathonWins: 3,
        tier: 'Legend',
        color: '#8B5CF6' // Violet for rank 1
    },
    {
        rank: 2,
        id: 's2',
        name: 'Anjali Gupta',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali',
        specialty: 'Frontend',
        totalScore: 9420,
        badges: 38,
        academicScore: '96%',
        problemSolving: 'Master',
        hackathonWins: 2,
        tier: 'Diamond',
        color: '#0EA5E9' // Sky Blue
    },
    {
        rank: 3,
        id: 's3',
        name: 'Vikram Singh',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram',
        specialty: 'Backend',
        totalScore: 8900,
        badges: 35,
        academicScore: '92%',
        problemSolving: 'Expert',
        hackathonWins: 1,
        tier: 'Gold',
        color: '#F59E0B' // Amber
    },
    {
        rank: 4,
        id: 's4',
        name: 'Neha Patel',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Neha',
        specialty: 'UI/UX Design',
        totalScore: 8650,
        badges: 31,
        academicScore: '95%',
        problemSolving: 'Advanced',
        hackathonWins: 2,
        tier: 'Gold',
        color: '#F43F5E' // Rose
    },
    {
        rank: 5,
        id: 's5',
        name: 'Rohan Desai',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan',
        specialty: 'AI/ML',
        totalScore: 8120,
        badges: 28,
        academicScore: '94%',
        problemSolving: 'Expert',
        hackathonWins: 1,
        tier: 'Gold',
        color: '#10B981' // Emerald
    },
    {
        rank: 6,
        id: 's6',
        name: 'Sneha Reddy',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha',
        specialty: 'Data Science',
        totalScore: 7900,
        badges: 25,
        academicScore: '91%',
        problemSolving: 'Advanced',
        hackathonWins: 0,
        tier: 'Silver',
        color: '#64748B' // Slate
    }
    // We render the top 6 as mock for now, but in reality it's "Top 20"
];

function renderJobsView() {
    const container = document.getElementById('jobs-grid');
    if (!container) return;

    container.innerHTML = topStudentsData.map(student => `
        <div class="job-card" style="border-top: 4px solid ${student.color}">
            <div class="job-header" style="align-items: center; justify-content: flex-start; gap: 1rem;">
                <div class="student-rank" style="background: ${student.color}15; color: ${student.color}; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.2rem;">
                    #${student.rank}
                </div>
                <img src="${student.avatar}" alt="${student.name}" style="width: 50px; height: 50px; border-radius: 50%; background: #F1F5F9;">
                <div>
                    <h3 class="job-title" style="margin-bottom: 0;">${student.name}</h3>
                    <span class="job-type internship" style="font-size: 0.7rem;">${student.tier} Tier</span>
                </div>
            </div>
            
            <p class="job-company" style="margin-bottom: 1rem; color: var(--primary-indigo); font-weight: 600;">
                <i data-lucide="code" style="width: 14px; height: 14px;"></i> ${student.specialty}
            </p>
            
            <div class="student-stats" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem; background: var(--bg-light); padding: 1rem; border-radius: 12px; border: 1px solid var(--border);">
                <div class="stat-box" style="display: flex; flex-direction: column;">
                    <span style="font-size: 0.75rem; color: var(--text-dim); text-transform: uppercase; font-weight: bold;">Badges</span>
                    <span style="font-size: 1.1rem; color: var(--text-dark); font-weight: 700;"><i data-lucide="award" style="width: 16px; height: 16px; color: #F59E0B; margin-right: 4px;"></i>${student.badges}</span>
                </div>
                <div class="stat-box" style="display: flex; flex-direction: column;">
                    <span style="font-size: 0.75rem; color: var(--text-dim); text-transform: uppercase; font-weight: bold;">Academics</span>
                    <span style="font-size: 1.1rem; color: var(--text-dark); font-weight: 700;"><i data-lucide="book-open" style="width: 16px; height: 16px; color: var(--primary-indigo); margin-right: 4px;"></i>${student.academicScore}</span>
                </div>
                <div class="stat-box" style="display: flex; flex-direction: column;">
                    <span style="font-size: 0.75rem; color: var(--text-dim); text-transform: uppercase; font-weight: bold;">Problem Solving</span>
                    <span style="font-size: 1rem; color: var(--text-dark); font-weight: 600;">${student.problemSolving}</span>
                </div>
                <div class="stat-box" style="display: flex; flex-direction: column;">
                    <span style="font-size: 0.75rem; color: var(--text-dim); text-transform: uppercase; font-weight: bold;">Total Score</span>
                    <span style="font-size: 1rem; color: var(--text-dark); font-weight: 600;">${student.totalScore} pts</span>
                </div>
            </div>
            
            <div class="job-footer" style="padding-top: 1rem;">
                <span class="job-posted" style="color: var(--primary-emerald);"><i data-lucide="check-circle"></i> Open to Offers</span>
                <button class="btn btn-primary btn-sm job-apply-btn" onclick="contactStudent('${student.name}')">Contact</button>
            </div>
        </div>
    `).join('');
    
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

function contactStudent(name) {
    if (typeof showToast === 'function') {
        showToast(`Message window opened for ${name}.`, 'success');
    } else {
        alert(`Message window opened for ${name}.`);
    }
}
