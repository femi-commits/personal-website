import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, Users, TrendingUp, Shield, Calendar, MapPin, 
  Download, ArrowRight, CheckCircle, Star, Briefcase 
} from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Award,
      title: 'Certified Professional',
      description: 'PMP, AWS Cloud Practitioner, Azure Fundamentals, CISM certified with continuous learning mindset'
    },
    {
      icon: Users,
      title: 'Team Leadership Excellence',
      description: 'Successfully led cross-functional teams of 10+ members across multiple high-stakes projects'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: '40% operational efficiency increase, 20% cost reduction, and 95% on-time delivery rate'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Implemented enterprise IAM solutions and security protocols for 5,000+ users'
    }
  ];

  const experience = [
    {
      title: 'Technical Project Manager',
      company: 'Wave Financial',
      period: '09/2023 - Current',
      location: 'Remote',
      type: 'Full-time',
      description: 'Leading end-to-end implementation of cloud-based financial systems and digital transformation initiatives.',
      achievements: [
        'Led $2M+ digital transformation project with 40% efficiency improvement',
        'Successfully migrated legacy systems to cloud architecture (20% cost reduction)',
        'Implemented advanced security protocols including MFA and encryption',
        'Delivered executive-level reporting through Power BI dashboards'
      ]
    },
    {
      title: 'Project Manager/Scrum Master',
      company: 'Oxdit Technologies',
      period: '07/2021 - 08/2023',
      location: 'Toronto, ON',
      type: 'Full-time',
      description: 'Managed cloud transformation initiatives and led Agile teams across multiple concurrent projects.',
      achievements: [
        'Spearheaded legacy application migration (40% downtime reduction)',
        'Managed portfolio of 10+ concurrent projects (95% on-time completion)',
        'Implemented Agile methodologies (20% productivity increase)',
        'Deployed DevOps pipelines (50% faster release cycles)'
      ]
    },
    {
      title: 'Project Manager II',
      company: 'ND Western',
      period: '07/2018 - 06/2021',
      location: 'Calgary, AB',
      type: 'Full-time',
      description: 'Led large-scale IT infrastructure projects and implemented robust risk management frameworks.',
      achievements: [
        'Executed large-scale IT infrastructure projects on time and within scope',
        'Developed risk management frameworks (20% reduction in safety incidents)',
        'Designed BC/DR plans ensuring zero data loss during critical operations',
        'Achieved 15% cost savings while maintaining project deliverables'
      ]
    }
  ];

  const certifications = [
    {
      name: 'Project Management Professional (PMP)',
      issuer: 'Project Management Institute',
      year: '2023',
      status: 'Active'
    },
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      year: '2023',
      status: 'Active'
    },
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2023',
      status: 'Active'
    },
    {
      name: 'Microsoft Azure Fundamentals',
      issuer: 'Microsoft',
      year: '2022',
      status: 'Active'
    },
    {
      name: 'Certified Information Systems Manager (CISM)',
      issuer: 'ISACA',
      year: '2022',
      status: 'Active'
    },
    {
      name: 'Professional Scrum Master I (PSM)',
      issuer: 'Scrum.org',
      year: '2021',
      status: 'Active'
    }
  ];

  const skills = [
    { category: 'Cloud Technologies', items: ['AWS', 'Azure', 'Kubernetes', 'Docker'], level: 95 },
    { category: 'Project Management', items: ['Agile/Scrum', 'JIRA', 'Risk Management'], level: 98 },
    { category: 'DevOps/SRE', items: ['CI/CD', 'Infrastructure as Code', 'Monitoring'], level: 90 },
    { category: 'Team Leadership', items: ['Cross-functional Teams', 'Stakeholder Management'], level: 96 }
  ];

  const downloadResume = () => {
    // Resume download functionality (same as in Header component)
    const resumeContent = `
OLUFEMI BALOGUN
Technical Project Manager & Cloud Solutions Consultant
Brampton, Ontario | 647-287-2795 | olufemibalogunpm@gmail.com
LinkedIn: linkedin.com/in/olufemi-balogun-engr

PROFESSIONAL SUMMARY
Technical Project Manager with 8+ years of experience leading complex cloud infrastructure and software development projects in high-impact organizations. Proven success in managing large-scale, cross-functional teams using Agile, Waterfall, and hybrid methodologies. Expertise in driving scalable cloud solutions, risk management, and process optimization.

EXPERIENCE
Technical Project Manager - Wave Financial (09/2023 - Current)
• Led end-to-end implementation of cloud-based financial systems
• Successfully migrated legacy systems to modern cloud architecture, reducing operational costs by 20%
• Implemented advanced security protocols including MFA and encryption standards
• Delivered executive-level reporting through Power BI dashboards

Project Manager/Scrum Master - Oxdit Technologies (07/2021 - 08/2023)
• Spearheaded successful migration of legacy applications to modernized infrastructure
• Managed cloud transformation initiatives using AWS and Azure services
• Directed portfolio of 10+ concurrent projects with 95% on-time completion rate

Project Manager II - ND Western (07/2018 - 06/2021)
• Led cross-functional teams in executing large-scale IT infrastructure projects
• Developed and implemented robust risk management frameworks
• Designed and deployed business continuity and disaster recovery plans

EDUCATION
Master of Science, Engineering - University of Portsmouth (2012)
Bachelor of Science, Engineering - University of Ibadan (2009)

CERTIFICATIONS
• AWS Certified Cloud Practitioner
• Project Management Professional (PMP)
• Certified Information Systems Manager (CISM)
• Microsoft Azure Fundamentals
• AWS Certified Solutions Architect
• Professional Scrum Master I (PSM)

SKILLS
• Cloud Technologies: AWS, Azure, Kubernetes, Docker, Jenkins
• Project Management: JIRA, Azure DevOps, Microsoft Project, Agile/Scrum
• Technical: PowerShell, SQL, Python, CI/CD Pipelines, Infrastructure as Code
    `;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Olufemi_Balogun_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-blue-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 leading-tight">
                  About <span className="bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">Olufemi Balogun</span>
                </h1>
                <p className="text-xl text-secondary-600 leading-relaxed">
                  Technical Project Manager with 8+ years of experience leading complex cloud infrastructure 
                  and software development projects in high-impact organizations. Passionate about driving 
                  digital transformation and optimizing technical operations.
                </p>
              </div>

              <div className="flex items-center space-x-4 text-sm text-secondary-600">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Brampton, Ontario, Canada</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Briefcase className="w-4 h-4" />
                  <span>Available for Consulting</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Work With Me</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={downloadResume}
                  className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center">
                      <span className="text-primary-600 font-bold text-xl">OB</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary-900">Olufemi Balogun</h3>
                      <p className="text-secondary-600">Technical Project Manager</p>
                      <div className="flex items-center space-x-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-yellow-500 fill-current" />
                        ))}
                        <span className="text-xs text-secondary-600 ml-1">(4.9/5)</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="text-center p-3 bg-primary-50 rounded-lg">
                      <div className="text-2xl font-bold text-primary-600">$5.2M+</div>
                      <div className="text-sm text-primary-700">Total Project Value Managed</div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-center p-3 bg-secondary-50 rounded-lg">
                        <div className="text-lg font-bold text-secondary-900">15+</div>
                        <div className="text-xs text-secondary-600">Projects</div>
                      </div>
                      <div className="text-center p-3 bg-secondary-50 rounded-lg">
                        <div className="text-lg font-bold text-secondary-900">95%</div>
                        <div className="text-xs text-secondary-600">On-Time</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-2">Specializations</h4>
                    <div className="space-y-1 text-sm text-green-800">
                      <div>• Cloud Migration & Architecture</div>
                      <div>• DevOps Implementation</div>
                      <div>• Technical Team Leadership</div>
                      <div>• SaaS Platform Development</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Professional Highlights
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Key strengths and achievements that define my approach to technical project management and consulting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-secondary-50 rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-secondary-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Professional Experience
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              A track record of delivering complex technical projects and driving digital transformation 
              across fintech, oil & gas, and cloud infrastructure domains.
            </p>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
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
                    <p className="text-secondary-700">{exp.description}</p>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-secondary-900 mb-3">Key Achievements:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-secondary-700 text-sm leading-relaxed">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Certifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Skills */}
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-8">Core Competencies</h2>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-secondary-900">{skill.category}</h3>
                      <span className="text-primary-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-8">Certifications</h2>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-secondary-50 rounded-lg p-4 border-l-4 border-primary-500"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-secondary-900 mb-1">{cert.name}</h3>
                        <p className="text-secondary-600 text-sm">{cert.issuer}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-secondary-600">{cert.year}</div>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                          {cert.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-primary-50 rounded-lg p-6">
                <h3 className="font-semibold text-primary-900 mb-3">Education</h3>
                <div className="space-y-3">
                  <div>
                    <div className="font-medium text-primary-900">Master of Science, Engineering</div>
                    <div className="text-primary-700 text-sm">University of Portsmouth • 2012</div>
                  </div>
                  <div>
                    <div className="font-medium text-primary-900">Bachelor of Science, Engineering</div>
                    <div className="text-primary-700 text-sm">University of Ibadan • 2009</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let's Work Together
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Ready to transform your technical operations? Let's discuss how my expertise 
              can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg hover:bg-primary-50 transition-colors duration-200 font-semibold"
              >
                Start a Project
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