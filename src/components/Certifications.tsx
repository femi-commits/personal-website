import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

export function Certifications() {
  const certifications = [
    {
      name: 'Project Management Professional (PMP)',
      issuer: 'Project Management Institute',
      year: '2023',
      status: 'Active',
      description: 'Globally recognized certification demonstrating project management expertise and leadership skills.',
      skills: ['Project Planning', 'Risk Management', 'Stakeholder Management', 'Agile Methodologies']
    },
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      year: '2023',
      status: 'Active',
      description: 'Foundational certification validating cloud fluency and foundational AWS knowledge.',
      skills: ['Cloud Computing', 'AWS Services', 'Security', 'Pricing & Support']
    },
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2023',
      status: 'Active',
      description: 'Professional-level certification demonstrating ability to design distributed systems on AWS.',
      skills: ['Solution Architecture', 'High Availability', 'Cost Optimization', 'Security Best Practices']
    },
    {
      name: 'Microsoft Azure Fundamentals',
      issuer: 'Microsoft',
      year: '2022',
      status: 'Active',
      description: 'Foundational certification demonstrating basic knowledge of cloud services and Microsoft Azure.',
      skills: ['Azure Services', 'Cloud Concepts', 'Security & Compliance', 'Azure Pricing']
    },
    {
      name: 'Certified Information Systems Manager (CISM)',
      issuer: 'ISACA',
      year: '2022',
      status: 'Active',
      description: 'Advanced certification for information security management and governance professionals.',
      skills: ['Information Security', 'Risk Management', 'Incident Response', 'Security Governance']
    },
    {
      name: 'Professional Scrum Master I (PSM)',
      issuer: 'Scrum.org',
      year: '2021',
      status: 'Active',
      description: 'Certification demonstrating fundamental level of Scrum mastery and agile practices.',
      skills: ['Scrum Framework', 'Agile Coaching', 'Team Facilitation', 'Continuous Improvement']
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Industry-recognized certifications demonstrating expertise in project management, 
            cloud technologies, and information security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-secondary-50 rounded-xl p-6 card-hover border-l-4 border-primary-500"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary-600" />
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-green-600 font-medium">{cert.status}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-secondary-900 mb-1">
                    {cert.name}
                  </h3>
                  <div className="flex items-center space-x-2 text-secondary-600">
                    <span className="font-medium">{cert.issuer}</span>
                    <span>•</span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span className="text-sm">{cert.year}</span>
                    </div>
                  </div>
                </div>

                <p className="text-secondary-700 text-sm leading-relaxed">
                  {cert.description}
                </p>

                <div>
                  <h4 className="font-semibold text-secondary-900 mb-2 text-sm">Key Skills:</h4>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-primary-50 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-bold text-primary-900">Master of Science, Engineering</h4>
                  <p className="text-primary-700">University of Portsmouth</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-primary-600">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-medium">2012</span>
              </div>
            </div>

            <div className="bg-secondary-50 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-secondary-200 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-secondary-600" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary-900">Bachelor of Science, Engineering</h4>
                  <p className="text-secondary-700">University of Ibadan</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-secondary-600">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-medium">2009</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}