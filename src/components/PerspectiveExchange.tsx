import React, { useState } from 'react';
import { ArrowLeft, Users, MessageCircle, Shield, Award, Clock, MapPin, Eye, ThumbsUp, AlertTriangle, BookOpen, Lightbulb, ExternalLink, Star, TrendingUp } from 'lucide-react';

interface PerspectiveExchangeProps {
  setCurrentView: (view: string) => void;
}

export function PerspectiveExchange({ setCurrentView }: PerspectiveExchangeProps) {
  const [selectedView, setSelectedView] = useState('browse');
  const [selectedTopic, setSelectedTopic] = useState<any>(null);
  const [activeDiscussion, setActiveDiscussion] = useState<any>(null);
  const [showWorldviewSuggestions, setShowWorldviewSuggestions] = useState(false);

  const topics = [
    {
      id: 1,
      title: "Remote Work vs Office Culture",
      category: "Workplace",
      participants: 24,
      perspectives: 2,
      description: "Exploring the benefits and challenges of remote work arrangements",
      tags: ["productivity", "work-life balance", "team collaboration"],
      timeRemaining: "2 days",
      myStance: null,
      relatedBooks: [
        { title: "Deep Work", author: "Cal Newport", platform: "Blinkist", readers: 12 },
        { title: "Remote: Office Not Required", author: "Jason Fried", platform: "Blinkist", readers: 8 }
      ],
      matchingCriteria: {
        booksRead: ["Atomic Habits", "The 7 Habits of Highly Effective People"],
        interests: ["productivity", "leadership"],
        demographics: "Urban professionals, 25-40"
      }
    },
    {
      id: 2,
      title: "Social Media's Impact on Youth",
      category: "Technology & Society",
      participants: 18,
      perspectives: 2,
      description: "Discussing how social platforms affect young people's development",
      tags: ["mental health", "digital literacy", "parenting"],
      timeRemaining: "5 days",
      myStance: "concerned",
      relatedBooks: [
        { title: "Digital Minimalism", author: "Cal Newport", platform: "Blinkist", readers: 15 },
        { title: "The Tech-Wise Family", author: "Andy Crouch", platform: "Kindle", readers: 7 }
      ],
      matchingCriteria: {
        booksRead: ["Mindset", "The Coddling of the American Mind"],
        interests: ["psychology", "parenting", "technology"],
        demographics: "Parents and educators"
      }
    },
    {
      id: 3,
      title: "Economic Inequality Solutions",
      category: "Economics & Policy",
      participants: 31,
      perspectives: 3,
      description: "Exploring different approaches to addressing wealth gaps",
      tags: ["economics", "policy", "social justice"],
      timeRemaining: "1 day",
      myStance: null,
      relatedBooks: [
        { title: "Capital in the Twenty-First Century", author: "Thomas Piketty", platform: "Blinkist", readers: 9 },
        { title: "The Righteous Mind", author: "Jonathan Haidt", platform: "Audible", readers: 14 }
      ],
      matchingCriteria: {
        booksRead: ["Thinking, Fast and Slow", "Freakonomics"],
        interests: ["economics", "politics", "philosophy"],
        demographics: "Diverse economic backgrounds"
      }
    }
  ];

  const activeDiscussions = [
    {
      id: 1,
      topic: "Remote Work vs Office Culture",
      partner: {
        id: "user_456",
        location: "Rural Montana, USA",
        background: "Small business owner",
        commonInterests: ["leadership", "team building"],
        sharedBooks: ["Atomic Habits", "Good to Great"],
        readingPlatforms: ["Blinkist", "Audible"]
      },
      messages: [
        {
          id: 1,
          sender: "partner",
          content: "I've run a small manufacturing business for 15 years, and I believe in-person collaboration is irreplaceable. After reading 'Good to Great,' I'm convinced that great companies are built on strong interpersonal relationships that are harder to develop remotely.",
          timestamp: "2 hours ago",
          eqScore: 85,
          civility: "respectful",
          bookReferences: ["Good to Great"]
        },
        {
          id: 2,
          sender: "me",
          content: "I appreciate your perspective from the manufacturing side. As someone in tech, I've found remote work increases my productivity by 40% due to fewer interruptions. 'Deep Work' really opened my eyes to how valuable uninterrupted focus time can be. However, I do miss the spontaneous brainstorming sessions that happen naturally in offices.",
          timestamp: "1 hour ago",
          eqScore: 88,
          civility: "thoughtful",
          bookReferences: ["Deep Work"]
        }
      ],
      status: "active",
      timeLeft: "3 days",
      pointsEarned: 45,
      bookSynergy: 85 // How well matched based on reading history
    }
  ];

  const myStats = {
    totalExchanges: 12,
    averageEQScore: 87,
    pointsEarned: 340,
    civilitRating: 4.8,
    completionRate: 92,
    booksDiscussed: 23,
    platformsConnected: ["Blinkist", "Audible", "Kindle"]
  };

  const worldviewSuggestions = [
    {
      category: "Expand Economic Perspectives",
      reason: "Based on your discussions about workplace culture",
      suggestions: [
        {
          type: "book",
          title: "The Bottom Billion",
          author: "Paul Collier",
          platform: "Blinkist",
          description: "Understand global poverty from an economist's perspective",
          difficulty: "Intermediate",
          timeToRead: "15 min"
        },
        {
          type: "discussion",
          title: "Universal Basic Income Debate",
          participants: "Economists from different schools of thought",
          description: "Join a discussion with Keynesian and Austrian economists"
        }
      ]
    },
    {
      category: "Cultural Understanding",
      reason: "Your discussions show interest in social dynamics",
      suggestions: [
        {
          type: "book",
          title: "The Culture Map",
          author: "Erin Meyer",
          platform: "Blinkist",
          description: "Navigate cultural differences in global communication",
          difficulty: "Beginner",
          timeToRead: "12 min"
        },
        {
          type: "discussion",
          title: "East vs West Parenting Styles",
          participants: "Parents from Asia, Europe, and Americas",
          description: "Explore different approaches to child-rearing across cultures"
        }
      ]
    },
    {
      category: "Challenge Your Assumptions",
      reason: "AI detected potential confirmation bias in recent exchanges",
      suggestions: [
        {
          type: "book",
          title: "The Righteous Mind",
          author: "Jonathan Haidt",
          platform: "Audible",
          description: "Understand the moral foundations that drive political beliefs",
          difficulty: "Advanced",
          timeToRead: "18 min"
        },
        {
          type: "discussion",
          title: "Climate Change Solutions",
          participants: "Environmental scientists and skeptics",
          description: "Engage with people who have different views on environmental policy"
        }
      ]
    }
  ];

  if (showWorldviewSuggestions) {
    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-4 mb-6">
          <button
            onClick={() => setShowWorldviewSuggestions(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Expand Your Worldview</h1>
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-6 border border-orange-100">
          <div className="flex items-center space-x-3 mb-3">
            <Lightbulb className="w-6 h-6 text-orange-600" />
            <h2 className="text-lg font-semibold text-orange-900">Personalized Growth Recommendations</h2>
          </div>
          <p className="text-orange-800">
            Based on your reading history, discussion patterns, and areas where you might benefit from diverse perspectives, 
            here are curated suggestions to broaden your understanding of the world.
          </p>
        </div>

        <div className="space-y-6">
          {worldviewSuggestions.map((category, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{category.category}</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {category.reason}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.suggestions.map((suggestion, suggestionIndex) => (
                  <div key={suggestionIndex} className="border border-gray-200 rounded-lg p-4">
                    {suggestion.type === 'book' ? (
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <BookOpen className="w-4 h-4 text-blue-600" />
                          <span className="font-medium text-gray-900">{suggestion.title}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">by {suggestion.author}</p>
                        <p className="text-sm text-gray-700 mb-3">{suggestion.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 text-xs text-gray-500">
                            <span className="bg-gray-100 px-2 py-1 rounded">{suggestion.platform}</span>
                            <span>{suggestion.timeToRead}</span>
                            <span className={`px-2 py-1 rounded ${
                              suggestion.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                              suggestion.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {suggestion.difficulty}
                            </span>
                          </div>
                          <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors duration-200">
                            Read Now
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Users className="w-4 h-4 text-purple-600" />
                          <span className="font-medium text-gray-900">{suggestion.title}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{suggestion.participants}</p>
                        <p className="text-sm text-gray-700 mb-3">{suggestion.description}</p>
                        <button className="bg-purple-600 text-white px-3 py-1 rounded text-sm hover:bg-purple-700 transition-colors duration-200">
                          Join Discussion
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-3">Reading Platform Integration</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {myStats.platformsConnected.map((platform, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">{platform}</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <p className="text-sm text-gray-600">Syncing reading history for better matches</p>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200 text-sm">
              Connect More Platforms
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (activeDiscussion) {
    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-4 mb-6">
          <button
            onClick={() => setActiveDiscussion(null)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Active Discussion</h1>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 border border-purple-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-purple-900">{activeDiscussion.topic}</h2>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1 text-green-600">
                <Award className="w-4 h-4" />
                <span>{activeDiscussion.pointsEarned} pts</span>
              </div>
              <div className="flex items-center space-x-1 text-orange-600">
                <Clock className="w-4 h-4" />
                <span>{activeDiscussion.timeLeft} left</span>
              </div>
              <div className="flex items-center space-x-1 text-blue-600">
                <BookOpen className="w-4 h-4" />
                <span>{activeDiscussion.bookSynergy}% book match</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-2">
              <MapPin className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-700">
                Discussing with someone from {activeDiscussion.partner.location}
              </span>
            </div>
            <div className="text-sm text-gray-600 mb-2">
              <strong>Background:</strong> {activeDiscussion.partner.background} • 
              <strong> Shared interests:</strong> {activeDiscussion.partner.commonInterests.join(', ')}
            </div>
            <div className="text-sm text-gray-600">
              <strong>Books in common:</strong> {activeDiscussion.partner.sharedBooks.join(', ')} • 
              <strong> Platforms:</strong> {activeDiscussion.partner.readingPlatforms.join(', ')}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100">
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">Conversation</h3>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-600" />
                <span className="text-sm text-green-700">Moderated Discussion</span>
              </div>
            </div>
          </div>
          
          <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
            {activeDiscussion.messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                    message.sender === 'me'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  {message.bookReferences && message.bookReferences.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {message.bookReferences.map((book, index) => (
                        <span
                          key={index}
                          className={`text-xs px-2 py-1 rounded ${
                            message.sender === 'me'
                              ? 'bg-blue-500 text-blue-100'
                              : 'bg-blue-100 text-blue-800'
                          }`}
                        >
                          📚 {book}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex items-center justify-between mt-2 text-xs opacity-75">
                    <span>{message.timestamp}</span>
                    <div className="flex items-center space-x-2">
                      <span>EQ: {message.eqScore}%</span>
                      <div className={`w-2 h-2 rounded-full ${
                        message.civility === 'respectful' ? 'bg-green-400' :
                        message.civility === 'thoughtful' ? 'bg-blue-400' : 'bg-yellow-400'
                      }`}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t border-gray-100">
            <div className="mb-3 bg-blue-50 rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-2">
                <Lightbulb className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-900">AI Suggestion</span>
              </div>
              <p className="text-sm text-blue-800">
                Consider referencing "The Culture of Honor" by Richard Nisbett to explore how regional cultures 
                might influence workplace collaboration preferences.
              </p>
            </div>
            <div className="flex space-x-3">
              <textarea
                placeholder="Share your perspective thoughtfully and respectfully... (Reference books you've read for deeper insights)"
                rows={3}
                className="flex-1 border border-gray-300 rounded-lg p-3 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium self-end">
                Send
              </button>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              Messages are analyzed for emotional intelligence and civility. Book references earn bonus points.
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedTopic) {
    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-4 mb-6">
          <button
            onClick={() => setSelectedTopic(null)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">{selectedTopic.title}</h1>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-gray-700 mb-4">{selectedTopic.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedTopic.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600 mb-1">{selectedTopic.participants} participants</div>
              <div className="text-sm text-orange-600">{selectedTopic.timeRemaining} remaining</div>
            </div>
          </div>

          {/* Related Books Section */}
          <div className="bg-green-50 rounded-lg p-4 mb-6">
            <div className="flex items-center space-x-2 mb-3">
              <BookOpen className="w-4 h-4 text-green-600" />
              <h3 className="font-semibold text-green-900">Related Reading</h3>
            </div>
            <div className="space-y-2">
              {selectedTopic.relatedBooks.map((book, index) => (
                <div key={index} className="flex items-center justify-between bg-white rounded p-3">
                  <div>
                    <div className="font-medium text-gray-900">{book.title}</div>
                    <div className="text-sm text-gray-600">by {book.author} • {book.platform}</div>
                  </div>
                  <div className="text-sm text-gray-500">
                    {book.readers} participants have read this
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Matching Criteria */}
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <div className="flex items-center space-x-2 mb-3">
              <Users className="w-4 h-4 text-blue-600" />
              <h3 className="font-semibold text-blue-900">You'll Be Matched With</h3>
            </div>
            <div className="space-y-2 text-sm text-blue-800">
              <div><strong>Similar books read:</strong> {selectedTopic.matchingCriteria.booksRead.join(', ')}</div>
              <div><strong>Shared interests:</strong> {selectedTopic.matchingCriteria.interests.join(', ')}</div>
              <div><strong>Different backgrounds:</strong> {selectedTopic.matchingCriteria.demographics}</div>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-4 mb-6">
            <div className="flex items-center space-x-2 mb-2">
              <Eye className="w-4 h-4 text-yellow-600" />
              <h3 className="font-semibold text-yellow-900">Before You Join</h3>
            </div>
            <ul className="text-yellow-800 text-sm space-y-1">
              <li>• You'll be paired based on reading history and diverse backgrounds</li>
              <li>• Reference books you've both read for deeper conversations</li>
              <li>• Conversations are anonymous but moderated for civility</li>
              <li>• Focus on sharing experiences rather than changing minds</li>
              <li>• Earn bonus points for thoughtful book references</li>
              <li>• Discussions last 7 days with daily check-ins encouraged</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Choose Your Perspective</h3>
            <div className="space-y-3">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="radio" name="stance" className="text-blue-600" />
                <span className="text-gray-700">I believe remote work is more effective for most roles</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="radio" name="stance" className="text-blue-600" />
                <span className="text-gray-700">I think in-person work builds stronger teams and culture</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="radio" name="stance" className="text-blue-600" />
                <span className="text-gray-700">I see benefits to both approaches depending on context</span>
              </label>
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={() => setActiveDiscussion(activeDiscussions[0])}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200 font-medium"
            >
              Join Discussion
            </button>
            <button
              onClick={() => setSelectedTopic(null)}
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
            >
              Back to Topics
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setCurrentView('dashboard')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Perspective Exchange</h1>
        </div>
        <button
          onClick={() => setShowWorldviewSuggestions(true)}
          className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors duration-200 font-medium flex items-center space-x-2"
        >
          <Lightbulb className="w-4 h-4" />
          <span>Expand Worldview</span>
        </button>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6 border border-purple-100">
        <div className="flex items-center space-x-3 mb-3">
          <Users className="w-6 h-6 text-purple-600" />
          <h2 className="text-lg font-semibold text-purple-900">Bridge Understanding Through Dialogue</h2>
        </div>
        <p className="text-purple-800 mb-4">
          Engage in meaningful conversations with people from different backgrounds and perspectives. 
          Get matched based on your reading history from platforms like Blinkist, Audible, and Kindle.
          Practice empathy, active listening, and respectful discourse while earning points for constructive dialogue.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="bg-white rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-purple-600">{myStats.totalExchanges}</div>
            <div className="text-xs text-gray-600">Exchanges</div>
          </div>
          <div className="bg-white rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-green-600">{myStats.averageEQScore}%</div>
            <div className="text-xs text-gray-600">Avg EQ Score</div>
          </div>
          <div className="bg-white rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-blue-600">{myStats.pointsEarned}</div>
            <div className="text-xs text-gray-600">Points Earned</div>
          </div>
          <div className="bg-white rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-orange-600">{myStats.civilitRating}/5</div>
            <div className="text-xs text-gray-600">Civility Rating</div>
          </div>
          <div className="bg-white rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-teal-600">{myStats.booksDiscussed}</div>
            <div className="text-xs text-gray-600">Books Referenced</div>
          </div>
        </div>
      </div>

      {/* View Toggle */}
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
        <div className="flex space-x-2">
          <button
            onClick={() => setSelectedView('browse')}
            className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
              selectedView === 'browse'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Browse Topics
          </button>
          <button
            onClick={() => setSelectedView('active')}
            className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
              selectedView === 'active'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            My Discussions (1)
          </button>
        </div>
      </div>

      {selectedView === 'browse' ? (
        <div className="space-y-4">
          {topics.map((topic) => (
            <div
              key={topic.id}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer"
              onClick={() => setSelectedTopic(topic)}
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{topic.title}</h3>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                    {topic.category}
                  </span>
                </div>
                <div className="text-right text-sm text-gray-600">
                  <div className="flex items-center space-x-1 mb-1">
                    <Users className="w-4 h-4" />
                    <span>{topic.participants} participants</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{topic.timeRemaining} left</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-3">{topic.description}</p>
              
              {/* Book Integration Preview */}
              <div className="bg-green-50 rounded-lg p-3 mb-3">
                <div className="flex items-center space-x-2 mb-2">
                  <BookOpen className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-900">Related Books</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {topic.relatedBooks.slice(0, 2).map((book, index) => (
                    <span key={index} className="bg-white text-green-800 px-2 py-1 rounded text-xs">
                      {book.title} ({book.readers} readers)
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {topic.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center space-x-2">
                  {topic.myStance && (
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                      Participating
                    </span>
                  )}
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200 text-sm font-medium">
                    Join Discussion
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {activeDiscussions.map((discussion) => (
            <div
              key={discussion.id}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer"
              onClick={() => setActiveDiscussion(discussion)}
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-900">{discussion.topic}</h3>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1 text-green-600">
                    <Award className="w-4 h-4" />
                    <span>{discussion.pointsEarned} pts</span>
                  </div>
                  <div className="flex items-center space-x-1 text-blue-600">
                    <BookOpen className="w-4 h-4" />
                    <span>{discussion.bookSynergy}% match</span>
                  </div>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                    {discussion.status}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>Partner from {discussion.partner.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{discussion.timeLeft} remaining</span>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-3 mb-3">
                <div className="text-sm text-blue-800">
                  <strong>Shared books:</strong> {discussion.partner.sharedBooks.join(', ')}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  {discussion.messages.length} messages exchanged
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium">
                  Continue Discussion
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}