import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, ArrowUp, MapPin } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Cloud Migration', href: '/services#cloud-migration' },
      { name: 'DevOps Implementation', href: '/services#devops' },
      { name: 'SaaS Development', href: '/services#saas' },
      { name: 'Team Leadership', href: '/services#leadership' }
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Projects', href: '/projects' },
      { name: 'Services', href: '/services' },
      { name: 'Contact', href: '/contact' }
    ],
    resources: [
      { name: 'Case Studies', href: '/projects' },
      { name: 'Free Consultation', href: '/contact' },
      { name: 'Download Resume', href: '#', onClick: true }
    ]
  };

  const downloadResume = () => {
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
    <footer className="bg-secondary-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">OB</span>
              </div>
              <span className="text-xl font-bold">Olufemi Balogun</span>
            </div>
            <p className="text-secondary-300 leading-relaxed">
              Technical Project Manager specializing in cloud infrastructure, 
              digital transformation, and leading high-performing teams to deliver 
              exceptional results.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:olufemibalogunpm@gmail.com"
                className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:+16472872795"
                className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/olufemi-balogun-engr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <div className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="block text-secondary-300 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Company</h4>
            <div className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="block text-secondary-300 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <div className="space-y-3 text-secondary-300">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:olufemibalogunpm@gmail.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  olufemibalogunpm@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a
                  href="tel:+16472872795"
                  className="hover:text-white transition-colors duration-200"
                >
                  647-287-2795
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Brampton, Ontario, Canada</span>
              </div>
            </div>
            <div className="pt-4">
              <button
                onClick={downloadResume}
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200 text-sm font-medium"
              >
                Download Resume
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-secondary-400 text-sm">
            © {currentYear} Olufemi Balogun. All rights reserved.
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-secondary-400 text-sm">Available for consulting projects</span>
            <button
              onClick={scrollToTop}
              className="bg-secondary-800 hover:bg-primary-600 p-2 rounded-lg transition-colors duration-200"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}