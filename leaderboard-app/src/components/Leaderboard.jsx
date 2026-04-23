import React, { useState, useMemo } from 'react';
import { 
  Trophy, 
  Search, 
  ArrowUp, 
  ArrowDown, 
  Filter, 
  Brain, 
  Award, 
  Zap, 
  Users, 
  Calendar,
  Sparkles,
  ChevronRight,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer 
} from 'recharts';
import { studentsData } from '../mockData';
import { analyzeLeaderboard } from '../aiService';
import './Leaderboard.css';

const Leaderboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('total');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isAIAnalyzing, setIsAIAnalyzing] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState('');

  // Weighted score calculation
  const calculateTotalScore = (scores) => {
    return (
      (scores.badges * 0.15) +
      (scores.academic * 0.20) +
      (scores.problem_solving * 0.25) +
      (scores.hackathon * 0.15) +
      (scores.participation * 0.10) +
      (scores.streak * 0.05) +
      (scores.collaboration * 0.10)
    );
  };

  const processedData = useMemo(() => {
    return studentsData
      .map(s => ({
        ...s,
        total: calculateTotalScore(s.scores)
      }))
      .sort((a, b) => b[sortBy] - a[sortBy]);
  }, [sortBy]);

  const filteredData = processedData.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAIAnalysis = async () => {
    setIsAIAnalyzing(true);
    const analysis = await analyzeLeaderboard(processedData);
    setAiAnalysis(analysis);
    setIsAIAnalyzing(false);
  };

  const getTierColor = (tier) => {
    switch (tier) {
      case 'Legend': return '#FFD700';
      case 'Diamond': return '#B9F2FF';
      case 'Gold': return '#FFC107';
      case 'Silver': return '#C0C0C0';
      case 'Bronze': return '#CD7F32';
      default: return '#94A3B8';
    }
  };

  return (
    <div className="leaderboard-container">
      <header className="leaderboard-header">
        <div className="header-title">
          <Trophy className="trophy-icon" />
          <h1>Student Leaderboard</h1>
        </div>
        
        <div className="header-actions">
          <div className="search-box">
            <Search size={18} />
            <input 
              type="text" 
              placeholder="Search students..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <button 
            className={`ai-btn ${isAIAnalyzing ? 'loading' : ''}`}
            onClick={handleAIAnalysis}
            disabled={isAIAnalyzing}
          >
            <Sparkles size={18} />
            {isAIAnalyzing ? 'Analyzing...' : 'AI Insights'}
          </button>
        </div>
      </header>

      <div className="filter-bar">
        <Filter size={16} />
        <span>Sort by:</span>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="total">Overall Score</option>
          <option value="badges">Badges</option>
          <option value="academic">GPA</option>
          <option value="problem_solving">Problem Solving</option>
          <option value="streak">Streak</option>
        </select>
      </div>

      {aiAnalysis && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="ai-analysis-box"
        >
          <div className="ai-box-header">
            <Sparkles size={16} />
            <h3>Claude AI Analysis</h3>
            <button onClick={() => setAiAnalysis('')}>&times;</button>
          </div>
          <p>{aiAnalysis}</p>
        </motion.div>
      )}

      <div className="table-wrapper">
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Student</th>
              <th>Tier</th>
              <th>Overall</th>
              <th>Breakdown</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence mode="popLayout">
              {filteredData.map((student, index) => {
                const rank = index + 1;
                const rankDiff = student.previous_rank - rank;
                
                return (
                  <motion.tr 
                    key={student.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    onClick={() => setSelectedStudent(student)}
                  >
                    <td>
                      <div className="rank-cell">
                        <span className="rank-number">{rank}</span>
                        {rankDiff !== 0 && (
                          <span className={`rank-indicator ${rankDiff > 0 ? 'up' : 'down'}`}>
                            {rankDiff > 0 ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
                            {Math.abs(rankDiff)}
                          </span>
                        )}
                      </div>
                    </td>
                    <td>
                      <div className="student-info">
                        <img src={student.avatar} alt={student.name} />
                        <span>{student.name}</span>
                      </div>
                    </td>
                    <td>
                      <span 
                        className="tier-badge" 
                        style={{ backgroundColor: `${getTierColor(student.tier)}20`, color: getTierColor(student.tier), border: `1px solid ${getTierColor(student.tier)}40` }}
                      >
                        {student.tier}
                      </span>
                    </td>
                    <td>
                      <span className="total-score">{Math.round(student.total)}</span>
                    </td>
                    <td>
                      <div className="score-mini-grid">
                        <div title="Problem Solving"><Brain size={14} /> {student.scores.problem_solving}</div>
                        <div title="Academic"><Award size={14} /> {student.scores.academic}</div>
                        <div title="Streak"><Zap size={14} /> {student.scores.streak}</div>
                      </div>
                    </td>
                    <td>
                      <button className="view-details">
                        <ChevronRight size={18} />
                      </button>
                    </td>
                  </motion.tr>
                );
              })}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      {/* Student Profile Modal */}
      <AnimatePresence>
        {selectedStudent && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedStudent(null)}
          >
            <motion.div 
              className="student-modal"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="modal-header">
                <img src={selectedStudent.avatar} alt="" />
                <div>
                  <h2>{selectedStudent.name}</h2>
                  <p>{selectedStudent.tier} Student</p>
                </div>
                <button className="close-modal" onClick={() => setSelectedStudent(null)}>&times;</button>
              </div>

              <div className="modal-content">
                <div className="chart-container">
                  <h3>Performance Analysis</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={[
                      { subject: 'Badges', A: selectedStudent.scores.badges },
                      { subject: 'GPA', A: selectedStudent.scores.academic },
                      { subject: 'Logic', A: selectedStudent.scores.problem_solving },
                      { subject: 'Hackathon', A: selectedStudent.scores.hackathon },
                      { subject: 'Participation', A: selectedStudent.scores.participation },
                      { subject: 'Teamwork', A: selectedStudent.scores.collaboration },
                    ]}>
                      <PolarGrid stroke="#E2E8F0" />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748B', fontSize: 12 }} />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                      <Radar
                        name={selectedStudent.name}
                        dataKey="A"
                        stroke="#4CAF50"
                        fill="#4CAF50"
                        fillOpacity={0.6}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>

                <div className="stats-grid">
                  <div className="stat-card">
                    <Brain />
                    <div>
                      <span>Logic</span>
                      <strong>{selectedStudent.scores.problem_solving}/100</strong>
                    </div>
                  </div>
                  <div className="stat-card">
                    <Award />
                    <div>
                      <span>GPA</span>
                      <strong>{selectedStudent.scores.academic}%</strong>
                    </div>
                  </div>
                  <div className="stat-card">
                    <Zap />
                    <div>
                      <span>Streak</span>
                      <strong>{selectedStudent.scores.streak} Days</strong>
                    </div>
                  </div>
                  <div className="stat-card">
                    <Users />
                    <div>
                      <span>Team</span>
                      <strong>{selectedStudent.scores.collaboration}/100</strong>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Leaderboard;
