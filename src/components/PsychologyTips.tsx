import React, { useState } from 'react';
import { ArrowLeft, Brain, Lightbulb, Target, Clock, Zap, BookOpen, TrendingUp } from 'lucide-react';

interface PsychologyTipsProps {
  setCurrentView: (view: string) => void;
}

export function PsychologyTips({ setCurrentView }: PsychologyTipsProps) {
  const [selectedCategory, setSelectedCategory] = useState('urgency');

  const categories = [
    { id: 'urgency', name: 'Building Urgency', icon: Zap },
    { id: 'procrastination', name: 'Beating Procrastination', icon: Target },
    { id: 'time-perception', name: 'Time Perception', icon: Clock },
    { id: 'motivation', name: 'Motivation Science', icon: TrendingUp }
  ];

  const tips = {
    urgency: [
      {
        title: "The Deadline Effect",
        principle: "Parkinson's Law",
        description: "Work expands to fill the time available. Create artificial deadlines to compress work time and increase focus.",
        technique: "Set personal deadlines 20-30% earlier than real ones. Tell others about these deadlines to create social pressure.",
        example: "If a project is due Friday, set your personal deadline for Wednesday and schedule a review meeting.",
        scienceBased: true,
        difficulty: "Easy"
      },
      {
        title: "Consequence Visualization",
        principle: "Loss Aversion",
        description: "People are more motivated by avoiding losses than gaining rewards. Visualize negative outcomes of delays.",
        technique: "Spend 5 minutes vividly imagining the consequences of missing deadlines: stress, disappointment, missed opportunities.",
        example: "Picture your boss's reaction, team disappointment, and career impact of late delivery.",
        scienceBased: true,
        difficulty: "Medium"
      },
      {
        title: "Time Scarcity Mindset",
        principle: "Scarcity Psychology",
        description: "When we perceive time as scarce, we value it more and use it more efficiently.",
        technique: "Calculate the monetary value of your time. Track time waste. Use countdown timers for all tasks.",
        example: "If you earn $50/hour, every 10 minutes of procrastination costs you $8.33.",
        scienceBased: true,
        difficulty: "Medium"
      },
      {
        title: "Public Commitment",
        principle: "Social Accountability",
        description: "Public commitments are harder to break due to social pressure and reputation concerns.",
        technique: "Announce your deadlines and goals to colleagues, friends, or on social media. Create accountability partnerships.",
        example: "Post your weekly goals on LinkedIn or tell your team about your project timeline.",
        scienceBased: true,
        difficulty: "Easy"
      }
    ],
    procrastination: [
      {
        title: "The 2-Minute Rule",
        principle: "Activation Energy",
        description: "Starting is often the hardest part. Reduce the barrier to starting by committing to just 2 minutes.",
        technique: "Promise yourself you'll work on a task for only 2 minutes. Often, you'll continue beyond the 2 minutes.",
        example: "Instead of 'write the report,' commit to 'open the document and write one sentence.'",
        scienceBased: true,
        difficulty: "Easy"
      },
      {
        title: "Implementation Intentions",
        principle: "If-Then Planning",
        description: "Pre-deciding when and where you'll do something increases follow-through by 2-3x.",
        technique: "Create specific if-then plans: 'If it's 9 AM on Monday, then I will work on the proposal in my office.'",
        example: "If I finish my morning coffee, then I will immediately start my most important task.",
        scienceBased: true,
        difficulty: "Easy"
      },
      {
        title: "Temptation Bundling",
        principle: "Behavioral Economics",
        description: "Pair tasks you need to do with activities you want to do to make them more appealing.",
        technique: "Only allow yourself to do something enjoyable while doing the task you're avoiding.",
        example: "Only listen to your favorite podcast while doing administrative work.",
        scienceBased: true,
        difficulty: "Medium"
      },
      {
        title: "Environment Design",
        principle: "Choice Architecture",
        description: "Your environment shapes your behavior. Design it to make good choices easier and bad choices harder.",
        technique: "Remove distractions, prepare your workspace, and make starting as easy as possible.",
        example: "Put your phone in another room, close unnecessary browser tabs, prepare materials the night before.",
        scienceBased: true,
        difficulty: "Medium"
      }
    ],
    'time-perception': [
      {
        title: "Time Affluence Practice",
        principle: "Temporal Psychology",
        description: "Feeling rushed makes time feel scarce. Practices that create 'time affluence' improve performance.",
        technique: "Start each day with 10 minutes of planning. Take short breaks between tasks. Practice mindfulness.",
        example: "Begin with a 5-minute meditation and detailed day planning to feel more in control of time.",
        scienceBased: true,
        difficulty: "Medium"
      },
      {
        title: "Temporal Landmarks",
        principle: "Fresh Start Effect",
        description: "People are more motivated to start new behaviors at temporal landmarks (Monday, new month, birthday).",
        technique: "Use natural time boundaries to reset habits and create urgency around new starts.",
        example: "Start new productivity systems on Mondays, first of the month, or after holidays.",
        scienceBased: true,
        difficulty: "Easy"
      },
      {
        title: "Time Tracking Awareness",
        principle: "Hawthorne Effect",
        description: "Simply measuring time usage makes you more conscious of how you spend it.",
        technique: "Track your time for one week without changing behavior, then analyze patterns.",
        example: "Use a time tracking app to see exactly where your hours go each day.",
        scienceBased: true,
        difficulty: "Easy"
      },
      {
        title: "Pomodoro Psychology",
        principle: "Attention Restoration",
        description: "The brain needs regular breaks to maintain focus. Short bursts with breaks are more effective than long sessions.",
        technique: "Work in 25-minute focused bursts followed by 5-minute breaks. Take longer breaks every 4 cycles.",
        example: "Set a timer for 25 minutes, work with complete focus, then take a 5-minute walk or stretch break.",
        scienceBased: true,
        difficulty: "Easy"
      }
    ],
    motivation: [
      {
        title: "Progress Principle",
        principle: "Intrinsic Motivation",
        description: "Making progress on meaningful work is the strongest daily motivator, even more than recognition or pay.",
        technique: "Track small wins daily. Break large projects into smaller milestones. Celebrate progress.",
        example: "Keep a daily log of what you accomplished, no matter how small. Review weekly progress.",
        scienceBased: true,
        difficulty: "Easy"
      },
      {
        title: "Autonomy Enhancement",
        principle: "Self-Determination Theory",
        description: "People are more motivated when they feel they have choice and control over their work.",
        technique: "Find ways to customize your approach to tasks. Choose when and how to do work when possible.",
        example: "If you must write a report, choose the format, timing, and location that works best for you.",
        scienceBased: true,
        difficulty: "Medium"
      },
      {
        title: "Mastery Mindset",
        principle: "Growth Mindset",
        description: "Focusing on learning and improvement rather than just completion increases motivation and performance.",
        technique: "Ask 'What can I learn from this?' instead of 'How quickly can I finish this?'",
        example: "Approach each task as a skill-building opportunity rather than just something to check off.",
        scienceBased: true,
        difficulty: "Medium"
      },
      {
        title: "Social Connection",
        principle: "Relatedness Need",
        description: "Understanding how your work connects to and helps others increases motivation and urgency.",
        technique: "Identify who benefits from your work. Connect with end users. Share your work's impact.",
        example: "Before starting a task, remind yourself who will benefit and how it contributes to team goals.",
        scienceBased: true,
        difficulty: "Easy"
      }
    ]
  };

  const selectedTips = tips[selectedCategory as keyof typeof tips] || [];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 mb-6">
        <button
          onClick={() => setCurrentView('dashboard')}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Psychology Tips</h1>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6 border border-purple-100">
        <div className="flex items-center space-x-3 mb-3">
          <Brain className="w-6 h-6 text-purple-600" />
          <h2 className="text-lg font-semibold text-purple-900">Science-Based Productivity Psychology</h2>
        </div>
        <p className="text-purple-800">
          Learn evidence-based psychological techniques to build urgency, overcome procrastination, and optimize your relationship with time. 
          These strategies are backed by research in behavioral psychology, neuroscience, and cognitive science.
        </p>
      </div>

      {/* Category Selection */}
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tips List */}
      <div className="space-y-6">
        {selectedTips.map((tip, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{tip.title}</h3>
                  {tip.scienceBased && (
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      Science-Based
                    </span>
                  )}
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    tip.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                    tip.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {tip.difficulty}
                  </span>
                </div>
                <p className="text-sm text-blue-600 font-medium mb-2">Based on: {tip.principle}</p>
              </div>
            </div>

            <p className="text-gray-700 mb-4">{tip.description}</p>

            <div className="bg-blue-50 rounded-lg p-4 mb-4">
              <div className="flex items-center space-x-2 mb-2">
                <Lightbulb className="w-4 h-4 text-blue-600" />
                <h4 className="font-semibold text-blue-900">How to Apply</h4>
              </div>
              <p className="text-blue-800 text-sm">{tip.technique}</p>
            </div>

            <div className="bg-green-50 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Target className="w-4 h-4 text-green-600" />
                <h4 className="font-semibold text-green-900">Example</h4>
              </div>
              <p className="text-green-800 text-sm">{tip.example}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Reference Card */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Quick Reference: Daily Urgency Builders</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">Morning Routine</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Set 3 artificial deadlines for today</li>
              <li>• Visualize consequences of delays</li>
              <li>• Calculate time value of procrastination</li>
              <li>• Share today's commitments publicly</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">During Work</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Use 2-minute rule for starting</li>
              <li>• Work in 25-minute focused bursts</li>
              <li>• Track progress on small wins</li>
              <li>• Remove environmental distractions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Research Sources */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-2 mb-4">
          <BookOpen className="w-5 h-5 text-gray-600" />
          <h3 className="font-semibold text-gray-900">Research Sources</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
          <div>
            <h4 className="font-medium text-gray-900 mb-1">Key Studies</h4>
            <ul className="space-y-1">
              <li>• Gollwitzer & Sheeran (2006) - Implementation Intentions</li>
              <li>• Ariely & Wertenbroch (2002) - Self-Imposed Deadlines</li>
              <li>• Amabile & Kramer (2011) - Progress Principle</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-1">Recommended Reading</h4>
            <ul className="space-y-1">
              <li>• "Atomic Habits" by James Clear</li>
              <li>• "The Power of Moments" by Chip & Dan Heath</li>
              <li>• "Predictably Irrational" by Dan Ariely</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}