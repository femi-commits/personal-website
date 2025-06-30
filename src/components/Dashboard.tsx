import React from 'react';
import { Clock, Zap, Target, TrendingUp, Calendar, Timer, Brain, CheckCircle } from 'lucide-react';

interface DashboardProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  userData: {
    urgencyScore: number;
    tasksCompleted: number;
    onTimeRate: number;
    streak: number;
    level: number;
    totalFocusTime: number;
    scheduledTasks: number;
    completedTasks: number;
  };
}

export function Dashboard({ currentView, setCurrentView, userData }: DashboardProps) {
  const { urgencyScore, tasksCompleted, onTimeRate, streak, level, totalFocusTime, scheduledTasks, completedTasks } = userData;

  const urgencyLevel = urgencyScore >= 80 ? 'High' : urgencyScore >= 60 ? 'Moderate' : 'Needs Work';
  const urgencyColor = urgencyScore >= 80 ? 'text-green-600' : urgencyScore >= 60 ? 'text-yellow-600' : 'text-red-600';

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Time to Take Action!</h2>
            <p className="text-red-100 mt-1">Every moment counts - let's make today productive</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">{streak}</div>
            <div className="text-red-200 text-sm">Day Streak</div>
          </div>
        </div>
      </div>

      {/* Urgency Alert */}
      {urgencyScore < 70 && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
          <div className="flex items-center">
            <Zap className="w-5 h-5 text-yellow-600 mr-2" />
            <div>
              <h3 className="text-yellow-800 font-semibold">Urgency Training Recommended</h3>
              <p className="text-yellow-700 text-sm">Your urgency score is below optimal. Complete today's training to improve your sense of urgency.</p>
            </div>
          </div>
        </div>
      )}

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="bg-red-100 p-2 rounded-lg">
              <Zap className="w-5 h-5 text-red-600" />
            </div>
            <div className="ml-3">
              <div className={`text-lg font-semibold ${urgencyColor}`}>{urgencyScore}%</div>
              <div className="text-sm text-gray-500">Urgency Score ({urgencyLevel})</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="bg-green-100 p-2 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div className="ml-3">
              <div className="text-lg font-semibold text-gray-900">{completedTasks}/{scheduledTasks}</div>
              <div className="text-sm text-gray-500">Tasks Today</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Target className="w-5 h-5 text-blue-600" />
            </div>
            <div className="ml-3">
              <div className="text-lg font-semibold text-gray-900">{onTimeRate}%</div>
              <div className="text-sm text-gray-500">On-Time Rate</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="bg-purple-100 p-2 rounded-lg">
              <Timer className="w-5 h-5 text-purple-600" />
            </div>
            <div className="ml-3">
              <div className="text-lg font-semibold text-gray-900">{Math.floor(totalFocusTime / 60)}h {totalFocusTime % 60}m</div>
              <div className="text-sm text-gray-500">Focus Time Today</div>
            </div>
          </div>
        </div>
      </div>

      {/* Today's Priority */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Today's Urgency Challenge</h3>
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
              High Priority
            </span>
          </div>
          <p className="text-gray-600 mb-4">
            Complete 3 time-boxed tasks within their allocated time limits. This builds your internal pressure system and improves deadline adherence.
          </p>
          <div className="bg-red-50 rounded-lg p-4 mb-4">
            <div className="flex items-center space-x-2 mb-2">
              <Clock className="w-4 h-4 text-red-600" />
              <span className="text-sm font-medium text-red-900">Time Pressure Active</span>
            </div>
            <p className="text-red-800 text-sm">You have 6 hours remaining to complete today's scheduled tasks. The clock is ticking!</p>
          </div>
          <button
            onClick={() => setCurrentView('urgency')}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium"
          >
            Start Urgency Training
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer">
          <div 
            className="flex items-center space-x-3"
            onClick={() => setCurrentView('timebox')}
          >
            <div className="bg-orange-100 p-2 rounded-lg">
              <Clock className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Time Boxing</h4>
              <p className="text-sm text-gray-500">Allocate specific time slots for tasks</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer">
          <div 
            className="flex items-center space-x-3"
            onClick={() => setCurrentView('schedule')}
          >
            <div className="bg-blue-100 p-2 rounded-lg">
              <Calendar className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Schedule Manager</h4>
              <p className="text-sm text-gray-500">Plan and organize your day</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer">
          <div 
            className="flex items-center space-x-3"
            onClick={() => setCurrentView('focus')}
          >
            <div className="bg-green-100 p-2 rounded-lg">
              <Timer className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Focus Timer</h4>
              <p className="text-sm text-gray-500">Pomodoro and deep work sessions</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer">
          <div 
            className="flex items-center space-x-3"
            onClick={() => setCurrentView('psychology')}
          >
            <div className="bg-purple-100 p-2 rounded-lg">
              <Brain className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Psychology Tips</h4>
              <p className="text-sm text-gray-500">Learn urgency-building techniques</p>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Tasks Preview */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Next Up</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
            <div>
              <div className="font-medium text-gray-900">Complete project proposal</div>
              <div className="text-sm text-gray-600">Due in 2 hours • High priority</div>
            </div>
            <div className="text-red-600 font-semibold">URGENT</div>
          </div>
          <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
            <div>
              <div className="font-medium text-gray-900">Team meeting preparation</div>
              <div className="text-sm text-gray-600">Due in 4 hours • Medium priority</div>
            </div>
            <div className="text-yellow-600 font-semibold">SOON</div>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border-l-4 border-gray-300">
            <div>
              <div className="font-medium text-gray-900">Review quarterly reports</div>
              <div className="text-sm text-gray-600">Due tomorrow • Low priority</div>
            </div>
            <div className="text-gray-600">SCHEDULED</div>
          </div>
        </div>
      </div>
    </div>
  );
}