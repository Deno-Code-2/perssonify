
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Settings } from 'lucide-react';

const OurSolutions: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'growth' | 'strategic'>('growth');

  const growthSolutions = [
    {
      title: 'Performance Marketing & Paid Media',
      description: 'Data-driven advertising campaigns that maximize ROI through strategic targeting and optimization.',
      link: '/growth-solutions/performance-marketing',
      icon: '📊'
    },
    {
      title: 'Social Media Marketing & Brand Engagement',
      description: 'Build authentic connections and drive engagement across all social platforms.',
      link: '/growth-solutions/social-media-marketing',
      icon: '📱'
    },
    {
      title: 'Email Marketing & Marketing Automation',
      description: 'Personalized email campaigns that nurture leads and drive conversions.',
      link: '/growth-solutions/email-marketing',
      icon: '✉️'
    },
    {
      title: 'Creative Solutions',
      description: 'Compelling visual content and creative assets that capture attention and drive action.',
      link: '/growth-solutions/creative-solutions',
      icon: '🎨'
    },
    {
      title: 'Conversion Rate Optimization (CRO)',
      description: 'Data-driven website optimization to increase conversions and revenue.',
      link: '/growth-solutions/conversion-optimization',
      icon: '🚀'
    },
    {
      title: 'SEO & Website Growth',
      description: 'Organic visibility strategies that drive sustainable, long-term growth.',
      link: '/growth-solutions/seo-website-growth',
      icon: '🔍'
    },
    {
      title: 'Website Solutions',
      description: 'High-converting websites built for performance, user experience, and growth.',
      link: '/growth-solutions/website-solutions',
      icon: '💻'
    }
  ];

  const strategicSolutions = [
    {
      title: 'Process & Workflow Automation',
      description: 'Streamline operations with intelligent automation solutions.',
      link: '/strategic-solutions/process-automation',
      icon: '⚙️'
    },
    {
      title: 'Digital Systems Enablement',
      description: 'Technology integration that enhances operational efficiency.',
      link: '/strategic-solutions/digital-systems',
      icon: '🔧'
    },
    {
      title: 'Custom Solution Engineering',
      description: 'Tailored solutions designed for your unique business needs.',
      link: '/strategic-solutions/custom-engineering',
      icon: '🛠️'
    },
    {
      title: 'Enterprise Evolution & Strategic Transformation',
      description: 'Large-scale transformation initiatives that drive sustainable growth.',
      link: '/strategic-solutions/enterprise-transformation',
      icon: '🏢'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('our-solutions');
      if (section) {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible) {
          const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
          if (scrollProgress > 0.3 && scrollProgress < 0.7) {
            setActiveSection('growth');
          } else if (scrollProgress >= 0.7) {
            setActiveSection('strategic');
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="our-solutions" className="py-12 sm:py-16 lg:py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Our Solutions
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive growth and strategic solutions designed to accelerate your business success
          </p>
        </motion.div>

        <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Side Navigation - Fixed on Desktop, Mobile Tabs */}
          <div className="lg:w-1/4 lg:sticky lg:top-24 lg:self-start">
            {/* Mobile Tab Navigation */}
            <div className="flex lg:hidden mb-6 bg-muted/50 rounded-lg p-1">
              <button
                onClick={() => setActiveSection('growth')}
                className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all ${
                  activeSection === 'growth'
                    ? 'bg-background text-primary shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Zap className="w-4 h-4 inline mr-2" />
                Growth Solutions
              </button>
              <button
                onClick={() => setActiveSection('strategic')}
                className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all ${
                  activeSection === 'strategic'
                    ? 'bg-background text-primary shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Settings className="w-4 h-4 inline mr-2" />
                Strategic Solutions
              </button>
            </div>

            {/* Desktop Side Navigation */}
            <div className="hidden lg:block space-y-4">
              <motion.div
                className={`p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                  activeSection === 'growth'
                    ? 'border-primary bg-primary/5 shadow-lg'
                    : 'border-border bg-background hover:border-primary/50'
                }`}
                onClick={() => setActiveSection('growth')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center mb-3">
                  <Zap className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-foreground">Growth Solutions</h3>
                </div>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Marketing strategies and execution that drive measurable growth
                </p>
              </motion.div>

              <motion.div
                className={`p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                  activeSection === 'strategic'
                    ? 'border-primary bg-primary/5 shadow-lg'
                    : 'border-border bg-background hover:border-primary/50'
                }`}
                onClick={() => setActiveSection('strategic')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center mb-3">
                  <Settings className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-foreground">Strategic Solutions</h3>
                </div>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Technology and systems that enhance operational efficiency
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="lg:w-3/4">
            {/* Growth Solutions */}
            <motion.div
              key="growth"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: activeSection === 'growth' ? 1 : 0,
                y: activeSection === 'growth' ? 0 : 20
              }}
              transition={{ duration: 0.5 }}
              className={activeSection === 'growth' ? 'block' : 'hidden'}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {growthSolutions.map((solution, index) => (
                  <motion.div
                    key={solution.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Link to={solution.link}>
                      <div className="h-full p-4 sm:p-6 rounded-lg border bg-background hover:shadow-lg transition-all duration-300 hover:border-primary/50 hover:-translate-y-1">
                        <div className="flex items-start space-x-4 h-full">
                          <div className="text-3xl sm:text-4xl flex-shrink-0 mt-1">
                            {solution.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                              {solution.title}
                            </h4>
                            <p className="text-sm sm:text-base text-muted-foreground line-clamp-3 leading-relaxed">
                              {solution.description}
                            </p>
                            <div className="flex items-center mt-3 sm:mt-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                              <span className="text-sm font-medium">Learn More</span>
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Strategic Solutions */}
            <motion.div
              key="strategic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: activeSection === 'strategic' ? 1 : 0,
                y: activeSection === 'strategic' ? 0 : 20
              }}
              transition={{ duration: 0.5 }}
              className={activeSection === 'strategic' ? 'block' : 'hidden'}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {strategicSolutions.map((solution, index) => (
                  <motion.div
                    key={solution.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Link to={solution.link}>
                      <div className="h-full p-4 sm:p-6 rounded-lg border bg-background hover:shadow-lg transition-all duration-300 hover:border-primary/50 hover:-translate-y-1">
                        <div className="flex items-start space-x-4 h-full">
                          <div className="text-3xl sm:text-4xl flex-shrink-0 mt-1">
                            {solution.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                              {solution.title}
                            </h4>
                            <p className="text-sm sm:text-base text-muted-foreground line-clamp-3 leading-relaxed">
                              {solution.description}
                            </p>
                            <div className="flex items-center mt-3 sm:mt-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                              <span className="text-sm font-medium">Learn More</span>
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSolutions;
