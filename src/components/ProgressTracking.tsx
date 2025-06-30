import React, { useState } from 'react';
import { ArrowLeft, TrendingUp, Calendar, Award, Target, BarChart3, Clock, Zap } from 'lucide-react';

interface ProgressTrackingProps {
  setCurrentView: (view: string) => void;
}

export function ProgressTracking({ setCurrentView }: ProgressTrackingProps) {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const periods = [
    { id: 'week', name: 'This Week' },
    { id: 'month', name: 'This Month' },
    { id: 'quarter', name: 'This Quarter' }
  ];

  const urgencyMetrics = [
    { name: 'Urgency Score', current: 72, previous: 65, target: 85, trend: '+7' },
    { name: 'On-Time Completion', current: 85, previous: 78, target: 90, trend: '+7%' },
    { name: 'Task Completion Rate', current: 92, previous: 88, target: 95, trend: '+4%' },
    { name: 'Procrastination Index', current: 23, previous: 31, target: 15, trend: '-8' },
    { name: 'Focus Time (hours)', current: 6.2, previous: 5.1, target: 7.0, trend: '+1.1h' }
  ];

  const weeklyData = [
    { day: 'Mon', urgency: 68, tasks: 8, onTime: 75 },
    { day: 'Tue', urgency: 72, tasks: 6, onTime: 83 },
    { day: 'Wed', urgency: 75, tasks: 9, onTime: 89 },
    { day: 'Thu', urgency: 78, tasks: 7, onTime: 86 },
    { day: 'Fri', urgency: 82, tasks: 5, onTime: 100 },
    { day: 'Sat', urgency: 70, tasks: 3, onTime: 67 },
    { day: 'Sun', urgency: 65, tasks: 2, onTime: 50 }
  ];

  const achievements = [
    {
      title: "Urgency Master",
      description: "Maintained 80%+ urgency score for 5 consecutive days",
      earned: true,
      date: "2025-01-06",
      points: 100
    },
    {
      title: "Time Boxing Champion",
      description: "Completed 20 time-boxed tasks within allocated time",
      earned: true,
      date: "2025-01-04",
      points: 75
    },
    {
      title: "Procrastination Buster",
      description: "Reduced procrastination index by 50%",
      earned: false,
      progress: 65,
      target: 100,
      points: 150
    },
    {
      title: "Focus Flow State",
      description: "Completed 50 Pomodoro sessions",
      earned: false,
      progress: 32,
      target: 50,
      points: 125
    }
  ];

  const habits = [
    { name: 'Daily urgency training', streak: 5, target: 7, completed: true },
    { name: 'Time boxing practice', streak: 3, target: 5, completed: false },
    { name: 'Pomodoro sessions', streak: 7, target: 7, completed: true },
    { name: 'Schedule planning', streak: 4, target: 7, completed: false }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 mb-6">
        <button
          onClick={() => setCurrentView('dashboard')}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Progress Tracking</h1>
      </div>

      {/* Period Selection */}
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
        <div className="flex space-x-2">
          {periods.map((period) => (
            <button
              key={period.id}
              onClick={() => setSelectedPeriod(period.id)}
              className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                selectedPeriod === period.id
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {period.name}
            </button>
          ))}
        </div>
      </div>

      {/* Overall Progress */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-green-100">
        <div className="flex items-center space-x-3 mb-4">
          <TrendingUp className="w-6 h-6 text-green-600" />
          <h2 className="text-lg font-semibold text-green-900">Urgency Development Progress</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4">
            <div className="text-2xl font-bold text-green-600">+15%</div>
            <div className="text-sm text-gray-600">Overall Urgency Improvement</div>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="text-2xl font-bold text-blue-600">127</div>
            <div className="text-sm text-gray-600">Tasks Completed This Week</div>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="text-2xl font-bold text-purple-600">5</div>
            <div className="text-sm text-gray-600">Day Streak</div>
          </div>
        </div>
      </div>

      {/* Urgency Metrics */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-3 mb-4">
          <Zap className="w-5 h-5 text-red-600" />
          <h3 className="text-lg font-semibold text-gray-900">Urgency Metrics</h3>
        </div>
        <div className="space-y-4">
          {urgencyMetrics.map((metric, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900">{metric.name}</span>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="text-gray-600">
                    {metric.previous} → <span className="text-green-600 font-semibold">{metric.current}</span>
                  </span>
                  <span className="text-green-600 font-semibold">{metric.trend}</span>
                  <span className="text-gray-500">Target: {metric.target}</span>
                </div>
              </div>
              <div className="relative">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-red-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(metric.current / (metric.target * 1.1)) * 100}%` }}
                  ></div>
                </div>
                <div
                  className="absolute top-0 w-0.5 h-2 bg-green-500"
                  style={{ left: `${(metric.target / (metric.target * 1.1)) * 100}%` }}
                  title={`Target: ${metric.target}`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Chart */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-3 mb-4">
          <BarChart3 className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">Weekly Urgency Trends</h3>
        </div>
        <div className="flex items-end space-x-2 h-40">
          {weeklyData.map((data, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div className="flex flex-col items-center space-y-1 mb-2">
                <div
                  className="bg-red-600 rounded-t w-full transition-all duration-300 hover:bg-red-700"
                  style={{ height: `${(data.urgency / 100) * 120}px` }}
                  title={`Urgency: ${data.urgency}%`}
                ></div>
                <div
                  className="bg-blue-600 rounded-t w-full transition-all duration-300 hover:bg-blue-700"
                  style={{ height: `${(data.onTime / 100) * 80}px` }}
                  title={`On-time: ${data.onTime}%`}
                ></div>
              </div>
              <div className="text-xs text-gray-600">{data.day}</div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center space-x-6 mt-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-600 rounded"></div>
            <span className="text-gray-600">Urgency Score</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-600 rounded"></div>
            <span className="text-gray-600">On-Time Rate</span>
          </div>
        </div>
      </div>

      {/* Habit Tracking */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-3 mb-4">
          <Calendar className="w-5 h-5 text-purple-600" />
          <h3 className="text-lg font-semibold text-gray-900">Habit Streaks</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {habits.map((habit, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-900">{habit.name}</span>
                {habit.completed ? (
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                ) : (
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                )}
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-2xl font-bold text-purple-600">{habit.streak}</span>
                <span className="text-sm text-gray-600">/ {habit.target} days</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-purple-600 h-2 rounded-full"
                  style={{ width: `${(habit.streak / habit.target) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-3 mb-4">
          <Award className="w-5 h-5 text-yellow-600" />
          <h3 className="text-lg font-semibold text-gray-900">Achievements</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`rounded-lg p-4 border-2 ${
                achievement.earned
                  ? 'border-yellow-200 bg-yellow-50'
                  : 'border-gray-200 bg-gray-50'
              }`}
            >
              <div className="flex items-start space-x-3">
                <div
                  className={`p-2 rounded-lg ${
                    achievement.earned
                      ? 'bg-yellow-100'
                      : 'bg-gray-100'
                  }`}
                >
                  <Award
                    className={`w-4 h-4 ${
                      achievement.earned
                        ? 'text-yellow-600'
                        : 'text-gray-400'
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4
                      className={`font-semibold ${
                        achievement.earned
                          ? 'text-yellow-900'
                          : 'text-gray-700'
                      }`}
                    >
                      {achievement.title}
                    </h4>
                    <span className="text-xs text-gray-600">+{achievement.points} pts</span>
                  </div>
                  <p
                    className={`text-sm ${
                      achievement.earned
                        ? 'text-yellow-800'
                        : 'text-gray-600'
                    }`}
                  >
                    {achievement.description}
                  </p>
                  {achievement.earned ? (
                    <div className="text-xs text-yellow-700 mt-1">
                      Earned on {new Date(achievement.date!).toLocaleDateString()}
                    </div>
                  ) : (
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div
                          className="bg-red-600 h-1.5 rounded-full"
                          style={{ width: `${(achievement.progress! / achievement.target!) * 100}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-600 mt-1">
                        {achievement.progress}/{achievement.target} progress
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Goals Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-3 mb-4">
          <Target className="w-5 h-5 text-green-600" />
          <h3 className="text-lg font-semibold text-gray-900">Current Goals</h3>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
            <span className="text-red-900 font-medium">Reach 85% urgency score</span>
            <span className="text-red-700 text-sm">72% current</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
            <span className="text-blue-900 font-medium">Complete 50 time-boxed tasks</span>
            <span className="text-blue-700 text-sm">32/50 completed</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
            <span className="text-green-900 font-medium">Maintain 7-day habit streak</span>
            <span className="text-green-700 text-sm">5/7 days</span>
          </div>
        </div>
      </div>
    </div>
  );
}