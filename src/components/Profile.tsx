import React, { useState } from 'react';
import { ArrowLeft, Star, MapPin, Calendar, Edit, Camera, Award, TrendingUp } from 'lucide-react';

interface ProfileProps {
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
  userType: 'customer' | 'printer' | 'metallurgist';
  setUserType: (type: 'customer' | 'printer' | 'metallurgist') => void;
}

export function Profile({ setCurrentView, userData, userType, setUserType }: ProfileProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: userData.name,
    bio: 'Experienced 3D printing enthusiast with a passion for helping others solve their part replacement needs.',
    location: userData.location,
    skills: ['3D Printing', 'CAD Design', 'Prototyping'],
    equipment: ['Prusa i3 MK3S+', 'Ultimaker S3', 'Formlabs Form 3'],
    materials: ['PLA', 'ABS', 'PETG', 'Resin']
  });

  const reviews = [
    {
      id: 1,
      reviewer: 'Sarah M.',
      rating: 5,
      comment: 'Excellent work on the washing machine handle. Perfect fit and great communication!',
      date: '2025-01-05',
      project: 'Washing Machine Handle'
    },
    {
      id: 2,
      reviewer: 'Mike R.',
      rating: 5,
      comment: 'Fast turnaround and high quality. Will definitely work with again.',
      date: '2025-01-03',
      project: 'Custom Bracket'
    },
    {
      id: 3,
      reviewer: 'Alex K.',
      rating: 4,
      comment: 'Good quality print, though delivery was slightly delayed.',
      date: '2024-12-28',
      project: 'Drone Parts'
    }
  ];

  const portfolio = [
    {
      id: 1,
      title: 'Appliance Parts Collection',
      description: 'Various replacement parts for home appliances',
      images: 4,
      category: 'Appliance Parts'
    },
    {
      id: 2,
      title: 'Automotive Components',
      description: 'Custom car parts and accessories',
      images: 6,
      category: 'Automotive'
    },
    {
      id: 3,
      title: 'Electronics Enclosures',
      description: 'Protective cases and housings',
      images: 3,
      category: 'Electronics'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 mb-6">
        <button
          onClick={() => setCurrentView('dashboard')}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Profile */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Info */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">{profileData.name[0]}</span>
                  </div>
                  <button className="absolute -bottom-1 -right-1 bg-blue-600 text-white p-1 rounded-full hover:bg-blue-700 transition-colors duration-200">
                    <Camera className="w-3 h-3" />
                  </button>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{profileData.name}</h2>
                  <div className="flex items-center space-x-4 mt-1">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-medium">{userData.rating}</span>
                      <span className="text-gray-600">({reviews.length} reviews)</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{profileData.location}</span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium capitalize">
                      {userType}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 flex items-center space-x-2"
              >
                <Edit className="w-4 h-4" />
                <span>{isEditing ? 'Save' : 'Edit'}</span>
              </button>
            </div>

            {isEditing ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                  <textarea
                    value={profileData.bio}
                    onChange={(e) => setProfileData(prev => ({ ...prev, bio: e.target.value }))}
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg p-3 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <input
                      type="text"
                      value={profileData.location}
                      onChange={(e) => setProfileData(prev => ({ ...prev, location: e.target.value }))}
                      className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Account Type</label>
                    <select
                      value={userType}
                      onChange={(e) => setUserType(e.target.value as any)}
                      className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="customer">Customer</option>
                      <option value="printer">3D Printer</option>
                      <option value="metallurgist">Metallurgist</option>
                    </select>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-gray-700">{profileData.bio}</p>
            )}
          </div>

          {/* Skills & Equipment */}
          {userType !== 'customer' && (
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Skills & Equipment</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills.map((skill, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Equipment</h4>
                  <div className="flex flex-wrap gap-2">
                    {profileData.equipment.map((item, index) => (
                      <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Materials</h4>
                  <div className="flex flex-wrap gap-2">
                    {profileData.materials.map((material, index) => (
                      <span key={index} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                        {material}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Portfolio */}
          {userType !== 'customer' && (
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Portfolio</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {portfolio.map((item) => (
                  <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="aspect-video bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                      <span className="text-gray-500">{item.images} images</span>
                    </div>
                    <h4 className="font-medium text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {item.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Reviews */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Reviews</h3>
            <div className="space-y-4">
              {reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold text-gray-600">{review.reviewer[0]}</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{review.reviewer}</div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${
                                  i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-500">{review.date}</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-blue-600">{review.project}</span>
                  </div>
                  <p className="text-gray-700 text-sm">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Stats */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">Statistics</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Orders Completed</span>
                <span className="font-semibold text-gray-900">{userData.completedOrders}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Active Orders</span>
                <span className="font-semibold text-gray-900">{userData.activeOrders}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">
                  {userType === 'customer' ? 'Money Saved' : 'Total Earnings'}
                </span>
                <span className="font-semibold text-green-600">${userData.earnings}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Success Rate</span>
                <span className="font-semibold text-gray-900">98%</span>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">Achievements</h3>
            <div className="space-y-3">
              {[
                { name: 'First Order', icon: Award, earned: true },
                { name: 'Fast Responder', icon: TrendingUp, earned: true },
                { name: 'Quality Master', icon: Star, earned: false },
                { name: 'Top Rated', icon: Award, earned: false }
              ].map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon className={`w-5 h-5 ${
                      achievement.earned ? 'text-yellow-500' : 'text-gray-300'
                    }`} />
                    <span className={`text-sm ${
                      achievement.earned ? 'text-gray-900' : 'text-gray-500'
                    }`}>
                      {achievement.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Member Since */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-2 mb-2">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600">Member since</span>
            </div>
            <span className="font-semibold text-gray-900">January 2024</span>
          </div>

          {/* Verification */}
          <div className="bg-green-50 rounded-lg p-6 border border-green-100">
            <h3 className="font-semibold text-green-900 mb-2">Verified Account</h3>
            <div className="space-y-2 text-sm text-green-800">
              <div>✓ Email verified</div>
              <div>✓ Phone verified</div>
              <div>✓ Identity verified</div>
              {userType !== 'customer' && <div>✓ Equipment verified</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}