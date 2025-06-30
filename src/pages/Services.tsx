import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cloud, Users, TrendingUp, Shield, Settings, BarChart3, 
  CheckCircle, ArrowRight, Clock, DollarSign, Target 
} from 'lucide-react';

export function Services() {
  const mainServices = [
    {
      icon: Cloud,
      title: 'Cloud Migration & Architecture',
      description: 'Complete cloud transformation services from strategy to implementation',
      price: 'Starting at $15,000',
      duration: '3-6 months',
      features: [
        'Cloud readiness assessment',
        'Migration strategy & roadmap',
        'AWS/Azure architecture design',
        'Zero-downtime migration execution',
        'Cost optimization analysis',
        'Security & compliance setup',
        'Performance monitoring setup',
        'Team training & knowledge transfer'
      ],
      deliverables: [
        'Cloud architecture documentation',
        'Migration execution plan',
        'Cost optimization report',
        'Security compliance audit',
        'Performance monitoring dashboard'
      ]
    },
    {
      icon: Settings,
      title: 'DevOps Implementation',
      description: 'End-to-end DevOps transformation to accelerate your development lifecycle',
      price: 'Starting at $12,000',
      duration: '2-4 months',
      features: [
        'CI/CD pipeline design & setup',
        'Infrastructure as Code (Terraform)',
        'Container orchestration (Kubernetes)',
        'Automated testing integration',
        'Monitoring & alerting systems',
        'Security scanning automation',
        'Deployment automation',
        'Team process optimization'
      ],
      deliverables: [
        'Complete CI/CD pipeline',
        'Infrastructure automation scripts',
        'Monitoring & alerting setup',
        'Security scanning integration',
        'DevOps best practices documentation'
      ]
    },
    {
      icon: TrendingUp,
      title: 'SaaS Solution Development',
      description: 'Build scalable, enterprise-grade SaaS platforms from concept to launch',
      price: 'Starting at $25,000',
      duration: '4-8 months',
      features: [
        'Technical architecture design',
        'Scalable API development',
        'Multi-tenant infrastructure',
        'Security & compliance framework',
        'Performance optimization',
        'Integration capabilities',
        'Monitoring & analytics',
        'Launch & scaling strategy'
      ],
      deliverables: [
        'Complete SaaS platform',
        'API documentation',
        'Security compliance report',
        'Performance benchmarks',
        'Scaling playbook'
      ]
    },
    {
      icon: Users,
      title: 'Technical Team Leadership',
      description: 'Optimize your technical teams and processes for maximum productivity',
      price: 'Starting at $8,000',
      duration: '1-3 months',
      features: [
        'Team assessment & optimization',
        'Agile/Scrum implementation',
        'Process improvement consulting',
        'Developer productivity analysis',
        'Technical debt management',
        'Code quality frameworks',
        'Team communication optimization',
        'Performance metrics setup'
      ],
      deliverables: [
        'Team optimization plan',
        'Process documentation',
        'Productivity metrics dashboard',
        'Code quality standards',
        'Communication frameworks'
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Shield,
      title: 'Security & Compliance Audit',
      description: 'Comprehensive security assessment and compliance implementation',
      features: ['Security vulnerability assessment', 'Compliance gap analysis', 'IAM implementation']
    },
    {
      icon: BarChart3,
      title: 'Performance Optimization',
      description: 'Optimize your systems for maximum performance and cost efficiency',
      features: ['Performance bottleneck analysis', 'Cost optimization strategies', 'Scalability planning']
    },
    {
      icon: Target,
      title: 'Technical Due Diligence',
      description: 'Expert technical assessment for M&A, investments, or strategic decisions',
      features: ['Technical architecture review', 'Risk assessment', 'Scalability evaluation']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'Comprehensive analysis of your current technical landscape, challenges, and goals.'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Develop detailed roadmap with timelines, milestones, and resource requirements.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute the plan with regular check-ins, progress updates, and quality assurance.'
    },
    {
      step: '04',
      title: 'Optimization & Handover',
      description: 'Fine-tune the solution, provide training, and ensure smooth knowledge transfer.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-blue-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Technical Consulting <span className="bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-secondary-600 mb-8 leading-relaxed">
              Comprehensive technical project management and cloud consulting services designed to 
              accelerate your digital transformation and optimize your technical operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#services"
                className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg hover:bg-primary-600 hover:text-white transition-colors duration-200"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Core Consulting Services
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Specialized services designed to transform your technical operations and drive business growth.
            </p>
          </div>

          <div className="space-y-16">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-secondary-900">{service.title}</h3>
                    </div>
                    
                    <p className="text-lg text-secondary-600 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="flex items-center space-x-6 text-sm">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4 text-green-600" />
                        <span className="text-secondary-700">{service.price}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-blue-600" />
                        <span className="text-secondary-700">{service.duration}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-secondary-900 mb-3">What's Included:</h4>
                        <ul className="space-y-2">
                          {service.features.slice(0, 4).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-secondary-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary-900 mb-3">Deliverables:</h4>
                        <ul className="space-y-2">
                          {service.deliverables.map((deliverable, deliverableIndex) => (
                            <li key={deliverableIndex} className="flex items-start space-x-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                              <span className="text-secondary-700">{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="bg-secondary-50 rounded-xl p-8">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-secondary-900">Complete Feature Set:</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm text-secondary-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Specialized consulting services to address specific technical challenges and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-secondary-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span className="text-secondary-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              My Consulting Process
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-secondary-600 text-sm leading-relaxed">
                  {step.description}
                </p>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Let's discuss your technical challenges and how I can help you achieve your goals.
            </p>
            <Link
              to="/contact"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg hover:bg-primary-50 transition-colors duration-200 font-semibold inline-flex items-center space-x-2"
            >
              <span>Schedule Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}