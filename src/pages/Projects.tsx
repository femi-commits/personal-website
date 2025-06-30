import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ExternalLink, Calendar, DollarSign, Users, TrendingUp, 
  CheckCircle, ArrowRight, Cloud, Shield, BarChart3, Settings 
} from 'lucide-react';

export function Projects() {
  const featuredProjects = [
    {
      title: 'Enterprise Cloud Migration & Digital Transformation',
      client: 'Financial Services Company',
      industry: 'FinTech',
      value: '$2.6M',
      duration: '18 months',
      teamSize: '15+ members',
      status: 'Completed',
      image: 'cloud-migration',
      description: 'Led comprehensive digital transformation initiative migrating legacy on-premises infrastructure to AWS cloud, implementing modern DevOps practices, and establishing scalable SaaS platform.',
      challenge: 'The client had a complex legacy infrastructure with multiple on-premises systems, manual deployment processes, and growing security concerns. They needed to modernize their technology stack while maintaining 99.9% uptime for critical financial services.',
      solution: 'Designed and executed a phased migration strategy using AWS services including EC2, S3, RDS, and Lambda. Implemented Infrastructure as Code using Terraform, established CI/CD pipelines with Jenkins, and created comprehensive monitoring with CloudWatch.',
      results: [
        '40% increase in operational efficiency',
        '20% reduction in infrastructure costs',
        '99.9% uptime maintained during migration',
        '60% faster deployment cycles',
        'Zero security incidents post-migration'
      ],
      technologies: ['AWS', 'Terraform', 'Jenkins', 'Docker', 'Kubernetes', 'CloudWatch', 'Python'],
      testimonial: {
        quote: "Olufemi's expertise in cloud migration was exceptional. The project was delivered on time, under budget, and exceeded our performance expectations.",
        author: "Sarah Chen, CTO"
      }
    },
    {
      title: 'Enterprise IAM Implementation & Security Enhancement',
      client: 'Technology Corporation',
      industry: 'Enterprise Software',
      value: '$500K',
      duration: '8 months',
      teamSize: '10 members',
      status: 'Completed',
      image: 'iam-security',
      description: 'Implemented comprehensive Identity and Access Management solution using Okta, enhancing security posture for 5,000+ users across multiple applications and systems.',
      challenge: 'The organization struggled with fragmented user access controls, multiple authentication systems, and increasing security threats. They needed a unified IAM solution that could scale with their growth.',
      solution: 'Designed and deployed enterprise-grade IAM architecture using Okta, integrated with existing Active Directory, implemented SAML/OAuth protocols, and established multi-factor authentication across all applications.',
      results: [
        '40% decrease in unauthorized access attempts',
        '25% faster user login experience',
        '90% reduction in password reset tickets',
        '100% compliance with security standards',
        'Seamless integration with 20+ applications'
      ],
      technologies: ['Okta', 'SAML', 'OAuth', 'Active Directory', 'PowerShell', 'Azure AD'],
      testimonial: {
        quote: "The IAM implementation transformed our security posture. Olufemi's team delivered a solution that was both secure and user-friendly.",
        author: "Michael Rodriguez, CISO"
      }
    },
    {
      title: 'High-Performance API Platform Development',
      client: 'Financial Technology Startup',
      industry: 'FinTech',
      value: '$1.2M',
      duration: '12 months',
      teamSize: '20+ members',
      status: 'Completed',
      image: 'api-platform',
      description: 'Architected and managed development of robust API platform enabling third-party integrations, handling 2M+ API calls daily with enterprise-grade security and monitoring.',
      challenge: 'The startup needed to build a scalable API platform from scratch that could handle high-volume transactions, provide real-time data processing, and support rapid partner integrations.',
      solution: 'Designed microservices architecture using containerized applications, implemented API gateway with rate limiting and security controls, established comprehensive monitoring and analytics, and created developer portal for partner onboarding.',
      results: [
        '2M+ API calls handled daily',
        '99.99% API uptime achieved',
        '50+ partner integrations completed',
        '75% reduction in integration time',
        'Real-time transaction processing'
      ],
      technologies: ['Node.js', 'Docker', 'Kubernetes', 'Redis', 'PostgreSQL', 'Nginx', 'Grafana'],
      testimonial: {
        quote: "The API platform Olufemi architected became the foundation of our business growth. It's robust, scalable, and has enabled us to onboard partners rapidly.",
        author: "Jennifer Park, VP of Engineering"
      }
    }
  ];

  const additionalProjects = [
    {
      title: 'DevOps Transformation & CI/CD Implementation',
      client: 'E-commerce Platform',
      duration: '6 months',
      impact: '50% faster deployments',
      technologies: ['Jenkins', 'Docker', 'Kubernetes', 'Terraform']
    },
    {
      title: 'Legacy System Modernization',
      client: 'Healthcare Provider',
      duration: '10 months',
      impact: '30% cost reduction',
      technologies: ['Azure', 'PowerShell', 'SQL Server', 'Power BI']
    },
    {
      title: 'Agile Transformation & Team Optimization',
      client: 'Software Development Company',
      duration: '4 months',
      impact: '25% productivity increase',
      technologies: ['Jira', 'Confluence', 'Scrum', 'Kanban']
    },
    {
      title: 'Disaster Recovery & Business Continuity',
      client: 'Manufacturing Company',
      duration: '5 months',
      impact: 'Zero data loss guarantee',
      technologies: ['AWS', 'Backup Solutions', 'Monitoring', 'Automation']
    }
  ];

  const metrics = [
    { number: '15+', label: 'Projects Completed' },
    { number: '$5.2M+', label: 'Total Project Value' },
    { number: '95%', label: 'On-Time Delivery' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-blue-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Project <span className="bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">Case Studies</span>
            </h1>
            <p className="text-xl text-secondary-600 mb-8 leading-relaxed">
              Explore detailed case studies of successful technical transformations, 
              cloud migrations, and DevOps implementations that delivered measurable business results.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary-600">{metric.number}</div>
                  <div className="text-sm text-secondary-600">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {featuredProjects.map((project, index) => (
              <div key={index} className="bg-secondary-50 rounded-2xl p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Project Overview */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-2">
                          {project.title}
                        </h2>
                        <div className="flex items-center space-x-4 text-sm text-secondary-600">
                          <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded">
                            {project.industry}
                          </span>
                          <span>{project.client}</span>
                        </div>
                      </div>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {project.status}
                      </span>
                    </div>

                    <p className="text-lg text-secondary-700 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Challenge */}
                    <div className="bg-white rounded-lg p-6">
                      <h3 className="font-semibold text-secondary-900 mb-3 flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        Challenge
                      </h3>
                      <p className="text-secondary-700 leading-relaxed">{project.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div className="bg-white rounded-lg p-6">
                      <h3 className="font-semibold text-secondary-900 mb-3 flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        Solution
                      </h3>
                      <p className="text-secondary-700 leading-relaxed">{project.solution}</p>
                    </div>

                    {/* Results */}
                    <div className="bg-white rounded-lg p-6">
                      <h3 className="font-semibold text-secondary-900 mb-4 flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        Results Achieved
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-secondary-700 text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="font-semibold text-secondary-900 mb-3">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-primary-50 rounded-lg p-6">
                      <blockquote className="text-primary-900 italic mb-3">
                        "{project.testimonial.quote}"
                      </blockquote>
                      <cite className="text-primary-700 font-medium">
                        — {project.testimonial.author}
                      </cite>
                    </div>
                  </div>

                  {/* Project Stats */}
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg p-6">
                      <h3 className="font-semibold text-secondary-900 mb-4">Project Details</h3>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <DollarSign className="w-5 h-5 text-green-600" />
                          <div>
                            <div className="text-sm text-secondary-600">Project Value</div>
                            <div className="font-semibold text-secondary-900">{project.value}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Calendar className="w-5 h-5 text-blue-600" />
                          <div>
                            <div className="text-sm text-secondary-600">Duration</div>
                            <div className="font-semibold text-secondary-900">{project.duration}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Users className="w-5 h-5 text-purple-600" />
                          <div>
                            <div className="text-sm text-secondary-600">Team Size</div>
                            <div className="font-semibold text-secondary-900">{project.teamSize}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-primary-600 to-blue-600 rounded-lg p-6 text-white">
                      <h3 className="font-semibold mb-3">Similar Project?</h3>
                      <p className="text-primary-100 text-sm mb-4">
                        Let's discuss how I can help you achieve similar results for your organization.
                      </p>
                      <Link
                        to="/contact"
                        className="bg-white text-primary-600 px-4 py-2 rounded-lg hover:bg-primary-50 transition-colors duration-200 text-sm font-medium inline-flex items-center space-x-2"
                      >
                        <span>Start Discussion</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Projects */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Additional Projects
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              More examples of successful technical transformations and consulting engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  {project.title}
                </h3>
                <div className="flex items-center space-x-4 text-sm text-secondary-600 mb-4">
                  <span>{project.client}</span>
                  <span>•</span>
                  <span>{project.duration}</span>
                </div>
                <div className="bg-green-50 rounded-lg p-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="font-medium text-green-900">{project.impact}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-secondary-100 text-secondary-700 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
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
              Ready to Start Your Transformation?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Let's discuss how I can help you achieve similar results for your technical challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg hover:bg-primary-50 transition-colors duration-200 font-semibold"
              >
                Schedule Consultation
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-200 font-semibold"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}