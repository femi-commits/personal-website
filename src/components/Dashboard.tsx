import React from 'react';
import { Package, MessageSquare, DollarSign, Star, TrendingUp, Clock, Users, Wrench, Activity, Zap } from 'lucide-react';

interface DashboardProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  userData: {
    name: string;
    type: 'customer' | 'printer' | 'metallurgist';
    rating: number;
    completedOrders: number;
    activeOrders: number;
    earnings: number;
    location: string;
  };
}

export function Dashboard({ currentView, setCurrentView, userData }: DashboardProps) {
  const { type, rating, completedOrders, activeOrders, earnings } = userData;

  const recentActivity = [
    {
      id: 1,
      type: 'order_completed',
      title: 'Washing machine knob completed',
      time: '14:32:15',
      amount: '$25',
      status: 'success'
    },
    {
      id: 2,
      type: 'message',
      title: 'New message from John D.',
      time: '12:45:33',
      amount: null,
      status: 'info'
    },
    {
      id: 3,
      type: 'order_new',
      title: 'New order: Car door handle',
      time: '09:15:42',
      amount: '$45',
      status: 'warning'
    }
  ];

  const quickStats = type === 'customer' 
    ? [
        { label: 'Parts Ordered', value: completedOrders, icon: Package, color: 'blue', unit: '' },
        { label: 'Active Requests', value: activeOrders, icon: Clock, color: 'orange', unit: '' },
        { label: 'Money Saved', value: earnings, icon: DollarSign, color: 'green', unit: '$' },
        { label: 'Avg Rating Given', value: rating, icon: Star, color: 'yellow', unit: '' }
      ]
    : [
        { label: 'Orders Completed', value: completedOrders, icon: Package, color: 'blue', unit: '' },
        { label: 'Active Orders', value: activeOrders, icon: Clock, color: 'orange', unit: '' },
        { label: 'Total Earnings', value: earnings, icon: DollarSign, color: 'green', unit: '$' },
        { label: 'Rating', value: rating, icon: Star, color: 'yellow', unit: '' }
      ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-engineering-dark via-engineering-steel to-engineering-dark rounded-xl p-8 border-2 border-accent-red shadow-engineering relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 engineering-grid"></div>
        <div className="relative z-10 flex items-center justify-between text-white">
          <div>
            <h2 className="text-3xl font-bold font-tech mb-2">SYSTEM OPERATIONAL</h2>
            <p className="text-tech-300 font-mono text-lg">
              {type === 'customer' ? 'COMPONENT SOURCING INTERFACE' : 
               type === 'printer' ? 'ADDITIVE MANUFACTURING STATION' :
               'METALLURGY FABRICATION UNIT'}
            </p>
            <div className="mt-4 flex items-center space-x-4 text-sm font-mono">
              <div className="flex items-center space-x-2">
                <div className="status-light bg-green-500"></div>
                <span>ONLINE</span>
              </div>
              <div className="flex items-center space-x-2">
                <Activity className="w-4 h-4" />
                <span>PROCESSING: {activeOrders} TASKS</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-5xl font-bold font-mono text-accent-red">{activeOrders}</div>
            <div className="text-tech-300 text-sm font-mono">ACTIVE {type === 'customer' ? 'REQUESTS' : 'ORDERS'}</div>
            <div className="mt-2 px-3 py-1 bg-accent-red rounded-full text-xs font-mono">
              PRIORITY: HIGH
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="engineering-panel rounded-lg p-6 border-2 border-tech-400 hover:border-accent-red transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className={`bg-engineering-steel p-3 rounded-lg border-2 border-tech-500 group-hover:border-accent-red transition-colors duration-300`}>
                  <Icon className={`w-6 h-6 text-accent-red`} />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-engineering-dark font-mono">
                    {stat.unit}{stat.value}
                  </div>
                  <div className="text-xs text-tech-600 font-mono uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </div>
              <div className="dimension-line h-1 bg-gradient-to-r from-transparent via-accent-red to-transparent"></div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {type === 'customer' ? (
          <>
            <div 
              className="cad-button rounded-lg p-6 text-white hover:text-accent-red transition-all duration-300 cursor-pointer group border-2 border-tech-600 hover:border-accent-red"
              onClick={() => setCurrentView('request')}
            >
              <div className="flex items-center space-x-4">
                <div className="bg-accent-red p-4 rounded-lg group-hover:bg-white group-hover:text-accent-red transition-all duration-300">
                  <Wrench className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-bold text-lg font-tech">REQUEST COMPONENT</h4>
                  <p className="text-sm text-tech-300 font-mono">INITIATE PART SPECIFICATION</p>
                </div>
              </div>
            </div>
            <div 
              className="cad-button rounded-lg p-6 text-white hover:text-accent-red transition-all duration-300 cursor-pointer group border-2 border-tech-600 hover:border-accent-red"
              onClick={() => setCurrentView('drawing')}
            >
              <div className="flex items-center space-x-4">
                <div className="bg-accent-red p-4 rounded-lg group-hover:bg-white group-hover:text-accent-red transition-all duration-300">
                  <Package className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-bold text-lg font-tech">CAD INTERFACE</h4>
                  <p className="text-sm text-tech-300 font-mono">TECHNICAL DRAWING TOOL</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div 
            className="cad-button rounded-lg p-6 text-white hover:text-accent-red transition-all duration-300 cursor-pointer group border-2 border-tech-600 hover:border-accent-red"
            onClick={() => setCurrentView('marketplace')}
          >
            <div className="flex items-center space-x-4">
              <div className="bg-accent-red p-4 rounded-lg group-hover:bg-white group-hover:text-accent-red transition-all duration-300">
                <Package className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-bold text-lg font-tech">BROWSE REQUESTS</h4>
                <p className="text-sm text-tech-300 font-mono">AVAILABLE PROJECTS</p>
              </div>
            </div>
          </div>
        )}
        
        <div 
          className="cad-button rounded-lg p-6 text-white hover:text-accent-red transition-all duration-300 cursor-pointer group border-2 border-tech-600 hover:border-accent-red"
          onClick={() => setCurrentView('marketplace')}
        >
          <div className="flex items-center space-x-4">
            <div className="bg-accent-red p-4 rounded-lg group-hover:bg-white group-hover:text-accent-red transition-all duration-300">
              <Users className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-bold text-lg font-tech">MARKETPLACE</h4>
              <p className="text-sm text-tech-300 font-mono">GLOBAL NETWORK ACCESS</p>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Monitor */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="engineering-panel rounded-lg p-6 border-2 border-tech-400">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-engineering-dark font-tech">ACTIVITY LOG</h3>
            <div className="flex items-center space-x-2">
              <div className="status-light bg-green-500"></div>
              <span className="text-xs font-mono text-tech-600">REAL-TIME</span>
            </div>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between p-4 bg-engineering-steel rounded-lg border border-tech-500">
                <div className="flex items-center space-x-4">
                  <div className={`w-3 h-3 rounded-full ${
                    activity.status === 'success' ? 'bg-green-500' :
                    activity.status === 'info' ? 'bg-blue-500' : 'bg-yellow-500'
                  }`}></div>
                  <div>
                    <div className="font-medium text-engineering-dark font-tech">{activity.title}</div>
                    <div className="text-sm text-tech-600 font-mono">{activity.time}</div>
                  </div>
                </div>
                {activity.amount && (
                  <div className="font-bold text-accent-red font-mono">{activity.amount}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="engineering-panel rounded-lg p-6 border-2 border-tech-400">
          <div className="flex items-center space-x-3 mb-6">
            <TrendingUp className="w-6 h-6 text-accent-red" />
            <h3 className="text-xl font-bold text-engineering-dark font-tech">PERFORMANCE METRICS</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-engineering-steel rounded-lg border border-tech-500">
              <div className="text-3xl font-bold text-accent-red font-mono">+15%</div>
              <div className="text-sm text-tech-600 font-mono">ORDERS/MONTH</div>
              <div className="mt-2 w-full bg-tech-700 rounded-full h-2">
                <div className="bg-accent-red h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div className="text-center p-4 bg-engineering-steel rounded-lg border border-tech-500">
              <div className="text-3xl font-bold text-green-500 font-mono">98%</div>
              <div className="text-sm text-tech-600 font-mono">SUCCESS RATE</div>
              <div className="mt-2 w-full bg-tech-700 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '98%' }}></div>
              </div>
            </div>
            <div className="text-center p-4 bg-engineering-steel rounded-lg border border-tech-500">
              <div className="text-3xl font-bold text-blue-500 font-mono">4.8</div>
              <div className="text-sm text-tech-600 font-mono">AVG RATING</div>
              <div className="mt-2 w-full bg-tech-700 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '96%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* System Status Footer */}
      <div className="bg-engineering-dark rounded-lg p-4 border-2 border-accent-red">
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center space-x-6 font-mono text-sm">
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-accent-red" />
              <span>POWER: OPTIMAL</span>
            </div>
            <div className="flex items-center space-x-2">
              <Activity className="w-4 h-4 text-green-500" />
              <span>NETWORK: 99.9% UPTIME</span>
            </div>
            <div className="flex items-center space-x-2">
              <Package className="w-4 h-4 text-blue-500" />
              <span>QUEUE: {activeOrders} ACTIVE</span>
            </div>
          </div>
          <div className="text-xs font-mono text-tech-400">
            LAST UPDATE: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
}