import axios from 'axios';

const ANTHROPIC_API_KEY = 'YOUR_ANTHROPIC_API_KEY'; // Replace with actual key

export const analyzeLeaderboard = async (leaderboardData) => {
  try {
    const response = await axios.post(
      'https://api.anthropic.com/v1/messages',
      {
        model: 'claude-3-sonnet-20240229',
        max_tokens: 1000,
        messages: [
          {
            role: 'user',
            content: `Analyze this student leaderboard data and provide:
            1. Top performer insights.
            2. Who improved the most (compare rank to previous_rank).
            3. Which category needs most improvement across the cohort.
            4. Personalized tips for bottom-ranked students.
            
            Data: ${JSON.stringify(leaderboardData)}`
          }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01'
        }
      }
    );

    return response.data.content[0].text;
  } catch (error) {
    console.error('Error analyzing leaderboard:', error);
    return "AI Analysis is currently unavailable. Please check your API configuration. (Mocked response: Top performer is Priya Sharma with a strong lead in Problem Solving. The cohort shows a need for improvement in Hackathon participation.)";
  }
};
