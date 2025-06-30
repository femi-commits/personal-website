import React from 'react';
import { ExternalLink, Calendar, DollarSign, Users, TrendingUp } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Digital Transformation Project',
      company: 'Financial Services Client',
      description: 'Led the delivery of a $2M digital transformation project integrating cloud technologies and modernizing IT infrastructure.',
      impact: '40% increase in operational efficiency',
      duration: '18 months',
      teamSize: '15+ members',
      technologies: ['AWS', 'Azure', 'Microservices', 'DevOps', 'Agile'],
      achievements: [
        'Successfully migrated legacy on-premises systems to cloud infrastructure',
        'Implemented automated CI/CD pipelines reducing deployment time by 60%',
        'Established monitoring and alerting systems improving system reliability',
        'Delivered project 2 weeks ahead of schedule and 5% under budget'
      ]
    },
    {
      title: 'Identity & Access Management Implementation',
      company: 'Enterprise Security Enhancement',
      description: 'Implemented comprehensive IAM solution using Okta for enterprise security enhancement across 5,000+ users.',
      impact: '40% decrease in unauthorized access, 25% faster login experience',
      duration: '8 months',
      teamSize: '10 members',
      technologies: ['Okta', 'SAML', 'OAuth', 'Active Directory', 'Security Protocols'],
      achievements: [
        'Designed and deployed enterprise-grade IAM architecture',
        'Integrated with existing systems ensuring seamless user experience',
        'Implemented multi-factor authentication across all applications',
        'Achieved 99.9% system uptime during implementation phase'
      ]
    },
    {
      title: 'API Platform Development',
      company: 'Financial Systems Integration',
      description: 'Managed development of robust API platform enabling third-party developers to integrate with core financial systems.',
      impact: 'Expanded ecosystem with 50+ partner integrations',
      duration: '12 months',
      teamSize: '20+ members',
      technologies: ['REST APIs', 'GraphQL', 'Microservices', 'Docker', 'Kubernetes'],
      achievements: [
        'Architected scalable API gateway handling 2M+ calls per day',
        'Implemented comprehensive API documentation and developer portal',
        'Established rate limiting and security controls for external access',
        'Reduced integration time for partners from weeks to days'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary-50">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Key <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Showcase of major projects demonstrating expertise in cloud migration, 
            security implementation, and large-scale system integration.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 card-hover"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Project Info */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-primary-600 font-semibold mb-4">{project.company}</p>
                    <p className="text-secondary-700 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      <span className="font-semibold text-green-900">Key Impact</span>
                    </div>
                    <p className="text-green-800 font-medium">{project.impact}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-secondary-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-3">Technologies Used:</h4>
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
                </div>

                {/* Project Stats */}
                <div className="space-y-6">
                  <div className="bg-secondary-50 rounded-lg p-6">
                    <h4 className="font-semibold text-secondary-900 mb-4">Project Details</h4>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-secondary-500" />
                        <div>
                          <div className="text-sm text-secondary-600">Duration</div>
                          <div className="font-semibold text-secondary-900">{project.duration}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="w-5 h-5 text-secondary-500" />
                        <div>
                          <div className="text-sm text-secondary-600">Team Size</div>
                          <div className="font-semibold text-secondary-900">{project.teamSize}</div>
                        </div>
                      </div>
                      {project.title.includes('$2M') && (
                        <div className="flex items-center space-x-3">
                          <DollarSign className="w-5 h-5 text-secondary-500" />
                          <div>
                            <div className="text-sm text-secondary-600">Project Value</div>
                            <div className="font-semibold text-secondary-900">$2M+</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="bg-primary-50 rounded-lg p-6">
                    <h4 className="font-semibold text-primary-900 mb-2">Project Success</h4>
                    <p className="text-primary-700 text-sm">
                      Delivered on time and within budget while exceeding performance expectations 
                      and stakeholder satisfaction metrics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}