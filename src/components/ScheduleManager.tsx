import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, Plus, AlertTriangle, CheckCircle, Edit } from 'lucide-react';

interface ScheduleManagerProps {
  setCurrentView: (view: string) => void;
}

export function ScheduleManager({ setCurrentView }: ScheduleManagerProps) {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [viewMode, setViewMode] = useState('day'); // day, week, month

  const schedule = {
    '2025-01-08': [
      {
        id: 1,
        title: "Complete project proposal",
        time: "09:00",
        duration: 120,
        priority: "high",
        status: "in-progress",
        urgencyScore: 95,
        bufferTime: 30
      },
      {
        id: 2,
        title: "Team standup meeting",
        time: "11:30",
        duration: 30,
        priority: "medium",
        status: "scheduled",
        urgencyScore: 60,
        bufferTime: 0
      },
      {
        id: 3,
        title: "Review quarterly reports",
        time: "14:00",
        duration: 90,
        priority: "low",
        status: "scheduled",
        urgencyScore: 40,
        bufferTime: 15
      },
      {
        id: 4,
        title: "Client presentation prep",
        time: "16:00",
        duration: 60,
        priority: "high",
        status: "scheduled",
        urgencyScore: 85,
        bufferTime: 20
      }
    ]
  };

  const todaysTasks = schedule[selectedDate] || [];

  const getUrgencyColor = (score: number) => {
    if (score >= 80) return 'bg-red-100 text-red-800 border-red-200';
    if (score >= 60) return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    return 'bg-green-100 text-green-800 border-green-200';
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-red-500';
      case 'medium': return 'border-l-yellow-500';
      case 'low': return 'border-l-green-500';
      default: return 'border-l-gray-300';
    }
  };

  const calculateTimeUntilDeadline = (time: string) => {
    const now = new Date();
    const taskTime = new Date(`${selectedDate}T${time}`);
    const diffMs = taskTime.getTime() - now.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    
    if (diffMs < 0) return 'Overdue';
    if (diffHours < 1) return `${diffMinutes}m`;
    return `${diffHours}h ${diffMinutes}m`;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setCurrentView('dashboard')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Schedule Manager</h1>
        </div>
        <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Add Task</span>
        </button>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100">
        <div className="flex items-center space-x-3 mb-3">
          <Calendar className="w-6 h-6 text-blue-600" />
          <h2 className="text-lg font-semibold text-blue-900">Smart Scheduling with Urgency Awareness</h2>
        </div>
        <p className="text-blue-800 mb-4">
          Your schedule is optimized for urgency and productivity. Tasks are automatically prioritized based on deadlines, 
          importance, and your personal urgency patterns. Buffer times are built in to prevent cascade delays.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-blue-600">8</div>
            <div className="text-xs text-gray-600">Tasks Today</div>
          </div>
          <div className="bg-white rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-red-600">3</div>
            <div className="text-xs text-gray-600">High Priority</div>
          </div>
          <div className="bg-white rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-green-600">85%</div>
            <div className="text-xs text-gray-600">On-Time Rate</div>
          </div>
          <div className="bg-white rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-orange-600">45m</div>
            <div className="text-xs text-gray-600">Buffer Time</div>
          </div>
        </div>
      </div>

      {/* Date Navigation */}
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            <button
              onClick={() => setViewMode('day')}
              className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                viewMode === 'day' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Day
            </button>
            <button
              onClick={() => setViewMode('week')}
              className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                viewMode === 'week' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Week
            </button>
          </div>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Urgency Alert */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <div className="flex items-center space-x-2 mb-2">
          <AlertTriangle className="w-5 h-5 text-red-600" />
          <span className="font-medium text-red-900">High Urgency Alert</span>
        </div>
        <p className="text-red-800 text-sm">
          You have 2 high-priority tasks due within the next 4 hours. Consider rescheduling lower-priority items to focus on urgent work.
        </p>
      </div>

      {/* Schedule Timeline */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="p-4 border-b border-gray-100">
          <h3 className="font-semibold text-gray-900">
            {new Date(selectedDate).toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </h3>
        </div>
        
        <div className="p-4 space-y-3">
          {todaysTasks.map((task) => (
            <div key={task.id} className={`border-l-4 ${getPriorityColor(task.priority)} bg-gray-50 rounded-lg p-4`}>
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-1">
                    <h4 className="font-medium text-gray-900">{task.title}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getUrgencyColor(task.urgencyScore)}`}>
                      {task.urgencyScore}% urgent
                    </span>
                    {task.status === 'completed' && (
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    )}
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{task.time} ({task.duration} min)</span>
                    </div>
                    <span>Due in: {calculateTimeUntilDeadline(task.time)}</span>
                    {task.bufferTime > 0 && (
                      <span className="text-blue-600">+{task.bufferTime}m buffer</span>
                    )}
                  </div>
                </div>
                <button className="p-1 hover:bg-gray-200 rounded transition-colors duration-200">
                  <Edit className="w-4 h-4 text-gray-500" />
                </button>
              </div>

              {/* Time Pressure Indicator */}
              {task.urgencyScore >= 80 && (
                <div className="bg-red-100 border border-red-200 rounded p-2 mt-2">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <span className="text-sm text-red-800">
                      Critical deadline approaching - focus required!
                    </span>
                  </div>
                </div>
              )}

              {/* Progress Bar for In-Progress Tasks */}
              {task.status === 'in-progress' && (
                <div className="mt-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-600">Progress</span>
                    <span className="text-xs text-gray-600">65%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex space-x-2 mt-3">
                {task.status !== 'completed' && (
                  <>
                    <button className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition-colors duration-200">
                      Start
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-50 transition-colors duration-200">
                      Reschedule
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-50 transition-colors duration-200">
                      Delegate
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Schedule Optimization Tips */}
      <div className="bg-purple-50 rounded-lg p-6 border border-purple-100">
        <h3 className="font-semibold text-purple-900 mb-3">Smart Scheduling Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-purple-800">
          <div>
            <h4 className="font-medium mb-1">Time Blocking</h4>
            <p>Group similar tasks together to minimize context switching and maintain focus.</p>
          </div>
          <div>
            <h4 className="font-medium mb-1">Buffer Time</h4>
            <p>Add 25% extra time to estimates to account for interruptions and overruns.</p>
          </div>
          <div>
            <h4 className="font-medium mb-1">Energy Matching</h4>
            <p>Schedule high-priority tasks during your peak energy hours (usually morning).</p>
          </div>
          <div>
            <h4 className="font-medium mb-1">Deadline Laddering</h4>
            <p>Set personal deadlines 1-2 days before real deadlines to create urgency buffer.</p>
          </div>
        </div>
      </div>
    </div>
  );
}