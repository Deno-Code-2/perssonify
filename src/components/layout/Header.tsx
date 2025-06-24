
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { motion, AnimatePresence } from 'framer-motion';
import LogoTeal from '/Logo-Teal.png';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Insights', href: '/insights' },
    { 
      name: 'Solutions', 
      href: '#',
      hasDropdown: true,
      sections: [
        {
          title: 'Growth Solutions',
          href: '/growth-solutions',
          description: 'High-performance marketing strategy and execution',
          items: [
            { name: 'Performance Marketing & Paid Media', href: '/growth-solutions/performance-marketing' },
            { name: 'Social Media Marketing', href: '/growth-solutions/social-media-marketing' },
            { name: 'Email Marketing & Automation', href: '/growth-solutions/email-marketing' },
            { name: 'Creative Solutions', href: '/growth-solutions/creative-solutions' },
            { name: 'Conversion Rate Optimization', href: '/growth-solutions/conversion-optimization' },
            { name: 'SEO & Website Growth', href: '/growth-solutions/seo-website-growth' },
            { name: 'Website Solutions', href: '/growth-solutions/website-solutions' },
          ]
        },
        {
          title: 'Core Growth Solutions',
          href: '/core-growth-solutions',
          description: 'Comprehensive digital growth solutions for brands that demand impact',
          items: [
            { name: 'Brand Positioning & Strategy', href: '/core-growth-solutions/brand-positioning' },
            { name: 'Lead Generation Systems', href: '/core-growth-solutions/lead-generation' },
            { name: 'Revenue Optimization', href: '/core-growth-solutions/revenue-optimization' },
            { name: 'Growth Analytics & Insights', href: '/core-growth-solutions/analytics' },
          ]
        },
        {
          title: 'Strategic Solutions',
          href: '/strategic-solutions',
          description: 'Tailored strategy and implementations for operational efficiency',
          items: [
            { name: 'Process & Workflow Automation', href: '/strategic-solutions/process-automation' },
            { name: 'Digital Systems Enablement', href: '/strategic-solutions/digital-systems' },
            { name: 'Custom Solution Engineering', href: '/strategic-solutions/custom-engineering' },
            { name: 'Enterprise Transformation', href: '/strategic-solutions/enterprise-transformation' },
          ]
        },
        {
          title: 'Specialized Solutions',
          href: '/specialized-growth-solutions',
          description: 'Expert-level solutions for specific business challenges',
          items: [
            { name: 'Deep Dive Audit & Insights', href: '/specialized-growth-solutions/audit-insights' },
            { name: 'Analytics & Event Tracking', href: '/specialized-growth-solutions/analytics-tracking' },
            { name: 'AI-Accelerated Content', href: '/specialized-growth-solutions/ai-content' },
            { name: 'Executive Personal Branding', href: '/specialized-growth-solutions/executive-branding' },
          ]
        }
      ]
    },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/');

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, 100);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={handleLogoClick}
            className="flex items-center space-x-2 md:ml-0 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <img
              src={LogoTeal}
              alt="Perssonify Logo"
              className="h-8 w-auto object-contain min-h-[32px] min-w-[120px]"
              style={{ minHeight: '32px', minWidth: '120px' }}
            />
          </button>

          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8" ref={dropdownRef}>
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary whitespace-nowrap ${
                        isActive(item.href) ? 'text-primary' : 'text-foreground/80'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown 
                        className={`w-3 h-3 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.15, ease: 'easeOut' }}
                          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-background/95 backdrop-blur-sm border border-border rounded-xl shadow-xl overflow-hidden z-50 min-w-[800px]"
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <div className="grid grid-cols-2 gap-1 p-4">
                            {item.sections?.map((section, sectionIndex) => (
                              <div key={section.title} className="p-3 rounded-lg hover:bg-muted/50 transition-colors">
                                <Link
                                  to={section.href}
                                  className="block mb-2"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <h3 className="font-semibold text-foreground hover:text-primary transition-colors mb-1">
                                    {section.title}
                                  </h3>
                                  <p className="text-xs text-muted-foreground mb-3">
                                    {section.description}
                                  </p>
                                </Link>
                                <div className="space-y-1">
                                  {section.items.slice(0, 4).map((subItem) => (
                                    <Link
                                      key={subItem.name}
                                      to={subItem.href}
                                      className="block text-xs text-foreground/70 hover:text-primary transition-colors py-1"
                                      onClick={() => setActiveDropdown(null)}
                                    >
                                      {subItem.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-sm font-medium transition-colors hover:text-primary whitespace-nowrap ${
                      isActive(item.href) ? 'text-primary' : 'text-foreground/80'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="flex items-center space-x-2">
              <Switch
                checked={isDarkMode}
                setChecked={toggleDarkMode}
              />
            </div>
            <Button asChild size="sm" className="h-8 hidden sm:inline-flex">
              <Link to="/contact">Get Started</Link>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-8 h-8 p-0 lg:hidden"
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden border-t border-border bg-background"
            >
              <div className="py-2 space-y-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === `mobile-${item.name}` ? null : `mobile-${item.name}`
                            )
                          }
                          className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium transition-colors hover:text-primary text-foreground/80"
                        >
                          <span>{item.name}</span>
                          <ChevronDown 
                            className={`w-3 h-3 transition-transform duration-200 ${
                              activeDropdown === `mobile-${item.name}` ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>
                        
                        <AnimatePresence>
                          {activeDropdown === `mobile-${item.name}` && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="bg-muted/30"
                            >
                              {item.sections?.map((section) => (
                                <div key={section.title}>
                                  <Link
                                    to={section.href}
                                    onClick={() => {
                                      setIsMenuOpen(false);
                                      setActiveDropdown(null);
                                    }}
                                    className="block px-6 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                                  >
                                    {section.title}
                                  </Link>
                                  {section.items.slice(0, 2).map((dropdownItem) => (
                                    <Link
                                      key={dropdownItem.name}
                                      to={dropdownItem.href}
                                      onClick={() => {
                                        setIsMenuOpen(false);
                                        setActiveDropdown(null);
                                      }}
                                      className="block px-8 py-1 text-xs text-foreground/70 hover:text-primary transition-colors"
                                    >
                                      {dropdownItem.name}
                                    </Link>
                                  ))}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-4 py-2 text-sm font-medium transition-colors hover:text-primary text-foreground/80"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="px-4 py-2">
                  <Button asChild className="w-full">
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
