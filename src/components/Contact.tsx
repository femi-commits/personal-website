import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  return (
    <section id="contact" className="py-20 bg-secondary-50">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Ready to discuss your next project or explore collaboration opportunities? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">Let's Connect</h3>
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
              <h4 className="font-bold text-primary-900 mb-3">Areas of Expertise</h4>
              <ul className="space-y-2 text-primary-800">
                <li>• Cloud Migration & Infrastructure Planning</li>
                <li>• DevOps/SRE Implementation</li>
                <li>• Digital Transformation Leadership</li>
                <li>• Cross-functional Team Management</li>
                <li>• Agile Project Delivery</li>
                <li>• Risk Management & Compliance</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-secondary-900 mb-2">Message Sent!</h3>
                <p className="text-secondary-600">
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-secondary-900 mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                        Full Name
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
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Project inquiry, collaboration, etc."
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none"
                      placeholder="Tell me about your project or how I can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center space-x-2 font-medium"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}