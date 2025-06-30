import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Dashboard } from './components/Dashboard';
import { PartRequest } from './components/PartRequest';
import { DrawingTool } from './components/DrawingTool';
import { Marketplace } from './components/Marketplace';
import { Messages } from './components/Messages';
import { Profile } from './components/Profile';
import { Orders } from './components/Orders';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [userType, setUserType] = useState<'customer' | 'printer' | 'metallurgist'>('customer');

  // Mock user data
  const userData = {
    name: 'Alex Johnson',
    type: userType,
    rating: 4.8,
    completedOrders: 23,
    activeOrders: 3,
    earnings: 1250,
    location: 'San Francisco, CA'
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard currentView={currentView} setCurrentView={setCurrentView} userData={userData} />;
      case 'request':
        return <PartRequest setCurrentView={setCurrentView} />;
      case 'drawing':
        return <DrawingTool setCurrentView={setCurrentView} />;
      case 'marketplace':
        return <Marketplace setCurrentView={setCurrentView} userType={userType} />;
      case 'messages':
        return <Messages setCurrentView={setCurrentView} />;
      case 'orders':
        return <Orders setCurrentView={setCurrentView} userType={userType} />;
      case 'profile':
        return <Profile setCurrentView={setCurrentView} userData={userData} userType={userType} setUserType={setUserType} />;
      default:
        return <Dashboard currentView={currentView} setCurrentView={setCurrentView} userData={userData} />;
    }
  };

  return (
    <div className="min-h-screen bg-engineering-charcoal engineering-grid flex">
      <Navigation currentView={currentView} setCurrentView={setCurrentView} userType={userType} />
      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          {renderCurrentView()}
        </div>
      </main>
    </div>
  );
}

export default App;