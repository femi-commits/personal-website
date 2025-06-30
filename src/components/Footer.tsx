import React from 'react';
import { Mail, Phone, Linkedin, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-max section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Olufemi Balogun</h3>
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

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: 'About', id: 'about' },
                { name: 'Experience', id: 'experience' },
                { name: 'Skills', id: 'skills' },
                { name: 'Projects', id: 'projects' },
                { name: 'Certifications', id: 'certifications' },
                { name: 'Contact', id: 'contact' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    const element = document.getElementById(link.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-secondary-300 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <div className="space-y-3 text-secondary-300">
              <div>
                <div className="font-medium text-white">Email</div>
                <a
                  href="mailto:olufemibalogunpm@gmail.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  olufemibalogunpm@gmail.com
                </a>
              </div>
              <div>
                <div className="font-medium text-white">Phone</div>
                <a
                  href="tel:+16472872795"
                  className="hover:text-white transition-colors duration-200"
                >
                  647-287-2795
                </a>
              </div>
              <div>
                <div className="font-medium text-white">Location</div>
                <div>Brampton, Ontario, Canada</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-secondary-400 text-sm">
            © {currentYear} Olufemi Balogun. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-secondary-800 hover:bg-primary-600 p-2 rounded-lg transition-colors duration-200"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}