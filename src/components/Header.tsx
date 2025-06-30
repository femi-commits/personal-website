import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download, ArrowRight } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">OB</span>
            </div>
            <span className="text-xl font-bold text-secondary-900">
              Olufemi Balogun
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-secondary-700 hover:text-primary-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={downloadResume}
              className="flex items-center space-x-2 text-secondary-700 hover:text-primary-600 transition-colors duration-200"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </button>
            <Link
              to="/contact"
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200 flex items-center space-x-2"
            >
              <span>Get Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-secondary-700 hover:text-primary-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-secondary-700 hover:text-primary-600 hover:bg-secondary-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="border-t border-gray-200 pt-4 mt-4">
                <button
                  onClick={downloadResume}
                  className="w-full flex items-center justify-center space-x-2 px-3 py-2 text-secondary-700 hover:text-primary-600 transition-colors duration-200"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </button>
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full bg-primary-600 text-white px-3 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center space-x-2 mt-2"
                >
                  <span>Get Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}