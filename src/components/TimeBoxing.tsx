import React, { useState } from 'react';
import { ArrowLeft, Clock, Plus, Play, Pause, CheckCircle, AlertTriangle, Timer } from 'lucide-react';

interface TimeBoxingProps {
  setCurrentView: (view: string) => void;
}

export function TimeBoxing({ setCurrentView }: TimeBoxingProps) {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete project proposal",
      timeAllocated: 120, // minutes
      timeSpent: 45,
      status: "in-progress",
      priority: "high",
      deadline: "2 hours",
      isActive: true
    },
    {
      id: 2,
      title: "Team meeting preparation",
      timeAllocated: 60,
      timeSpent: 0,
      status: "pending",
      priority: "medium",
      deadline: "4 hours",
      isActive: false
    },
    {
      id: 3,
      title: "Review quarterly reports",
      timeAllocated: 90,
      timeSpent: 90,
      status: "completed",
      priority: "low",
      deadline: "tomorrow",
      isActive: false
    }
  ]);

  const [newTask, setNewTask] = useState({
    title: '',
    timeAllocated: 60,
    priority: 'medium',
    deadline: ''
  });

  const [showAddTask, setShowAddTask] = useState(false);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'in-progress': return 'bg-blue-500';
      case 'overdue': return 'bg-red-500';
      default: return 'bg-gray-300';
    }
  };

  const addTask = () => {
    if (newTask.title.trim()) {
      const task = {
        id: Date.now(),
        ...newTask,
        timeSpent: 0,
        status: 'pending',
        isActive: false
      };
      setTasks([...tasks, task]);
      setNewTask({ title: '', timeAllocated: 60, priority: 'medium', deadline: '' });
      setShowAddTask(false);
    }
  };

  const toggleTimer = (taskId: number) => {
    setTasks(tasks.map(task => ({
      ...task,
      isActive: task.id === taskId ? !task.isActive : false
    })));
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
          <h1 className="text-2xl font-bold text-gray-900">Time Boxing</h1>
        </div>
        <button
          onClick={() => setShowAddTask(true)}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Task</span>
        </button>
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6 border border-orange-100">
        <div className="flex items-center space-x-3 mb-3">
          <Clock className="w-6 h-6 text-orange-600" />
          <h2 className="text-lg font-semibold text-orange-900">Time Boxing Mastery</h2>
        </div>
        <p className="text-orange-800 mb-4">
          Allocate specific time blocks for each task. This creates artificial deadlines and builds your internal sense of urgency. 
          The key is to stick to your time limits - no exceptions!
        </p>
        <div className="bg-white rounded-lg p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-orange-600">3</div>
              <div className="text-sm text-gray-600">Active Time Boxes</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">85%</div>
              <div className="text-sm text-gray-600">On-Time Completion</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">2.5h</div>
              <div className="text-sm text-gray-600">Total Focus Time</div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Task Modal */}
      {showAddTask && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Time Box</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Task Title</label>
                <input
                  type="text"
                  value={newTask.title}
                  onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="What needs to be done?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Time Allocation (minutes)</label>
                <input
                  type="number"
                  value={newTask.timeAllocated}
                  onChange={(e) => setNewTask({...newTask, timeAllocated: parseInt(e.target.value)})}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  min="15"
                  step="15"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                <select
                  value={newTask.priority}
                  onChange={(e) => setNewTask({...newTask, priority: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Deadline</label>
                <input
                  type="text"
                  value={newTask.deadline}
                  onChange={(e) => setNewTask({...newTask, deadline: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="e.g., 2 hours, tomorrow, end of day"
                />
              </div>
            </div>
            <div className="flex space-x-3 mt-6">
              <button
                onClick={addTask}
                className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium"
              >
                Create Time Box
              </button>
              <button
                onClick={() => setShowAddTask(false)}
                className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tasks List */}
      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{task.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(task.priority)}`}>
                    {task.priority.toUpperCase()}
                  </span>
                  {task.status === 'completed' && (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  )}
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>Allocated: {task.timeAllocated} min</span>
                  <span>Spent: {task.timeSpent} min</span>
                  <span>Due: {task.deadline}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {task.status !== 'completed' && (
                  <button
                    onClick={() => toggleTimer(task.id)}
                    className={`p-2 rounded-lg transition-colors duration-200 ${
                      task.isActive 
                        ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                        : 'bg-green-100 text-green-600 hover:bg-green-200'
                    }`}
                  >
                    {task.isActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                )}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-gray-600">Progress</span>
                <span className="text-sm text-gray-600">
                  {Math.round((task.timeSpent / task.timeAllocated) * 100)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${
                    task.timeSpent > task.timeAllocated 
                      ? 'bg-red-500' 
                      : task.status === 'completed' 
                        ? 'bg-green-500' 
                        : 'bg-blue-500'
                  }`}
                  style={{ width: `${Math.min((task.timeSpent / task.timeAllocated) * 100, 100)}%` }}
                ></div>
              </div>
            </div>

            {/* Time Pressure Indicator */}
            {task.isActive && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <div className="flex items-center space-x-2">
                  <Timer className="w-4 h-4 text-red-600" />
                  <span className="text-sm font-medium text-red-900">Time Box Active</span>
                  <div className="flex-1"></div>
                  <span className="text-sm text-red-700">
                    {task.timeAllocated - task.timeSpent} min remaining
                  </span>
                </div>
              </div>
            )}

            {/* Overtime Warning */}
            {task.timeSpent > task.timeAllocated && task.status !== 'completed' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center space-x-2">
                <AlertTriangle className="w-4 h-4 text-red-600" />
                <span className="text-sm text-red-800">
                  Over time limit by {task.timeSpent - task.timeAllocated} minutes! 
                  Consider breaking this task down or adjusting your time estimates.
                </span>
              </div>
            )}

            {/* Action Buttons */}
            {task.status !== 'completed' && (
              <div className="flex space-x-2 mt-4">
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm font-medium">
                  Mark Complete
                </button>
                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm font-medium">
                  Extend Time
                </button>
                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm font-medium">
                  Reschedule
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Time Boxing Tips */}
      <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
        <h3 className="font-semibold text-blue-900 mb-3">Time Boxing Best Practices</h3>
        <ul className="text-blue-800 text-sm space-y-2">
          <li>• <strong>Be realistic:</strong> Start with slightly longer time estimates and gradually reduce them</li>
          <li>• <strong>No extensions:</strong> When time is up, stop and evaluate what you accomplished</li>
          <li>• <strong>Buffer time:</strong> Add 25% buffer for unexpected interruptions</li>
          <li>• <strong>Single focus:</strong> Work on only one task during its time box</li>
          <li>• <strong>Review and adjust:</strong> Learn from overruns to improve future estimates</li>
        </ul>
      </div>
    </div>
  );
}