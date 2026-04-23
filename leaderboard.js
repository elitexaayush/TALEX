/**
 * TALEX Student Performance & Leaderboard Engine
 * Computes composite scores, rank tiers, and recruiter recommendations.
 */

const LeaderboardEngine = {
    // 1. COMPUTE COMPOSITE SCORE (0–1000 points)
    calculateScore: function(student) {
        const scores = {
            problem_solving: this.computeProblemSolving(student.problem_solving),
            test_performance: this.computeTestPerformance(student.test_scores),
            consistency: this.computeConsistency(student.consistency),
            badges: this.computeBadgeScore(student.badges),
            community: this.computeCommunityContribution(student.peer_interactions),
            improvement: this.computeImprovementMomentum(student.improvement_rate)
        };

        // Weighted Total
        const total = (
            (scores.problem_solving * 0.30) +
            (scores.test_performance * 0.25) +
            (scores.consistency * 0.20) +
            (scores.badges * 0.10) +
            (scores.community * 0.10) +
            (scores.improvement * 0.05)
        ) * 10; // Scaling to 0-1000

        return {
            composite_score: Math.round(total),
            breakdown: scores
        };
    },

    computeProblemSolving: function(ps) {
        // easy=1pt, medium=3pt, hard=7pt
        const raw = (ps.difficulty_breakdown.easy * 1) + 
                    (ps.difficulty_breakdown.medium * 3) + 
                    (ps.difficulty_breakdown.hard * 7);
        // Accuracy bonus (0-100 scale)
        const accuracyBonus = ps.accuracy_rate / 100;
        return Math.min(100, (raw / 2) * accuracyBonus); // Normalizing to 0-100
    },

    computeTestPerformance: function(tests) {
        if (!tests.length) return 0;
        const avg = tests.reduce((sum, t) => sum + (t.score / t.max_score), 0) / tests.length;
        return avg * 100;
    },

    computeConsistency: function(c) {
        const activeScore = (c.active_days_last_30 / 30) * 60;
        const streakScore = Math.min(40, c.current_streak_days + (c.longest_streak_days / 5));
        return Math.min(100, activeScore + streakScore);
    },

    computeBadgeScore: function(badges) {
        let total = 0;
        badges.forEach(b => {
            const lower = b.toLowerCase();
            if (lower.includes('platinum')) total += 50;
            else if (lower.includes('gold')) total += 30;
            else if (lower.includes('silver')) total += 15;
            else if (lower.includes('bronze')) total += 5;
        });
        return Math.min(100, total);
    },

    computeCommunityContribution: function(p) {
        const score = (p.solutions_upvoted / 10) + (p.discussions_started * 2) + (p.help_given_count * 1.5);
        return Math.min(100, score);
    },

    computeImprovementMomentum: function(rate) {
        return Math.min(100, rate * 5); // 20% improvement = 100 pts
    },

    // 2. ASSIGN RANK TIER
    getRank: function(score) {
        if (score >= 900) return { tier: "Grandmaster", emoji: "🏆" };
        if (score >= 750) return { tier: "Diamond", emoji: "💎" };
        if (score >= 600) return { tier: "Platinum", emoji: "🥇" };
        if (score >= 450) return { tier: "Gold", emoji: "🥈" };
        if (score >= 300) return { tier: "Silver", emoji: "🥉" };
        if (score >= 150) return { tier: "Bronze", emoji: "🔵" };
        return { tier: "Unranked", emoji: "⚪" };
    },

    // 3. COMPANY RECOMMENDATION
    getCompanyScore: function(student, composite) {
        const techStrength = (composite.breakdown.problem_solving + composite.breakdown.test_performance) / 2;
        const reliability = composite.breakdown.consistency;
        const softSkills = composite.breakdown.community;
        const growth = composite.breakdown.improvement;

        const score = Math.round((techStrength * 0.4) + (reliability * 0.3) + (softSkills * 0.2) + (growth * 0.1));
        
        let pitch = "";
        if (score > 85) {
            pitch = `${student.name} is a high-velocity engineer with exceptional problem-solving depth and a ${student.consistency.current_streak_days}-day consistency streak. Highly recommended for fast-paced technical roles requiring both skill and reliability.`;
        } else {
            pitch = `${student.name} shows strong technical fundamentals and a consistent learning habit. A reliable candidate with steady growth momentum and active community engagement.`;
        }

        return { score, recruiter_pitch: pitch };
    },

    // 4. IDENTIFY STRENGTHS & IMPROVEMENTS
    analyzePerformance: function(student, breakdown) {
        const strengths = [];
        const improve = [];

        // Analysis logic
        if (student.problem_solving.accuracy_rate > 85) strengths.push(`High Technical Accuracy (${student.problem_solving.accuracy_rate}%)`);
        if (student.consistency.current_streak_days > 10) strengths.push(`Strong Discipline (${student.consistency.current_streak_days}-day streak)`);
        if (breakdown.community > 70) strengths.push("Exceptional Community Contributor");
        
        if (student.problem_solving.difficulty_breakdown.hard < 5) improve.push("Increase exposure to 'Hard' difficulty problems");
        if (breakdown.test_performance < 80) improve.push("Target higher scores in subject-specific assessments");

        return { strengths, improve };
    },

    // Wrapper function to process a student
    processStudent: function(student) {
        const { composite_score, breakdown } = this.calculateScore(student);
        const rank = this.getRank(composite_score);
        const companyRec = this.getCompanyScore(student, { composite_score, breakdown });
        const analysis = this.analyzePerformance(student, breakdown);

        return {
            student_id: student.student_id,
            composite_score: composite_score,
            rank_tier: rank.tier,
            rank_emoji: rank.emoji,
            score_breakdown: {
                problem_solving: Math.round(breakdown.problem_solving),
                test_performance: Math.round(breakdown.test_performance),
                consistency: Math.round(breakdown.consistency),
                badges: Math.round(breakdown.badges),
                community: Math.round(breakdown.community),
                improvement: Math.round(breakdown.improvement)
            },
            leaderboard_position_estimate: composite_score > 800 ? "Top 1%" : (composite_score > 600 ? "Top 10%" : "Top 25%"),
            company_recommendation: companyRec,
            strengths: analysis.strengths,
            improve: analysis.improve,
            next_badge_suggestion: student.problem_solving.problems_solved > 100 ? "Platinum: Logic Wizard" : "Gold: Problem Solver"
        };
    }
};

// Export for use
if (typeof module !== 'undefined') {
    module.exports = LeaderboardEngine;
}
