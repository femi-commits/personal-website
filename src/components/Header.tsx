import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const downloadResume = () => {
    // Create a downloadable resume file
    const resumeContent = `
OLUFEMI BALOGUN
Technical Project Manager
Brampton, Ontario | 647-287-2795 | olufemibalogunpm@gmail.com
LinkedIn: linkedin.com/in/olufemi-balogun-engr

PROFESSIONAL SUMMARY
Technical Project Manager with 8+ years of experience leading complex cloud infrastructure and software development projects in high-impact organizations. Proven success in managing large-scale, cross-functional teams using Agile, Waterfall, and hybrid methodologies. Expertise in driving scalable cloud solutions, risk management, and process optimization.

EXPERIENCE
Technical Project Manager - Wave Financial (09/2023 - Current)
• Led end-to-end implementation of cloud-based financial systems
• Managed cross-functional teams across software development, IT infrastructure, and DevOps
• Successfully migrated legacy systems to modern cloud architecture, reducing operational costs by 20%
• Implemented advanced security protocols including MFA and encryption standards

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
      <nav className="container-max section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="text-xl font-bold gradient-text hover:scale-105 transition-transform duration-200"
            >
              Olufemi Balogun
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : 'text-secondary-700 hover:text-primary-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Resume Download Button */}
          <div className="hidden md:block">
            <button
              onClick={downloadResume}
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200 flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </button>
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
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-secondary-700 hover:text-primary-600 hover:bg-secondary-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={downloadResume}
                className="w-full bg-primary-600 text-white px-3 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center space-x-2 mt-4"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}