import React, { useState } from 'react';
import { ArrowLeft, Zap, Clock, Target, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

interface UrgencyTrainingProps {
  setCurrentView: (view: string) => void;
}

export function UrgencyTraining({ setCurrentView }: UrgencyTrainingProps) {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [responses, setResponses] = useState<string[]>(['', '', '']);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes

  const exercises = [
    {
      title: "Deadline Pressure Simulation",
      scenario: "You have 5 minutes to complete a critical task that normally takes 10 minutes. Your boss is waiting for the results.",
      prompt: "How do you prioritize and approach this task under extreme time pressure?",
      techniques: ["Pareto Principle (80/20 rule)", "Minimum Viable Product approach", "Eliminate perfectionism"],
      timeLimit: 120 // 2 minutes to respond
    },
    {
      title: "Procrastination Breaking",
      scenario: "You've been putting off an important but boring task for 3 days. It's now urgent and must be done today.",
      prompt: "What specific actions will you take in the next 10 minutes to start this task?",
      techniques: ["2-minute rule", "Pomodoro technique", "Implementation intentions"],
      timeLimit: 90
    },
    {
      title: "Priority Triage",
      scenario: "You have 5 urgent tasks all due today, but you can realistically only complete 3 of them well.",
      prompt: "How do you decide which tasks to prioritize and which to delegate or postpone?",
      techniques: ["Eisenhower Matrix", "Impact vs Effort analysis", "Stakeholder communication"],
      timeLimit: 150
    }
  ];

  const urgencyTechniques = [
    {
      name: "Artificial Deadlines",
      description: "Set deadlines earlier than the real ones to create buffer time and urgency",
      example: "If something is due Friday, set your personal deadline for Wednesday"
    },
    {
      name: "Public Commitment",
      description: "Tell others about your deadlines to create social pressure",
      example: "Announce your goals in team meetings or to accountability partners"
    },
    {
      name: "Consequence Visualization",
      description: "Vividly imagine the negative outcomes of not completing tasks on time",
      example: "Picture the disappointment, stress, and professional impact of missing deadlines"
    },
    {
      name: "Time Scarcity Mindset",
      description: "Treat time as your most valuable and limited resource",
      example: "Calculate the cost of wasted time in terms of opportunities lost"
    },
    {
      name: "Micro-Deadlines",
      description: "Break large tasks into smaller chunks with tight deadlines",
      example: "Instead of 'finish report by Friday', set hourly milestones throughout the week"
    }
  ];

  const handleComplete = () => {
    setShowResults(true);
  };

  if (showResults) {
    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-4 mb-6">
          <button
            onClick={() => setCurrentView('dashboard')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Training Results</h1>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
            <div>
              <h2 className="text-xl font-semibold text-green-900">Urgency Training Completed!</h2>
              <p className="text-green-700">You've improved your urgency response patterns</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 mb-4">
            <h3 className="font-semibold text-gray-900 mb-2">Your Urgency Score</h3>
            <div className="flex items-center space-x-4">
              <div className="text-3xl font-bold text-green-600">78%</div>
              <div className="text-sm text-gray-600">+6% improvement from last session</div>
            </div>
          </div>

          <div className="space-y-4">
            {exercises.map((exercise, index) => (
              <div key={index} className="bg-white rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-900">{exercise.title}</h4>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                    {85 + index * 3}%
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{exercise.scenario}</p>
                <div className="bg-gray-50 rounded p-3 text-sm text-gray-700">
                  <strong>Your response:</strong> {responses[index] || 'No response provided'}
                </div>
                <div className="mt-2 text-sm text-blue-600">
                  <strong>Feedback:</strong> {
                    index === 0 ? "Good prioritization strategy. Consider using the 80/20 rule more explicitly." :
                    index === 1 ? "Excellent action-oriented approach. The 2-minute rule application shows urgency mindset." :
                    "Strong decision-making framework. Your triage approach demonstrates urgency without panic."
                  }
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex space-x-4">
            <button
              onClick={() => setCurrentView('dashboard')}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium"
            >
              Back to Dashboard
            </button>
            <button
              onClick={() => setCurrentView('psychology')}
              className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
            >
              Learn More Techniques
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 mb-6">
        <button
          onClick={() => setCurrentView('dashboard')}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Urgency Training</h1>
      </div>

      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6 border border-red-100">
        <div className="flex items-center space-x-3 mb-3">
          <Zap className="w-6 h-6 text-red-600" />
          <h2 className="text-lg font-semibold text-red-900">Build Your Urgency Muscle</h2>
        </div>
        <p className="text-red-800 mb-4">
          Complete time-pressured scenarios to develop your internal sense of urgency. 
          These exercises simulate real-world pressure to help you perform better under deadlines.
        </p>
        <div className="bg-white rounded-lg p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-red-600">72%</div>
              <div className="text-sm text-gray-600">Current Urgency Score</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">15</div>
              <div className="text-sm text-gray-600">Sessions Completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">+18%</div>
              <div className="text-sm text-gray-600">Improvement This Month</div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">Exercise Progress</span>
          <span className="text-sm text-gray-600">{currentExercise + 1} of {exercises.length}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-red-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentExercise + 1) / exercises.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Time Pressure Indicator */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-red-600" />
            <span className="font-medium text-red-900">Time Pressure Active</span>
          </div>
          <div className="text-red-700 font-semibold">
            {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')} remaining
          </div>
        </div>
        <div className="mt-2 w-full bg-red-200 rounded-full h-1">
          <div 
            className="bg-red-600 h-1 rounded-full transition-all duration-1000"
            style={{ width: `${(timeLeft / 300) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Current Exercise */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-3 mb-4">
          <div className="bg-red-100 p-2 rounded-lg">
            <Target className="w-5 h-5 text-red-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{exercises[currentExercise].title}</h3>
        </div>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
          <div className="flex items-start space-x-2">
            <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-yellow-900 mb-1">High-Pressure Scenario</h4>
              <p className="text-yellow-800 text-sm">{exercises[currentExercise].scenario}</p>
            </div>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4 font-medium">{exercises[currentExercise].prompt}</p>
        
        <textarea
          value={responses[currentExercise]}
          onChange={(e) => {
            const newResponses = [...responses];
            newResponses[currentExercise] = e.target.value;
            setResponses(newResponses);
          }}
          placeholder="Write your response quickly - time is running out!"
          rows={4}
          className="w-full border border-gray-300 rounded-lg p-3 resize-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
        />
        
        {/* Suggested Techniques */}
        <div className="mt-4 bg-blue-50 rounded-lg p-4">
          <h4 className="font-medium text-blue-900 mb-2">Suggested Techniques:</h4>
          <div className="flex flex-wrap gap-2">
            {exercises[currentExercise].techniques.map((technique, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                {technique}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex justify-between mt-6">
          <button
            onClick={() => setCurrentExercise(Math.max(0, currentExercise - 1))}
            disabled={currentExercise === 0}
            className="px-4 py-2 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            Previous
          </button>
          
          {currentExercise === exercises.length - 1 ? (
            <button
              onClick={handleComplete}
              disabled={!responses[currentExercise].trim()}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 font-medium"
            >
              Complete Training
            </button>
          ) : (
            <button
              onClick={() => setCurrentExercise(Math.min(exercises.length - 1, currentExercise + 1))}
              disabled={!responses[currentExercise].trim()}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 font-medium"
            >
              Next Exercise
            </button>
          )}
        </div>
      </div>

      {/* Urgency Techniques Reference */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Reference: Urgency Techniques</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {urgencyTechniques.slice(0, 4).map((technique, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-3">
              <h4 className="font-medium text-gray-900 mb-1">{technique.name}</h4>
              <p className="text-sm text-gray-600 mb-2">{technique.description}</p>
              <p className="text-xs text-blue-600 italic">{technique.example}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}