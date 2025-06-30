import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Cloud, Users, TrendingUp, Shield, Star, MapPin, Mail, Phone } from 'lucide-react';

export function Home() {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration & Architecture',
      description: 'Seamlessly migrate your legacy systems to modern cloud infrastructure with zero downtime.',
      features: ['AWS & Azure expertise', 'Cost optimization', 'Security compliance']
    },
    {
      icon: Users,
      title: 'DevOps Implementation',
      description: 'Implement robust CI/CD pipelines and automation to accelerate your development lifecycle.',
      features: ['CI/CD setup', 'Infrastructure as Code', 'Monitoring & alerting']
    },
    {
      icon: TrendingUp,
      title: 'SaaS Solution Development',
      description: 'Build scalable SaaS platforms that handle millions of API calls with enterprise-grade security.',
      features: ['Scalable architecture', 'API development', 'Performance optimization']
    },
    {
      icon: Shield,
      title: 'Technical Team Leadership',
      description: 'Lead and optimize your technical teams including developers, analysts, and DevOps engineers.',
      features: ['Agile methodologies', 'Team optimization', 'Process improvement']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO, FinTech Startup',
      content: 'Olufemi led our cloud migration project flawlessly. We saw 40% cost reduction and zero downtime during the transition.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'VP Engineering, Enterprise Corp',
      content: 'His expertise in managing technical teams and implementing DevOps practices transformed our development process.',
      rating: 5
    },
    {
      name: 'Jennifer Park',
      role: 'Product Director, SaaS Company',
      content: 'The API platform Olufemi architected now handles 2M+ calls daily. Exceptional technical leadership.',
      rating: 5
    }
  ];

  const stats = [
    { number: '8+', label: 'Years Experience' },
    { number: '$2.6M', label: 'Project Value Led' },
    { number: '95%', label: 'On-Time Delivery' },
    { number: '40%', label: 'Avg Cost Reduction' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-blue-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 leading-tight">
                  Transform Your
                  <span className="bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent block">
                    Technical Operations
                  </span>
                </h1>
                <p className="text-xl text-secondary-600 leading-relaxed">
                  Expert technical project management and cloud consulting services. 
                  I help organizations migrate to the cloud, implement DevOps practices, 
                  and build scalable SaaS solutions that drive business growth.
                </p>
              </div>

              <div className="flex items-center space-x-4 text-sm text-secondary-600">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Brampton, Ontario</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>647-287-2795</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-all duration-200 flex items-center justify-center space-x-2 group"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>View Services</span>
                </Link>
              </div>

              <div className="grid grid-cols-4 gap-6 pt-8 border-t border-secondary-200">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary-600">{stat.number}</div>
                    <div className="text-sm text-secondary-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8">
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
                      <span className="text-secondary-600">DevOps Implementation</span>
                      <div className="w-24 h-2 bg-secondary-200 rounded-full">
                        <div className="w-22 h-2 bg-primary-600 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-secondary-600">Team Leadership</span>
                      <div className="w-24 h-2 bg-secondary-200 rounded-full">
                        <div className="w-23 h-2 bg-primary-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary-50 rounded-lg p-4">
                    <h4 className="font-semibold text-primary-900 mb-2">Current Focus</h4>
                    <p className="text-primary-700 text-sm">
                      Leading digital transformation initiatives and cloud-native 
                      solution development for enterprise clients.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary-100 rounded-full opacity-20 -z-10"></div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-blue-100 rounded-full opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Consulting <span className="bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Comprehensive technical project management and cloud consulting services 
              to accelerate your digital transformation journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-secondary-50 rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-secondary-600 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-xs text-secondary-600">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Client <span className="bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">Success Stories</span>
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              See how I've helped organizations transform their technical operations 
              and achieve measurable business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-secondary-700 mb-4 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-secondary-900">{testimonial.name}</div>
                  <div className="text-sm text-secondary-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Technical Operations?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Let's discuss how I can help you migrate to the cloud, implement DevOps practices, 
              and build scalable solutions that drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg hover:bg-primary-50 transition-colors duration-200 font-semibold"
              >
                Schedule Free Consultation
              </Link>
              <Link
                to="/projects"
                className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-200 font-semibold"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}