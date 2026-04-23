/**
 * TALEX Student Performance & Leaderboard Engine
 * Computes composite scores, rank tiers, and recruiter recommendations.
 */

const LeaderboardEngine = {
    // Ranking Criteria (weighted scoring)
    calculateScore: function(student) {
        const scores = student.scores;
        
        // Weights
        const total = (
            (scores.badges * 0.15) +
            (scores.academic * 0.20) +
            (scores.problem_solving * 0.25) +
            (scores.hackathon * 0.15) +
            (scores.participation * 0.10) +
            (scores.streak * 0.05) +
            (scores.collaboration * 0.10)
        );

        return {
            composite_score: Math.round(total),
            breakdown: scores
        };
    },

    getRank: function(score) {
        if (score >= 90) return { tier: "Legend", emoji: "🏆", color: "#FFD700" };
        if (score >= 80) return { tier: "Diamond", emoji: "💎", color: "#B9F2FF" };
        if (score >= 65) return { tier: "Gold", emoji: "🥇", color: "#FFC107" };
        if (score >= 50) return { tier: "Silver", emoji: "🥈", color: "#C0C0C0" };
        if (score >= 30) return { tier: "Bronze", emoji: "🥉", color: "#CD7F32" };
        return { tier: "Unranked", emoji: "⚪", color: "#94A3B8" };
    },

    // Process list for display
    processLeaderboard: function(data) {
        return data.map(s => {
            const { composite_score } = this.calculateScore(s);
            const rank = this.getRank(composite_score);
            return {
                ...s,
                total: composite_score,
                rank_tier: rank.tier,
                rank_emoji: rank.emoji,
                rank_color: rank.color,
                rank_diff: s.previous_rank - (data.indexOf(s) + 1) // Mock diff logic
            };
        }).sort((a, b) => b.total - a.total);
    }
};

const studentsData = [
    { id: "s1", name: "Alex Johnson", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex", scores: { badges: 85, academic: 92, problem_solving: 88, hackathon: 75, participation: 90, streak: 45, collaboration: 82 }, previous_rank: 2, tier: "Diamond" },
    { id: "s2", name: "Priya Sharma", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya", scores: { badges: 95, academic: 88, problem_solving: 94, hackathon: 90, participation: 85, streak: 60, collaboration: 92 }, previous_rank: 1, tier: "Legend" },
    { id: "s3", name: "Michael Chen", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael", scores: { badges: 70, academic: 95, problem_solving: 82, hackathon: 60, participation: 75, streak: 30, collaboration: 65 }, previous_rank: 5, tier: "Gold" },
    { id: "s14", name: "Mia Hernandez", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mia", scores: { badges: 92, academic: 88, problem_solving: 96, hackathon: 92, participation: 90, streak: 65, collaboration: 98 }, previous_rank: 14, tier: "Legend" },
    { id: "s10", name: "Sophia Martinez", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia", scores: { badges: 88, academic: 94, problem_solving: 90, hackathon: 88, participation: 95, streak: 50, collaboration: 95 }, previous_rank: 7, tier: "Diamond" }
    // ... truncated for brevity in UI, but engine handles all
];

function renderLeaderboardView() {
    const grid = document.getElementById('leaderboard-grid');
    if (!grid) return;

    const processed = LeaderboardEngine.processLeaderboard(studentsData);
    
    grid.innerHTML = `
        <div class="table-wrapper">
            <table class="leaderboard-table">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Student</th>
                        <th>Tier</th>
                        <th>Overall</th>
                        <th>Breakdown</th>
                    </tr>
                </thead>
                <tbody>
                    ${processed.map((s, i) => `
                        <tr>
                            <td>
                                <div class="rank-cell">
                                    <span class="rank-number">${i + 1}</span>
                                    <span class="rank-indicator ${s.rank_diff >= 0 ? 'up' : 'down'}">
                                        <i data-lucide="${s.rank_diff >= 0 ? 'arrow-up' : 'arrow-down'}"></i>
                                        ${Math.abs(s.rank_diff)}
                                    </span>
                                </div>
                            </td>
                            <td>
                                <div class="student-info">
                                    <img src="${s.avatar}" alt="">
                                    <span>${s.name}</span>
                                </div>
                            </td>
                            <td>
                                <span class="tier-badge" style="background: ${s.rank_color}20; color: ${s.rank_color}; border: 1px solid ${s.rank_color}40">
                                    ${s.rank_tier}
                                </span>
                            </td>
                            <td><strong style="font-size: 1.2rem; color: var(--primary-blue)">${s.total}</strong></td>
                            <td>
                                <div class="score-mini-grid">
                                    <span title="Logic"><i data-lucide="brain"></i> ${s.scores.problem_solving}</span>
                                    <span title="Academic"><i data-lucide="award"></i> ${s.scores.academic}</span>
                                    <span title="Consistency"><i data-lucide="zap"></i> ${s.scores.streak}</span>
                                </div>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
    lucide.createIcons();
}
