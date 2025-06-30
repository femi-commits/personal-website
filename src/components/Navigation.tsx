import React from 'react';
import { Home, Clock, Zap, Calendar, TrendingUp, Brain, Timer, User } from 'lucide-react';

interface NavigationProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

export function Navigation({ currentView, setCurrentView }: NavigationProps) {
  const navItems = [
    { id: 'dashboard', name: 'Dashboard', icon: Home },
    { id: 'timebox', name: 'Time Boxing', icon: Clock },
    { id: 'urgency', name: 'Urgency Training', icon: Zap },
    { id: 'schedule', name: 'Schedule', icon: Calendar },
    { id: 'focus', name: 'Focus Timer', icon: Timer },
    { id: 'psychology', name: 'Psychology Tips', icon: Brain },
    { id: 'progress', name: 'Progress', icon: TrendingUp }
  ];

  return (
    <nav className="bg-white border-r border-gray-200 w-64 min-h-screen p-4">
      <div className="flex items-center space-x-3 mb-8 px-2">
        <div className="bg-red-600 rounded-lg p-2">
          <Zap className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-900">UrgencyFlow</h1>
          <p className="text-sm text-gray-600">Time Mastery</p>
        </div>
      </div>

      <div className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200 text-left ${
                currentView === item.id
                  ? 'bg-red-50 text-red-700 border border-red-200'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Icon className={`w-5 h-5 ${currentView === item.id ? 'text-red-600' : 'text-gray-500'}`} />
              <span className="font-medium">{item.name}</span>
            </button>
          );
        })}
      </div>

      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <div className="bg-gray-200 rounded-full p-2">
              <User className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <div className="font-medium text-gray-900">Jordan Smith</div>
              <div className="text-sm text-gray-600">Level 2 • 72% Urgency</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}