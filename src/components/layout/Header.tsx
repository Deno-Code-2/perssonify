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
      name: 'Growth Solutions', 
      href: '/growth-solutions',
      hasDropdown: true,
      sections: [
        {
          title: 'Core Growth Solutions',
          href: '/core-growth-solutions',
          items: [
            { name: 'Performance Marketing & Paid Media', href: '/growth-solutions/performance-marketing' },
            { name: 'Social Media Marketing & Brand Engagement', href: '/growth-solutions/social-media-marketing' },
            { name: 'Email Marketing & Marketing Automation', href: '/growth-solutions/email-marketing' },
            { name: 'Creative Solutions', href: '/growth-solutions/creative-solutions' },
            { name: 'Conversion Rate Optimization (CRO)', href: '/growth-solutions/conversion-optimization' },
            { name: 'Search Engine Optimization (SEO) & Website Growth', href: '/growth-solutions/seo-website-growth' },
            { name: 'Website Solutions', href: '/growth-solutions/website-solutions' },
          ]
        },
        {
          title: 'Specialized Growth Solutions',
          href: '/specialized-growth-solutions',
          items: [
            { name: 'Deep Dive Audit & Strategic Insights', href: '/specialized-growth-solutions/audit-insights' },
            { name: 'Analytics and Event Tracking Setup', href: '/specialized-growth-solutions/analytics-tracking' },
            { name: 'Lead Generation & Funnel Strategy', href: '/specialized-growth-solutions/lead-generation' },
            { name: 'Brand Architecture & Strategy', href: '/specialized-growth-solutions/brand-strategy' },
            { name: 'Content Strategy & Planning', href: '/specialized-growth-solutions/content-strategy' },
            { name: 'AI-Accelerated Content Production Pipelines', href: '/specialized-growth-solutions/ai-content' },
            { name: 'Executive Personal Branding & LinkedIn Marketing', href: '/specialized-growth-solutions/executive-branding' },
          ]
        }
      ]
    },
    { 
      name: 'Strategic Solutions', 
      href: '/strategic-solutions',
      hasDropdown: true,
      sections: [
        {
          title: 'Core Strategic Solutions',
          href: '/strategic-solutions',
          items: [
            { name: 'Process & Workflow Automation', href: '/strategic-solutions/process-automation' },
            { name: 'Digital Systems Enablement', href: '/strategic-solutions/digital-systems' },
            { name: 'Custom Solution Engineering', href: '/strategic-solutions/custom-engineering' },
            { name: 'Enterprise Evolution & Strategic Transformation', href: '/strategic-solutions/enterprise-transformation' },
          ]
        },
        {
          title: 'Solutions By Function',
          href: '/strategic-solutions/by-function',
          items: [
            { name: 'Finance', href: '/strategic-solutions/finance' },
            { name: 'Human Resources', href: '/strategic-solutions/human-resources' },
            { name: 'Operations', href: '/strategic-solutions/operations' },
            { name: 'Compliance & Governance', href: '/strategic-solutions/compliance' },
            { name: 'Cross-Functional Leadership', href: '/strategic-solutions/cross-functional' },
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

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background border-b border-border transition-all duration-300">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-between h-14 sm:h-16 relative">
          {/* Logo */}
          <button 
            onClick={handleLogoClick}
            className="flex items-center cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0"
          >
            <img
              src={LogoTeal}
              alt="Perssonify Logo"
              className="object-contain h-8 w-24 sm:h-10 sm:w-32"
            />
          </button>

          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6" ref={dropdownRef}>
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
                          className="absolute left-0 bg-background border border-border rounded-lg shadow-lg z-[100]"
                          style={{ 
                            top: '100%',
                            marginTop: '16px',
                            width: '800px',
                            height: '320px',
                            // Both dropdowns same position - easy to change individually later
                            transform: item.name === 'Growth Solutions' ? 'translateX(-60%)' : 'translateX(-80%)'
                          }}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <div className="p-4 h-full">
                            {/* Compact Header */}
                            <Link
                              to={item.href}
                              className="block mb-3 p-2 rounded-lg hover:bg-muted/50 transition-colors border-b border-border/30"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <h3 className="font-bold text-base text-foreground hover:text-primary transition-colors">
                                {item.name}
                              </h3>
                              <p className="text-muted-foreground text-xs mt-1">
                                {item.name === 'Growth Solutions' 
                                  ? 'High-performance marketing strategy and execution'
                                  : 'Technology-enhanced operational scaling solutions'
                                }
                              </p>
                            </Link>
                            
                            {/* Wide Layout - 2 Columns Side by Side - NO SCROLLING */}
                            <div className="grid grid-cols-2 gap-8 h-[220px]">
                              {item.sections?.map((section) => (
                                <div key={section.title} className="space-y-2">
                                  <Link
                                    to={section.href}
                                    className="block font-bold text-sm text-foreground hover:text-primary transition-colors py-1 border-b border-border/20 mb-2"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    {section.title}
                                  </Link>
                                  <div className="space-y-1">
                                    {section.items?.map((subItem) => (
                                      <Link
                                        key={subItem.name}
                                        to={subItem.href}
                                        className="block text-xs text-foreground/70 hover:text-primary transition-colors py-1 px-2 rounded hover:bg-muted/30"
                                        onClick={() => setActiveDropdown(null)}
                                        title={subItem.name}
                                      >
                                        {subItem.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
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
          <div className="flex items-center space-x-1 sm:space-x-2">
            <div className="flex items-center space-x-1">
              <Switch
                checked={isDarkMode}
                setChecked={toggleDarkMode}
              />
            </div>
            <Button asChild size="sm" className="h-8 text-xs px-2 hidden sm:inline-flex">
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
              className="lg:hidden border-t border-border bg-background max-h-[70vh] overflow-y-auto"
            >
              <div className="py-2 space-y-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <Link
                          to={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block px-3 py-2 text-sm font-semibold transition-colors hover:text-primary text-foreground border-b border-border/30"
                        >
                          {item.name}
                        </Link>
                        <button
                          onClick={() => {
                            if (activeDropdown === `mobile-${item.name}`) {
                              setActiveDropdown(null);
                            } else {
                              setActiveDropdown(`mobile-${item.name}`);
                            }
                          }}
                          className="flex items-center justify-between w-full px-4 py-1.5 text-xs font-medium transition-colors hover:text-primary text-foreground/80"
                        >
                          <span>View All {item.name}</span>
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
                              className="bg-muted/30 max-h-48 overflow-y-auto"
                            >
                              {item.sections?.map((section) => (
                                <div key={section.title} className="px-6 py-2 border-l-2 border-primary/20">
                                  <Link
                                    to={section.href}
                                    onClick={() => {
                                      setIsMenuOpen(false);
                                      setActiveDropdown(null);
                                    }}
                                    className="block text-xs font-bold text-foreground hover:text-primary transition-colors py-1 mb-1 border-b border-border/20"
                                  >
                                    {section.title}
                                  </Link>
                                  {section.items?.map((subItem) => (
                                    <Link
                                      key={subItem.name}
                                      to={subItem.href}
                                      onClick={() => {
                                        setIsMenuOpen(false);
                                        setActiveDropdown(null);
                                      }}
                                      className="block px-2 py-1 text-xs text-foreground/70 hover:text-primary transition-colors hover:bg-muted/50 rounded"
                                    >
                                      {subItem.name}
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
                        className="block px-3 py-2 text-sm font-medium transition-colors hover:text-primary text-foreground/80"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="px-3 py-2 border-t border-border/30 mt-2">
                  <Button asChild className="w-full text-sm">
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