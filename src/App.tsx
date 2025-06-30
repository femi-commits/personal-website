import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Dashboard } from './components/Dashboard';
import { TimeBoxing } from './components/TimeBoxing';
import { UrgencyTraining } from './components/UrgencyTraining';
import { ScheduleManager } from './components/ScheduleManager';
import { ProgressTracking } from './components/ProgressTracking';
import { PsychologyTips } from './components/PsychologyTips';
import { FocusTimer } from './components/FocusTimer';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');

  // Mock user data - in a real app, this would come from an API/database
  const userData = {
    urgencyScore: 72,
    tasksCompleted: 23,
    onTimeRate: 85,
    streak: 5,
    level: 2,
    totalFocusTime: 180, // minutes today
    scheduledTasks: 8,
    completedTasks: 6
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard currentView={currentView} setCurrentView={setCurrentView} userData={userData} />;
      case 'timebox':
        return <TimeBoxing setCurrentView={setCurrentView} />;
      case 'urgency':
        return <UrgencyTraining setCurrentView={setCurrentView} />;
      case 'schedule':
        return <ScheduleManager setCurrentView={setCurrentView} />;
      case 'progress':
        return <ProgressTracking setCurrentView={setCurrentView} />;
      case 'psychology':
        return <PsychologyTips setCurrentView={setCurrentView} />;
      case 'focus':
        return <FocusTimer setCurrentView={setCurrentView} />;
      default:
        return <Dashboard currentView={currentView} setCurrentView={setCurrentView} userData={userData} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Navigation currentView={currentView} setCurrentView={setCurrentView} />
      <main className="flex-1 p-8">
        {renderCurrentView()}
      </main>
    </div>
  );
}

export default App;