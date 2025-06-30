import React, { useState, useEffect } from 'react';
import { ArrowLeft, Play, Pause, RotateCcw, Timer, Coffee, Target, TrendingUp } from 'lucide-react';

interface FocusTimerProps {
  setCurrentView: (view: string) => void;
}

export function FocusTimer({ setCurrentView }: FocusTimerProps) {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState<'work' | 'break' | 'longBreak'>('work');
  const [completedPomodoros, setCompletedPomodoros] = useState(0);
  const [currentTask, setCurrentTask] = useState('');

  const modes = {
    work: { duration: 25 * 60, label: 'Focus Time', color: 'red', icon: Target },
    break: { duration: 5 * 60, label: 'Short Break', color: 'green', icon: Coffee },
    longBreak: { duration: 15 * 60, label: 'Long Break', color: 'blue', icon: Coffee }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      // Timer completed
      setIsRunning(false);
      if (mode === 'work') {
        setCompletedPomodoros(prev => prev + 1);
        // Auto-switch to break
        if ((completedPomodoros + 1) % 4 === 0) {
          setMode('longBreak');
          setTimeLeft(modes.longBreak.duration);
        } else {
          setMode('break');
          setTimeLeft(modes.break.duration);
        }
      } else {
        // Break completed, switch back to work
        setMode('work');
        setTimeLeft(modes.work.duration);
      }
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft, mode, completedPomodoros]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(modes[mode].duration);
  };

  const switchMode = (newMode: 'work' | 'break' | 'longBreak') => {
    setMode(newMode);
    setTimeLeft(modes[newMode].duration);
    setIsRunning(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getProgressPercentage = () => {
    return ((modes[mode].duration - timeLeft) / modes[mode].duration) * 100;
  };

  const currentModeConfig = modes[mode];
  const ModeIcon = currentModeConfig.icon;

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 mb-6">
        <button
          onClick={() => setCurrentView('dashboard')}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Focus Timer</h1>
      </div>

      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6 border border-red-100">
        <div className="flex items-center space-x-3 mb-3">
          <Timer className="w-6 h-6 text-red-600" />
          <h2 className="text-lg font-semibold text-red-900">Pomodoro Technique</h2>
        </div>
        <p className="text-red-800 mb-4">
          Work in focused 25-minute intervals followed by short breaks. This technique builds urgency through time constraints 
          while maintaining sustainable productivity. The ticking clock creates natural pressure to stay focused.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-red-600">{completedPomodoros}</div>
            <div className="text-sm text-gray-600">Completed Today</div>
          </div>
          <div className="bg-white rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-green-600">4.5h</div>
            <div className="text-sm text-gray-600">Total Focus Time</div>
          </div>
          <div className="bg-white rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-blue-600">92%</div>
            <div className="text-sm text-gray-600">Completion Rate</div>
          </div>
        </div>
      </div>

      {/* Mode Selection */}
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
        <div className="flex space-x-2">
          {Object.entries(modes).map(([key, config]) => (
            <button
              key={key}
              onClick={() => switchMode(key as 'work' | 'break' | 'longBreak')}
              className={`flex-1 px-4 py-2 rounded-lg transition-colors duration-200 ${
                mode === key
                  ? `bg-${config.color}-600 text-white`
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {config.label}
            </button>
          ))}
        </div>
      </div>

      {/* Current Task Input */}
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          What are you working on?
        </label>
        <input
          type="text"
          value={currentTask}
          onChange={(e) => setCurrentTask(e.target.value)}
          placeholder="Enter your current task..."
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-500 focus:border-transparent"
        />
      </div>

      {/* Timer Display */}
      <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 text-center">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <ModeIcon className={`w-8 h-8 text-${currentModeConfig.color}-600`} />
          <h3 className="text-2xl font-semibold text-gray-900">{currentModeConfig.label}</h3>
        </div>

        {/* Circular Progress */}
        <div className="relative w-64 h-64 mx-auto mb-6">
          <svg className="w-64 h-64 transform -rotate-90" viewBox="0 0 256 256">
            <circle
              cx="128"
              cy="128"
              r="112"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="8"
            />
            <circle
              cx="128"
              cy="128"
              r="112"
              fill="none"
              stroke={mode === 'work' ? '#dc2626' : mode === 'break' ? '#16a34a' : '#2563eb'}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 112}`}
              strokeDashoffset={`${2 * Math.PI * 112 * (1 - getProgressPercentage() / 100)}`}
              className="transition-all duration-1000 ease-linear"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl font-bold text-gray-900 mb-2">
                {formatTime(timeLeft)}
              </div>
              <div className="text-sm text-gray-600">
                {isRunning ? 'Focus Mode Active' : 'Ready to Start'}
              </div>
            </div>
          </div>
        </div>

        {/* Timer Controls */}
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={toggleTimer}
            className={`flex items-center space-x-2 px-8 py-3 rounded-lg font-medium transition-colors duration-200 ${
              isRunning
                ? 'bg-yellow-600 text-white hover:bg-yellow-700'
                : `bg-${currentModeConfig.color}-600 text-white hover:bg-${currentModeConfig.color}-700`
            }`}
          >
            {isRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            <span>{isRunning ? 'Pause' : 'Start'}</span>
          </button>
          <button
            onClick={resetTimer}
            className="flex items-center space-x-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
          >
            <RotateCcw className="w-5 h-5" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Current Task Display */}
      {currentTask && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Target className="w-4 h-4 text-blue-600" />
            <span className="font-medium text-blue-900">Current Focus</span>
          </div>
          <p className="text-blue-800">{currentTask}</p>
        </div>
      )}

      {/* Session Stats */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="w-5 h-5 text-gray-600" />
          <h3 className="font-semibold text-gray-900">Today's Progress</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">{completedPomodoros}</div>
            <div className="text-sm text-gray-600">Pomodoros</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{Math.floor(completedPomodoros * 25 / 60)}h {(completedPomodoros * 25) % 60}m</div>
            <div className="text-sm text-gray-600">Focus Time</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{Math.floor(completedPomodoros / 4)}</div>
            <div className="text-sm text-gray-600">Long Breaks</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">8</div>
            <div className="text-sm text-gray-600">Goal</div>
          </div>
        </div>
      </div>

      {/* Pomodoro Tips */}
      <div className="bg-green-50 rounded-lg p-6 border border-green-100">
        <h3 className="font-semibold text-green-900 mb-3">Pomodoro Best Practices</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-green-800">
          <div>
            <h4 className="font-medium mb-1">During Focus Time</h4>
            <ul className="space-y-1">
              <li>• Turn off all notifications</li>
              <li>• Work on only one task</li>
              <li>• Don't check email or social media</li>
              <li>• If interrupted, reset the timer</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-1">During Breaks</h4>
            <ul className="space-y-1">
              <li>• Step away from your workspace</li>
              <li>• Do light physical activity</li>
              <li>• Avoid screens when possible</li>
              <li>• Hydrate and breathe deeply</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}