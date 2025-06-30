import React from 'react';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: 'Technical Project Manager',
      company: 'Wave Financial',
      period: '09/2023 - Current',
      location: 'Remote',
      achievements: [
        'Led end-to-end implementation of cloud-based financial systems, driving projects from initial scope definition through deployment',
        'Successfully migrated legacy systems to modern cloud architecture using AWS and Azure services, reducing operational costs by 20%',
        'Implemented advanced security protocols including MFA and encryption standards, ensuring compliance with industry regulations',
        'Delivered executive-level reporting through Power BI dashboards, providing actionable insights for C-suite decision-making',
        'Served as Scrum Master for three Agile teams, improving sprint velocity by 25% through effective backlog management'
      ],
      technologies: ['AWS', 'Azure', 'Jira', 'Confluence', 'Power BI', 'Agile/Scrum']
    },
    {
      title: 'Project Manager/Scrum Master',
      company: 'Oxdit Technologies',
      period: '07/2021 - 08/2023',
      location: 'Toronto, ON',
      achievements: [
        'Spearheaded successful migration of legacy applications to modernized infrastructure, reducing downtime by 40%',
        'Managed cloud transformation initiatives using AWS and Azure services, leading to 30% reduction in operational costs',
        'Directed portfolio of 10+ concurrent projects using PPM tools, achieving 95% on-time project completion rate',
        'Successfully implemented Agile methodologies across multiple projects, resulting in 20% increase in team productivity',
        'Oversaw deployment of DevOps pipelines including CI/CD automation, accelerating software release cycles by 50%'
      ],
      technologies: ['AWS', 'Azure', 'Jira', 'Smartsheet', 'Jenkins', 'CI/CD']
    },
    {
      title: 'Project Manager II',
      company: 'ND Western',
      period: '07/2018 - 06/2021',
      location: 'Calgary, AB',
      achievements: [
        'Led cross-functional teams in executing large-scale IT infrastructure projects, consistently delivering on time and within scope',
        'Developed and implemented robust risk management frameworks, reducing project safety incidents by 20%',
        'Designed and deployed business continuity and disaster recovery plans, ensuring zero data loss during critical operations',
        'Collaborated with financial directors to monitor project budgets, resulting in 15% cost savings while maintaining deliverables'
      ],
      technologies: ['Microsoft Project', 'SharePoint', 'Risk Management', 'BC/DR Planning']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary-50">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            A track record of delivering complex technical projects and driving digital transformation 
            across fintech, oil & gas, and cloud infrastructure domains.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 card-hover"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-secondary-900">{exp.title}</h3>
                  <div className="flex items-center space-x-4 text-secondary-600">
                    <span className="text-lg font-semibold text-primary-600">{exp.company}</span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 lg:mt-0">
                  <div className="flex items-center space-x-2 text-green-600">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-medium">Key Impact Role</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-secondary-700 leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-secondary-900 mb-3">Technologies & Tools:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}