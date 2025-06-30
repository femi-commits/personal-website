import React, { useState } from 'react';
import { ArrowLeft, Package, Clock, CheckCircle, XCircle, Eye, MessageSquare, Star } from 'lucide-react';

interface OrdersProps {
  setCurrentView: (view: string) => void;
  userType: 'customer' | 'printer' | 'metallurgist';
}

export function Orders({ setCurrentView, userType }: OrdersProps) {
  const [selectedTab, setSelectedTab] = useState('active');
  const [selectedOrder, setSelectedOrder] = useState<any>(null);

  const orders = {
    active: [
      {
        id: 'ORD-001',
        title: 'Washing Machine Door Handle',
        customer: userType === 'customer' ? 'TechPrint3D' : 'Sarah M.',
        status: 'in_progress',
        price: '$28',
        deadline: '2025-01-10',
        progress: 65,
        lastUpdate: '2 hours ago',
        messages: 5
      },
      {
        id: 'ORD-002',
        title: 'Custom Bracket Set',
        customer: userType === 'customer' ? 'MetalWorks Pro' : 'Mike R.',
        status: 'pending',
        price: '$45',
        deadline: '2025-01-12',
        progress: 0,
        lastUpdate: '1 day ago',
        messages: 2
      }
    ],
    completed: [
      {
        id: 'ORD-003',
        title: 'Drone Propeller Set',
        customer: userType === 'customer' ? 'QuickPrint Solutions' : 'Alex K.',
        status: 'completed',
        price: '$22',
        completedDate: '2025-01-05',
        rating: 5,
        review: 'Perfect quality and fast delivery!'
      }
    ],
    cancelled: [
      {
        id: 'ORD-004',
        title: 'Car Door Handle',
        customer: userType === 'customer' ? 'AutoParts3D' : 'John D.',
        status: 'cancelled',
        price: '$35',
        cancelledDate: '2025-01-03',
        reason: 'Customer found alternative solution'
      }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in_progress': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle;
      case 'in_progress': return Clock;
      case 'pending': return Package;
      case 'cancelled': return XCircle;
      default: return Package;
    }
  };

  if (selectedOrder) {
    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-4 mb-6">
          <button
            onClick={() => setSelectedOrder(null)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Order Details - {selectedOrder.id}</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Info */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{selectedOrder.title}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedOrder.status)}`}>
                  {selectedOrder.status.replace('_', ' ').toUpperCase()}
                </span>
              </div>
              
              {selectedOrder.status === 'in_progress' && (
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Progress</span>
                    <span className="text-sm text-gray-600">{selectedOrder.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${selectedOrder.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-900">Order ID:</span>
                  <span className="text-gray-600 ml-2">{selectedOrder.id}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Price:</span>
                  <span className="text-gray-600 ml-2">{selectedOrder.price}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">
                    {userType === 'customer' ? 'Maker:' : 'Customer:'}
                  </span>
                  <span className="text-gray-600 ml-2">{selectedOrder.customer}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">
                    {selectedOrder.deadline ? 'Deadline:' : 
                     selectedOrder.completedDate ? 'Completed:' : 'Cancelled:'}
                  </span>
                  <span className="text-gray-600 ml-2">
                    {selectedOrder.deadline || selectedOrder.completedDate || selectedOrder.cancelledDate}
                  </span>
                </div>
              </div>
            </div>

            {/* Project Files */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">Project Files</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                      <Package className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Original Photos</div>
                      <div className="text-sm text-gray-600">3 images</div>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    View
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
                      <Package className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Technical Drawing</div>
                      <div className="text-sm text-gray-600">CAD file</div>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Download
                  </button>
                </div>
              </div>
            </div>

            {/* Order Timeline */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">Order Timeline</h3>
              <div className="space-y-4">
                {[
                  { date: '2025-01-08', event: 'Order placed', status: 'completed' },
                  { date: '2025-01-08', event: 'Payment confirmed', status: 'completed' },
                  { date: '2025-01-09', event: 'Production started', status: 'completed' },
                  { date: '2025-01-10', event: 'Quality check', status: 'pending' },
                  { date: '2025-01-10', event: 'Shipping', status: 'pending' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      item.status === 'completed' ? 'bg-green-500' : 'bg-gray-300'
                    }`}></div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{item.event}</div>
                      <div className="text-sm text-gray-600">{item.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Actions */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
                {selectedOrder.status === 'completed' && userType === 'customer' && (
                  <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center space-x-2">
                    <Star className="w-4 h-4" />
                    <span>Leave Review</span>
                  </button>
                )}
                {selectedOrder.status === 'in_progress' && userType !== 'customer' && (
                  <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors duration-200">
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">
                {userType === 'customer' ? 'Maker' : 'Customer'}
              </h3>
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="font-semibold text-gray-600">{selectedOrder.customer[0]}</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">{selectedOrder.customer}</div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="text-sm text-gray-600">4.8</span>
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <div>Response time: ~2 hours</div>
                <div>Completed orders: 23</div>
              </div>
            </div>

            {/* Payment Info */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">Payment</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="text-gray-900">{selectedOrder.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Platform fee:</span>
                  <span className="text-gray-900">$2.80</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping:</span>
                  <span className="text-gray-900">$5.00</span>
                </div>
                <div className="border-t border-gray-200 pt-2 flex justify-between font-semibold">
                  <span>Total:</span>
                  <span>$35.80</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 mb-6">
        <button
          onClick={() => setCurrentView('dashboard')}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">
          {userType === 'customer' ? 'My Orders' : 'My Projects'}
        </h1>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
        <div className="flex space-x-2">
          {[
            { id: 'active', name: 'Active', count: orders.active.length },
            { id: 'completed', name: 'Completed', count: orders.completed.length },
            { id: 'cancelled', name: 'Cancelled', count: orders.cancelled.length }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2 ${
                selectedTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span>{tab.name}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                selectedTab === tab.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {orders[selectedTab as keyof typeof orders].map((order) => {
          const StatusIcon = getStatusIcon(order.status);
          return (
            <div
              key={order.id}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer"
              onClick={() => setSelectedOrder(order)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <StatusIcon className="w-5 h-5 text-gray-500" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{order.title}</h3>
                    <p className="text-sm text-gray-600">Order #{order.id}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-900">{order.price}</div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                    {order.status.replace('_', ' ').toUpperCase()}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div>
                  <span className="font-medium">
                    {userType === 'customer' ? 'Maker:' : 'Customer:'}
                  </span>
                  <span className="ml-2">{order.customer}</span>
                </div>
                <div>
                  <span className="font-medium">
                    {order.deadline ? 'Deadline:' : 
                     order.completedDate ? 'Completed:' : 'Cancelled:'}
                  </span>
                  <span className="ml-2">
                    {order.deadline || order.completedDate || order.cancelledDate}
                  </span>
                </div>
                <div>
                  <span className="font-medium">Last Update:</span>
                  <span className="ml-2">{order.lastUpdate || 'N/A'}</span>
                </div>
              </div>

              {order.progress !== undefined && (
                <div className="mt-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600">Progress</span>
                    <span className="text-sm text-gray-600">{order.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${order.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {order.rating && (
                <div className="mt-4 flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < order.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">"{order.review}"</span>
                </div>
              )}

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-4">
                  {order.messages && (
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <MessageSquare className="w-4 h-4" />
                      <span>{order.messages} messages</span>
                    </div>
                  )}
                </div>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center space-x-1">
                  <Eye className="w-4 h-4" />
                  <span>View Details</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {orders[selectedTab as keyof typeof orders].length === 0 && (
        <div className="text-center py-12">
          <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No {selectedTab} orders
          </h3>
          <p className="text-gray-600">
            {selectedTab === 'active' 
              ? 'Start by browsing the marketplace or creating a request'
              : `You don't have any ${selectedTab} orders yet`
            }
          </p>
        </div>
      )}
    </div>
  );
}