import React from 'react';
import { Home, Search, MessageSquare, Package, User, Wrench, Printer, Palette, Settings } from 'lucide-react';

interface NavigationProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  userType: 'customer' | 'printer' | 'metallurgist';
}

export function Navigation({ currentView, setCurrentView, userType }: NavigationProps) {
  const navItems = [
    { id: 'dashboard', name: 'Dashboard', icon: Home },
    { id: 'marketplace', name: 'Marketplace', icon: Search },
    ...(userType === 'customer' ? [
      { id: 'request', name: 'Request Part', icon: Wrench },
      { id: 'drawing', name: 'Drawing Tool', icon: Palette }
    ] : []),
    { id: 'orders', name: 'Orders', icon: Package },
    { id: 'messages', name: 'Messages', icon: MessageSquare },
    { id: 'profile', name: 'Profile', icon: User }
  ];

  const getTypeIcon = () => {
    switch (userType) {
      case 'printer': return Printer;
      case 'metallurgist': return Wrench;
      default: return User;
    }
  };

  const TypeIcon = getTypeIcon();

  return (
    <nav className="bg-engineering-dark border-r-2 border-accent-red w-72 min-h-screen p-6 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 lego-dots"></div>
      
      <div className="relative z-10">
        {/* Logo Section */}
        <div className="flex items-center space-x-4 mb-10 p-4 bg-tech-gradient rounded-lg border border-tech-600 shadow-engineering">
          <div className="bg-accent-red rounded-lg p-3 shadow-cad">
            <Printer className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white font-tech">PrintHub</h1>
            <p className="text-tech-400 text-sm font-mono">ENGINEERING PLATFORM</p>
          </div>
        </div>

        {/* Status Indicators */}
        <div className="mb-8 p-4 bg-engineering-steel rounded-lg border border-tech-600">
          <div className="flex items-center justify-between mb-3">
            <span className="text-tech-300 text-sm font-mono">SYSTEM STATUS</span>
            <div className="flex space-x-2">
              <div className="status-light bg-green-500"></div>
              <div className="status-light bg-yellow-500"></div>
              <div className="status-light bg-accent-red"></div>
            </div>
          </div>
          <div className="text-xs text-tech-400 font-mono">
            <div>NETWORK: ONLINE</div>
            <div>PRINTERS: 247 ACTIVE</div>
            <div>QUEUE: 15 PENDING</div>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                className={`w-full flex items-center space-x-4 px-4 py-3 rounded-lg transition-all duration-200 text-left font-tech ${
                  currentView === item.id
                    ? 'bg-accent-red text-white shadow-engineering border border-accent-red-light'
                    : 'text-tech-300 hover:bg-engineering-steel hover:text-white border border-transparent hover:border-tech-600'
                }`}
              >
                <Icon className={`w-5 h-5 ${currentView === item.id ? 'text-white' : 'text-tech-400'}`} />
                <span className="font-medium tracking-wide">{item.name.toUpperCase()}</span>
                {currentView === item.id && (
                  <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* User Profile Section */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="engineering-panel rounded-lg p-4 border-2 border-tech-400">
            <div className="flex items-center space-x-3 mb-3">
              <div className="bg-engineering-steel rounded-full p-3 border-2 border-accent-red">
                <TypeIcon className="w-6 h-6 text-accent-red" />
              </div>
              <div>
                <div className="font-bold text-engineering-dark font-tech">ALEX JOHNSON</div>
                <div className="text-xs text-tech-600 font-mono uppercase tracking-wider">{userType}</div>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-tech-600">ID: USR-2024-001</span>
              <div className="flex items-center space-x-1">
                <div className="status-light bg-green-500"></div>
                <span className="text-green-600">ACTIVE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}