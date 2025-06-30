import React, { useState } from 'react';
import { ArrowLeft, Search, Filter, Star, MapPin, Clock, DollarSign, MessageSquare, Eye } from 'lucide-react';

interface MarketplaceProps {
  setCurrentView: (view: string) => void;
  userType: 'customer' | 'printer' | 'metallurgist';
}

export function Marketplace({ setCurrentView, userType }: MarketplaceProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const categories = [
    'All', 'Appliance Parts', 'Automotive', 'Electronics', 'Furniture', 'Tools', 'Toys'
  ];

  const requests = [
    {
      id: 1,
      title: 'Washing Machine Door Handle',
      description: 'Need replacement handle for Samsung washing machine. Original broke at the mounting point.',
      category: 'Appliance Parts',
      budget: '$20-35',
      urgency: 'normal',
      location: 'San Francisco, CA',
      postedBy: 'Sarah M.',
      postedTime: '2 hours ago',
      images: 3,
      bids: 5,
      material: 'ABS Plastic',
      dimensions: '15cm x 8cm x 3cm',
      rating: 4.8
    },
    {
      id: 2,
      title: 'Custom Car Door Handle',
      description: 'Vintage car door handle replica needed. Have original for reference.',
      category: 'Automotive',
      budget: '$80-120',
      urgency: 'low',
      location: 'Austin, TX',
      postedBy: 'Mike R.',
      postedTime: '5 hours ago',
      images: 6,
      bids: 12,
      material: 'Aluminum',
      dimensions: '20cm x 5cm x 4cm',
      rating: 4.9
    },
    {
      id: 3,
      title: 'Drone Propeller Replacement',
      description: 'Need 4 replacement propellers for DJI Mavic. Must be precise balance.',
      category: 'Electronics',
      budget: '$15-25',
      urgency: 'urgent',
      location: 'New York, NY',
      postedBy: 'Alex K.',
      postedTime: '1 day ago',
      images: 2,
      bids: 8,
      material: 'Carbon Fiber',
      dimensions: '8cm diameter',
      rating: 4.7
    }
  ];

  const filteredRequests = requests.filter(request => {
    const matchesSearch = request.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         request.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           request.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'urgent': return 'bg-red-100 text-red-800';
      case 'normal': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (selectedItem) {
    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-4 mb-6">
          <button
            onClick={() => setSelectedItem(null)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">{selectedItem.title}</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Images */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">Images & Documentation</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-square bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Image {i}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">Description</h3>
              <p className="text-gray-700 mb-4">{selectedItem.description}</p>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-900">Material:</span>
                  <span className="text-gray-600 ml-2">{selectedItem.material}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Dimensions:</span>
                  <span className="text-gray-600 ml-2">{selectedItem.dimensions}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Quantity:</span>
                  <span className="text-gray-600 ml-2">1 piece</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Category:</span>
                  <span className="text-gray-600 ml-2">{selectedItem.category}</span>
                </div>
              </div>
            </div>

            {/* Current Bids */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">Current Bids ({selectedItem.bids})</h3>
              <div className="space-y-4">
                {[
                  { name: 'TechPrint3D', rating: 4.9, price: '$28', time: '2 hours', message: 'I can print this in high-quality ABS with reinforced mounting points.' },
                  { name: 'MetalWorks Pro', rating: 4.8, price: '$32', time: '3 days', message: 'Aluminum version available for extra durability.' },
                  { name: 'QuickPrint Solutions', rating: 4.7, price: '$25', time: '1 day', message: 'Fast turnaround, local pickup available.' }
                ].map((bid, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-semibold text-sm">{bid.name[0]}</span>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{bid.name}</div>
                          <div className="flex items-center space-x-1">
                            <Star className="w-3 h-3 text-yellow-500 fill-current" />
                            <span className="text-xs text-gray-600">{bid.rating}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-green-600">{bid.price}</div>
                        <div className="text-xs text-gray-600">{bid.time}</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700">{bid.message}</p>
                    <div className="flex space-x-2 mt-3">
                      <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors duration-200">
                        Accept Bid
                      </button>
                      <button className="border border-gray-300 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-50 transition-colors duration-200">
                        Message
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Request Info */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="flex items-center space-x-2 mb-4">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getUrgencyColor(selectedItem.urgency)}`}>
                  {selectedItem.urgency.toUpperCase()}
                </span>
                <span className="text-sm text-gray-600">{selectedItem.postedTime}</span>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-4 h-4 text-gray-500" />
                  <span className="font-medium">Budget: {selectedItem.budget}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span>{selectedItem.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="w-4 h-4 text-gray-500" />
                  <span>{selectedItem.images} images attached</span>
                </div>
              </div>
            </div>

            {/* Customer Info */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">Customer</h3>
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="font-semibold text-gray-600">{selectedItem.postedBy[0]}</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">{selectedItem.postedBy}</div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="text-sm text-gray-600">{selectedItem.rating}</span>
                  </div>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                <MessageSquare className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </div>

            {/* Place Bid */}
            {userType !== 'customer' && (
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-4">Place Your Bid</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Price</label>
                    <input
                      type="text"
                      placeholder="$25"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Time</label>
                    <select className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>1-2 days</option>
                      <option>3-5 days</option>
                      <option>1 week</option>
                      <option>2+ weeks</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      placeholder="Describe your approach and capabilities..."
                      rows={3}
                      className="w-full border border-gray-300 rounded-lg p-2 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium">
                    Submit Bid
                  </button>
                </div>
              </div>
            )}
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
          {userType === 'customer' ? 'Browse Services' : 'Available Requests'}
        </h1>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for parts or services..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {categories.map(cat => (
              <option key={cat} value={cat.toLowerCase()}>{cat}</option>
            ))}
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="newest">Newest First</option>
            <option value="budget-high">Highest Budget</option>
            <option value="budget-low">Lowest Budget</option>
            <option value="urgent">Most Urgent</option>
          </select>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredRequests.map((request) => (
          <div
            key={request.id}
            className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer"
            onClick={() => setSelectedItem(request)}
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-semibold text-gray-900">{request.title}</h3>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getUrgencyColor(request.urgency)}`}>
                {request.urgency.toUpperCase()}
              </span>
            </div>
            
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{request.description}</p>
            
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center space-x-1">
                <DollarSign className="w-3 h-3" />
                <span>{request.budget}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="w-3 h-3" />
                <span>{request.location}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-3 h-3" />
                <span>{request.postedTime}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageSquare className="w-3 h-3" />
                <span>{request.bids} bids</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-xs font-semibold text-gray-600">{request.postedBy[0]}</span>
                </div>
                <span className="text-sm text-gray-600">{request.postedBy}</span>
                <div className="flex items-center space-x-1">
                  <Star className="w-3 h-3 text-yellow-500 fill-current" />
                  <span className="text-xs text-gray-600">{request.rating}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <span>{request.images} images</span>
                <span>•</span>
                <span>{request.material}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredRequests.length === 0 && (
        <div className="text-center py-12">
          <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
          <p className="text-gray-600">Try adjusting your search terms or filters</p>
        </div>
      )}
    </div>
  );
}