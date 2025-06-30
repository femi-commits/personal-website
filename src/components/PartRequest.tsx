import React, { useState } from 'react';
import { ArrowLeft, Camera, Upload, Mic, Type, Ruler, Package } from 'lucide-react';

interface PartRequestProps {
  setCurrentView: (view: string) => void;
}

export function PartRequest({ setCurrentView }: PartRequestProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [requestData, setRequestData] = useState({
    title: '',
    description: '',
    category: '',
    material: '',
    dimensions: { length: '', width: '', height: '' },
    quantity: 1,
    urgency: 'normal',
    budget: '',
    images: [] as string[],
    audioDescription: null as string | null
  });

  const categories = [
    'Appliance Parts', 'Automotive', 'Electronics', 'Furniture', 'Tools', 'Toys', 'Other'
  ];

  const materials = [
    'PLA Plastic', 'ABS Plastic', 'PETG Plastic', 'Aluminum', 'Steel', 'Brass', 'Not Sure'
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      // In a real app, you'd upload these to a server
      const newImages = Array.from(files).map(file => URL.createObjectURL(file));
      setRequestData(prev => ({
        ...prev,
        images: [...prev.images, ...newImages]
      }));
    }
  };

  const handleSubmit = () => {
    // In a real app, this would submit to backend
    console.log('Submitting request:', requestData);
    setCurrentView('marketplace');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Basic Information</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What part do you need?
              </label>
              <input
                type="text"
                value={requestData.title}
                onChange={(e) => setRequestData(prev => ({ ...prev, title: e.target.value }))}
                placeholder="e.g., Washing machine door handle"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={requestData.category}
                onChange={(e) => setRequestData(prev => ({ ...prev, category: e.target.value }))}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a category</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Detailed Description
              </label>
              <textarea
                value={requestData.description}
                onChange={(e) => setRequestData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Describe the part, what it's used for, how it broke, etc."
                rows={4}
                className="w-full border border-gray-300 rounded-lg p-3 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Visual Documentation</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors duration-200">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="cursor-pointer">
                  <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Upload Photos</h4>
                  <p className="text-sm text-gray-600">
                    Take photos of the broken part, the space it occupied, or similar parts
                  </p>
                </label>
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors duration-200">
                <button
                  onClick={() => setCurrentView('drawing')}
                  className="w-full h-full flex flex-col items-center justify-center"
                >
                  <Type className="w-12 h-12 text-gray-400 mb-4" />
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Create Drawing</h4>
                  <p className="text-sm text-gray-600">
                    Use our drawing tool to sketch the part with dimensions
                  </p>
                </button>
              </div>
            </div>

            {requestData.images.length > 0 && (
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Uploaded Images</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {requestData.images.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={image}
                        alt={`Part ${index + 1}`}
                        className="w-full h-24 object-cover rounded-lg border border-gray-200"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Mic className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-medium text-blue-900 mb-1">Audio Description</h4>
                  <p className="text-sm text-blue-800 mb-3">
                    Record yourself describing the part for better understanding
                  </p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm">
                    Start Recording
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Specifications</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Material
              </label>
              <select
                value={requestData.material}
                onChange={(e) => setRequestData(prev => ({ ...prev, material: e.target.value }))}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select material</option>
                {materials.map(material => (
                  <option key={material} value={material}>{material}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Approximate Dimensions (if known)
              </label>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Length</label>
                  <input
                    type="text"
                    value={requestData.dimensions.length}
                    onChange={(e) => setRequestData(prev => ({
                      ...prev,
                      dimensions: { ...prev.dimensions, length: e.target.value }
                    }))}
                    placeholder="cm"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Width</label>
                  <input
                    type="text"
                    value={requestData.dimensions.width}
                    onChange={(e) => setRequestData(prev => ({
                      ...prev,
                      dimensions: { ...prev.dimensions, width: e.target.value }
                    }))}
                    placeholder="cm"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Height</label>
                  <input
                    type="text"
                    value={requestData.dimensions.height}
                    onChange={(e) => setRequestData(prev => ({
                      ...prev,
                      dimensions: { ...prev.dimensions, height: e.target.value }
                    }))}
                    placeholder="cm"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity Needed
                </label>
                <input
                  type="number"
                  value={requestData.quantity}
                  onChange={(e) => setRequestData(prev => ({ ...prev, quantity: parseInt(e.target.value) }))}
                  min="1"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Range
                </label>
                <input
                  type="text"
                  value={requestData.budget}
                  onChange={(e) => setRequestData(prev => ({ ...prev, budget: e.target.value }))}
                  placeholder="e.g., $20-50"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Urgency Level
              </label>
              <div className="grid grid-cols-3 gap-4">
                {['low', 'normal', 'urgent'].map(level => (
                  <label key={level} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="urgency"
                      value={level}
                      checked={requestData.urgency === level}
                      onChange={(e) => setRequestData(prev => ({ ...prev, urgency: e.target.value }))}
                      className="text-blue-600"
                    />
                    <span className="capitalize">{level}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 mb-6">
        <button
          onClick={() => setCurrentView('dashboard')}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Request a Part</h1>
      </div>

      {/* Progress Indicator */}
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">Step {currentStep} of 3</span>
          <span className="text-sm text-gray-600">
            {currentStep === 1 ? 'Basic Info' : currentStep === 2 ? 'Documentation' : 'Specifications'}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / 3) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Form Content */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        {renderStep()}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
            className="px-6 py-2 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            Previous
          </button>
          
          {currentStep === 3 ? (
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Submit Request
            </button>
          ) : (
            <button
              onClick={() => setCurrentStep(Math.min(3, currentStep + 1))}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Next
            </button>
          )}
        </div>
      </div>

      {/* Help Section */}
      <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
        <div className="flex items-start space-x-3">
          <Package className="w-6 h-6 text-blue-600 mt-1" />
          <div>
            <h3 className="font-semibold text-blue-900 mb-2">Tips for Better Results</h3>
            <ul className="text-blue-800 text-sm space-y-1">
              <li>• Include multiple photos from different angles</li>
              <li>• Measure dimensions as accurately as possible</li>
              <li>• Describe the part's function and how it failed</li>
              <li>• Mention any specific requirements (color, strength, etc.)</li>
              <li>• Be realistic about your budget and timeline</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}