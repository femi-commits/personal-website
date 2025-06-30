import React, { useState } from 'react';
import { ArrowLeft, Search, Send, Paperclip, Phone, Video, MoreVertical } from 'lucide-react';

interface MessagesProps {
  setCurrentView: (view: string) => void;
}

export function Messages({ setCurrentView }: MessagesProps) {
  const [selectedConversation, setSelectedConversation] = useState<any>(null);
  const [newMessage, setNewMessage] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'TechPrint3D',
      lastMessage: 'I can have your washing machine handle ready by tomorrow',
      time: '2m ago',
      unread: 2,
      avatar: 'T',
      online: true,
      project: 'Washing Machine Handle'
    },
    {
      id: 2,
      name: 'Sarah M.',
      lastMessage: 'Thanks for the quick turnaround!',
      time: '1h ago',
      unread: 0,
      avatar: 'S',
      online: false,
      project: 'Car Door Handle'
    },
    {
      id: 3,
      name: 'MetalWorks Pro',
      lastMessage: 'What material would you prefer for the bracket?',
      time: '3h ago',
      unread: 1,
      avatar: 'M',
      online: true,
      project: 'Custom Bracket'
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'other',
      content: 'Hi! I saw your request for the washing machine handle. I can definitely help with this.',
      time: '10:30 AM',
      type: 'text'
    },
    {
      id: 2,
      sender: 'me',
      content: 'Great! What material would you recommend? The original was plastic but broke easily.',
      time: '10:32 AM',
      type: 'text'
    },
    {
      id: 3,
      sender: 'other',
      content: 'I\'d suggest ABS plastic with reinforced mounting points. It\'s much stronger than standard PLA.',
      time: '10:35 AM',
      type: 'text'
    },
    {
      id: 4,
      sender: 'other',
      content: 'Here\'s a sample of my previous work:',
      time: '10:36 AM',
      type: 'image',
      image: 'sample-work.jpg'
    },
    {
      id: 5,
      sender: 'me',
      content: 'That looks perfect! How much would it cost and how long would it take?',
      time: '10:40 AM',
      type: 'text'
    },
    {
      id: 6,
      sender: 'other',
      content: '$28 including shipping, and I can have it ready by tomorrow afternoon.',
      time: '10:42 AM',
      type: 'text'
    }
  ];

  const sendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, this would send the message to the backend
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  if (selectedConversation) {
    return (
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSelectedConversation(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-blue-600">{selectedConversation.avatar}</span>
                  </div>
                  {selectedConversation.online && (
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900">{selectedConversation.name}</h2>
                  <p className="text-sm text-gray-600">{selectedConversation.project}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                <Phone className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                <Video className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.sender === 'me'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-900 border border-gray-200'
                }`}
              >
                {message.type === 'image' ? (
                  <div>
                    <div className="w-48 h-32 bg-gray-200 rounded-lg mb-2 flex items-center justify-center">
                      <span className="text-gray-500">Sample Work Image</span>
                    </div>
                    <p className="text-sm">{message.content}</p>
                  </div>
                ) : (
                  <p>{message.content}</p>
                )}
                <div className={`text-xs mt-1 ${
                  message.sender === 'me' ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  {message.time}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="bg-white border-t border-gray-200 p-4">
          <div className="flex items-center space-x-3">
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              <Paperclip className="w-5 h-5" />
            </button>
            <div className="flex-1 relative">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Type your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={sendMessage}
              disabled={!newMessage.trim()}
              className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              <Send className="w-5 h-5" />
            </button>
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
        <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
      </div>

      {/* Search */}
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Conversations */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="p-4 border-b border-gray-100">
          <h3 className="font-semibold text-gray-900">Recent Conversations</h3>
        </div>
        <div className="divide-y divide-gray-100">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              className="p-4 hover:bg-gray-50 cursor-pointer transition-colors duration-200"
              onClick={() => setSelectedConversation(conversation)}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-blue-600">{conversation.avatar}</span>
                  </div>
                  {conversation.online && (
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-gray-900 truncate">{conversation.name}</h4>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-500">{conversation.time}</span>
                      {conversation.unread > 0 && (
                        <div className="bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                          {conversation.unread}
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                  <p className="text-xs text-blue-600 mt-1">{conversation.project}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {conversations.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No conversations yet</h3>
          <p className="text-gray-600">Start by browsing the marketplace and connecting with makers</p>
        </div>
      )}
    </div>
  );
}