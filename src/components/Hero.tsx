import React from 'react';
import { ArrowRight, MapPin, Mail, Phone, Linkedin } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-blue-50 pt-16">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 leading-tight">
                Technical
                <span className="gradient-text block">Project Manager</span>
              </h1>
              <p className="text-xl text-secondary-600 leading-relaxed">
                8+ years driving cloud infrastructure and digital transformation projects. 
                Expertise in AWS, DevOps, and leading cross-functional teams to deliver 
                scalable solutions.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 text-sm text-secondary-600">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Brampton, Ontario</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>647-287-2795</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>olufemibalogunpm@gmail.com</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-all duration-200 flex items-center justify-center space-x-2 group"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <a
                href="https://linkedin.com/in/olufemi-balogun-engr"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-secondary-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">8+</div>
                <div className="text-sm text-secondary-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">$2.6M</div>
                <div className="text-sm text-secondary-600">Project Value Led</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">95%</div>
                <div className="text-sm text-secondary-600">On-Time Delivery</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-fade-in">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 animate-float">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <span className="text-primary-600 font-bold text-lg">OB</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900">Olufemi Balogun</h3>
                    <p className="text-secondary-600">Technical Project Manager</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-secondary-600">Cloud Migration</span>
                    <div className="w-24 h-2 bg-secondary-200 rounded-full">
                      <div className="w-20 h-2 bg-primary-600 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-secondary-600">Team Leadership</span>
                    <div className="w-24 h-2 bg-secondary-200 rounded-full">
                      <div className="w-22 h-2 bg-primary-600 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-secondary-600">DevOps/SRE</span>
                    <div className="w-24 h-2 bg-secondary-200 rounded-full">
                      <div className="w-20 h-2 bg-primary-600 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-50 rounded-lg p-4">
                  <h4 className="font-semibold text-primary-900 mb-2">Current Focus</h4>
                  <p className="text-primary-700 text-sm">
                    Leading digital transformation initiatives at Wave Financial, 
                    focusing on cloud-native solutions and DevOps automation.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Background decorations */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary-100 rounded-full opacity-20 -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-blue-100 rounded-full opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}