import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Linkedin, Send, CheckCircle, 
  Calendar, Clock, DollarSign, MessageSquare 
} from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend service
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ 
        name: '', 
        email: '', 
        company: '', 
        projectType: '', 
        budget: '', 
        timeline: '', 
        message: '' 
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'olufemibalogunpm@gmail.com',
      href: 'mailto:olufemibalogunpm@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '647-287-2795',
      href: 'tel:+16472872795'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Brampton, Ontario, Canada',
      href: null
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/olufemi-balogun-engr',
      href: 'https://linkedin.com/in/olufemi-balogun-engr'
    }
  ];

  const services = [
    'Cloud Migration & Architecture',
    'DevOps Implementation',
    'SaaS Solution Development',
    'Technical Team Leadership',
    'Security & Compliance Audit',
    'Performance Optimization',
    'Technical Due Diligence',
    'Other (Please specify in message)'
  ];

  const budgetRanges = [
    'Under $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+',
    'Not sure yet'
  ];

  const timelines = [
    'ASAP (Rush project)',
    '1-2 months',
    '3-6 months',
    '6-12 months',
    '12+ months',
    'Flexible'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-blue-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Let's Discuss Your <span className="bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">Project</span>
            </h1>
            <p className="text-xl text-secondary-600 mb-8 leading-relaxed">
              Ready to transform your technical operations? I'd love to hear about your challenges 
              and discuss how I can help you achieve your goals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <Calendar className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                <h3 className="font-semibold text-secondary-900 mb-2">Free Consultation</h3>
                <p className="text-secondary-600 text-sm">30-minute discovery call to understand your needs</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <Clock className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-secondary-900 mb-2">Quick Response</h3>
                <p className="text-secondary-600 text-sm">I'll get back to you within 24 hours</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <MessageSquare className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-secondary-900 mb-2">Detailed Proposal</h3>
                <p className="text-secondary-600 text-sm">Custom proposal with timeline and pricing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-secondary-900 mb-6">Get In Touch</h2>
                <p className="text-secondary-700 leading-relaxed mb-8">
                  Whether you're looking for a technical project manager to lead your next cloud migration, 
                  digital transformation initiative, or need expertise in DevOps and infrastructure planning, 
                  I'm here to help drive your projects to success.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <div className="text-sm text-secondary-600 font-medium">{item.label}</div>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-secondary-900 hover:text-primary-600 transition-colors duration-200"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-secondary-900">{item.value}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="font-bold text-primary-900 mb-3">Areas of Expertise</h3>
                <ul className="space-y-2 text-primary-800">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary-600" />
                    <span>Cloud Migration & Infrastructure Planning</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary-600" />
                    <span>DevOps/SRE Implementation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary-600" />
                    <span>Digital Transformation Leadership</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary-600" />
                    <span>Cross-functional Team Management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary-600" />
                    <span>Agile Project Delivery</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary-600" />
                    <span>Risk Management & Compliance</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-bold text-green-900 mb-3">Why Work With Me?</h3>
                <ul className="space-y-2 text-green-800 text-sm">
                  <li>• 8+ years of proven technical project management experience</li>
                  <li>• $5.2M+ in total project value successfully delivered</li>
                  <li>• 95% on-time delivery rate with measurable business results</li>
                  <li>• Certified in PMP, AWS, Azure, and CISM</li>
                  <li>• Experience leading teams of 10+ technical professionals</li>
                  <li>• Expertise in both Agile and traditional project methodologies</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-secondary-50 rounded-xl p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-secondary-900 mb-2">Message Sent!</h3>
                  <p className="text-secondary-600">
                    Thank you for reaching out. I'll get back to you within 24 hours with a detailed response.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-secondary-900 mb-6">Project Inquiry Form</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-secondary-700 mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-secondary-700 mb-2">
                        Service Needed *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-secondary-700 mb-2">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map((range, index) => (
                            <option key={index} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium text-secondary-700 mb-2">
                          Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                        >
                          <option value="">Select timeline</option>
                          {timelines.map((timeline, index) => (
                            <option key={index} value={timeline}>{timeline}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none"
                        placeholder="Please describe your project, current challenges, and what you're hoping to achieve. The more details you provide, the better I can understand your needs and provide a relevant response."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center space-x-2 font-medium"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Project Inquiry</span>
                    </button>

                    <p className="text-xs text-secondary-600 text-center">
                      By submitting this form, you agree to receive communication about your project inquiry. 
                      I respect your privacy and will never share your information.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Common questions about my consulting services and project approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-secondary-900 mb-3">What's included in the free consultation?</h3>
              <p className="text-secondary-700 text-sm">
                A 30-minute discovery call to understand your challenges, discuss potential solutions, 
                and determine if we're a good fit for working together.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-secondary-900 mb-3">How do you handle remote projects?</h3>
              <p className="text-secondary-700 text-sm">
                I'm experienced in managing remote teams and projects. I use modern collaboration tools 
                and establish clear communication protocols to ensure project success.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-secondary-900 mb-3">What's your typical project timeline?</h3>
              <p className="text-secondary-700 text-sm">
                Project timelines vary based on scope and complexity. Cloud migrations typically take 3-6 months, 
                while DevOps implementations range from 2-4 months.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-secondary-900 mb-3">Do you work with existing teams?</h3>
              <p className="text-secondary-700 text-sm">
                Absolutely! I specialize in leading and optimizing existing technical teams, including developers, 
                DevOps engineers, and business analysts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}