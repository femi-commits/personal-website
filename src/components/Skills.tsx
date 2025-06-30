import React from 'react';
import { Cloud, Settings, Users, BarChart3, Shield, Code } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: Cloud,
      title: 'Cloud Technologies',
      skills: [
        { name: 'AWS (EC2, S3, Lambda, RDS, CloudFormation)', level: 95 },
        { name: 'Microsoft Azure', level: 90 },
        { name: 'Kubernetes & Docker', level: 85 },
        { name: 'Infrastructure as Code (Terraform)', level: 88 }
      ]
    },
    {
      icon: Settings,
      title: 'DevOps & Automation',
      skills: [
        { name: 'CI/CD Pipelines (Jenkins, GitHub Actions)', level: 92 },
        { name: 'Configuration Management', level: 88 },
        { name: 'Monitoring & Logging (CloudWatch)', level: 85 },
        { name: 'Infrastructure Automation', level: 90 }
      ]
    },
    {
      icon: Users,
      title: 'Project Management',
      skills: [
        { name: 'Agile/Scrum Methodologies', level: 98 },
        { name: 'JIRA & Azure DevOps', level: 95 },
        { name: 'Risk Management', level: 92 },
        { name: 'Stakeholder Management', level: 96 }
      ]
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      skills: [
        { name: 'Power BI & Tableau', level: 88 },
        { name: 'Data Analysis & Visualization', level: 85 },
        { name: 'KPI Development', level: 90 },
        { name: 'Executive Reporting', level: 92 }
      ]
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      skills: [
        { name: 'Identity & Access Management (IAM)', level: 90 },
        { name: 'Security Protocols & Standards', level: 88 },
        { name: 'Compliance Management', level: 85 },
        { name: 'Risk Assessment', level: 92 }
      ]
    },
    {
      icon: Code,
      title: 'Technical Skills',
      skills: [
        { name: 'PowerShell & Python Scripting', level: 85 },
        { name: 'SQL & Database Management', level: 88 },
        { name: 'Linux System Administration', level: 82 },
        { name: 'API Integration & Management', level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Comprehensive expertise across cloud technologies, project management methodologies, 
            and modern DevOps practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-secondary-50 rounded-xl p-6 card-hover"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary-900">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-secondary-700">
                          {skill.name}
                        </span>
                        <span className="text-sm text-primary-600 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-secondary-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}