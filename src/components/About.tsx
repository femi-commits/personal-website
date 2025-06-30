import React from 'react';
import { Award, Users, TrendingUp, Shield } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Award,
      title: 'Certified Professional',
      description: 'PMP, AWS Cloud Practitioner, Azure Fundamentals, CISM certified'
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Led cross-functional teams of 10+ members across multiple projects'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: '40% operational efficiency increase, 20% cost reduction achieved'
    },
    {
      icon: Shield,
      title: 'Security Focus',
      description: 'Implemented enterprise IAM solutions and security protocols'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900">
                About <span className="gradient-text">Me</span>
              </h2>
              <p className="text-lg text-secondary-600 leading-relaxed">
                Technical Project Manager with 8+ years of experience leading complex cloud infrastructure 
                and software development projects in high-impact organizations. Proven success in managing 
                large-scale, cross-functional teams using Agile, Waterfall, and hybrid methodologies.
              </p>
              <p className="text-secondary-600 leading-relaxed">
                I specialize in driving scalable cloud solutions, risk management, and process optimization. 
                My expertise spans cloud migration, DevOps/SRE practices, CI/CD pipeline setup, and 
                infrastructure planning. I'm passionate about fostering collaboration between product, 
                engineering, and DevOps teams to achieve continuous delivery and operational excellence.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-secondary-900">Core Competencies</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-secondary-700">Cloud Architecture</span>
                    <span className="text-primary-600">95%</span>
                  </div>
                  <div className="w-full bg-secondary-200 rounded-full h-2">
                    <div className="bg-primary-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-secondary-700">Project Management</span>
                    <span className="text-primary-600">98%</span>
                  </div>
                  <div className="w-full bg-secondary-200 rounded-full h-2">
                    <div className="bg-primary-600 h-2 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-secondary-700">DevOps/SRE</span>
                    <span className="text-primary-600">90%</span>
                  </div>
                  <div className="w-full bg-secondary-200 rounded-full h-2">
                    <div className="bg-primary-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-secondary-700">Team Leadership</span>
                    <span className="text-primary-600">96%</span>
                  </div>
                  <div className="w-full bg-secondary-200 rounded-full h-2">
                    <div className="bg-primary-600 h-2 rounded-full" style={{ width: '96%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-secondary-50 rounded-xl p-6 card-hover"
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
      </div>
    </section>
  );
}