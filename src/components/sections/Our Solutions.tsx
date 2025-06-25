"use client"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import {
  BarChart3,
  Settings,
  Funnel,
  Building,
  FileText,
  Zap,
  Linkedin,
  Cog,
  Database,
  Wrench,
  Briefcase,
  DollarSign,
  UserCheck,
  Activity,
  Shield,
  Network,
} from "lucide-react"

export default function OurSolutions() {
  const [activeSection, setActiveSection] = useState("growth-solutions")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target);

        if (visibleSections.length > 0) {
          visibleSections.sort(
            (a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top
          );
          setActiveSection(visibleSections[0].id);
        }
      },
      {
        rootMargin: "0px 0px -40% 0px",
        threshold: 0.2,
      }
    );

    const sectionsToObserve = document.querySelectorAll("section[id]");
    sectionsToObserve.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const sections = [
    { id: "growth-solutions", title: "Growth Solutions" },
    { id: "strategic-solutions", title: "Strategic Solutions" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section at the top */}
      <div className="bg-background py-12 sm:py-16">
        <div className="container">
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-4 sm:mb-6 text-left text-primary">Our Solutions</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-left max-w-4xl leading-relaxed">
            Whether you're launching something new or optimizing what's already working, we deliver what your business
            needs to grow, adapt, and move faster.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-background text-foreground flex-grow">
        <div className="container py-8 flex flex-col lg:flex-row gap-8">
          {/* Table of Contents - Shows only active section on mobile with animations */}
          <nav className="lg:sticky lg:top-24 lg:self-start p-4 lg:w-64 sticky top-16 bg-background/95 backdrop-blur-sm border-b border-border lg:border-none z-40">
            {/* Mobile: Show only active section with slide animations */}
            <div className="lg:hidden">
              <div className="text-center overflow-hidden">
                {activeSection === "growth-solutions" && (
                  <motion.span 
                    className="block text-lg font-bold text-primary"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    key="growth"
                  >
                    Growth Solutions
                  </motion.span>
                )}
                {activeSection === "strategic-solutions" && (
                  <motion.span 
                    className="block text-lg font-bold text-primary"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    key="strategic"
                  >
                    Strategic Solutions
                  </motion.span>
                )}
              </div>
            </div>
            
            {/* Desktop: Show all sections with animations */}
            <ul className="hidden lg:flex lg:flex-col lg:space-y-3">
              {sections.map((section) => (
                <motion.li 
                  key={section.id}
                  initial={{ opacity: 0, x: section.id === "growth-solutions" ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={cn(
                      "text-xl transition-colors w-full text-left px-3 py-2",
                      activeSection === section.id
                        ? "font-bold text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {section.title}
                  </button>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Main Content */}
          <main className="flex-1 max-w-none">
            {/* Growth Solutions Section - Slides from LEFT to RIGHT */}
            <motion.section 
              id="growth-solutions" 
              className="py-4 mb-12 sm:mb-16"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight text-center sm:text-left text-primary">Growth Solutions</h2>

              <h3 className="text-xl sm:text-2xl font-semibold mb-4">High-Performance Marketing</h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                You need more customers, more engagement, and more momentum. If your priority is to attract the right
                audience, convert consistently, and expand your market reach, our Growth Solutions are built for you. We
                deliver high-performance marketing strategy and execution that engineers demand, amplifies brand value,
                and accelerates customer acquisition.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold mb-4">Core Growth Solutions</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                <Button 
                  variant="outline" 
                  className="flex items-start gap-3 p-6 h-auto text-left justify-start hover:bg-primary hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <Link to="/growth-solutions/performance-marketing" className="flex items-start gap-3">
                    <img src="/Growth Solutions Icons/PerformanceMarketing&PaidMedia.png" alt="Performance Marketing" className="w-5 h-5 mt-1 flex-shrink-0 dark:invert" />
                    <div className="flex-1">
                      <h5 className="font-semibold">Performance Marketing & Paid Media</h5>
                      <p className="text-sm opacity-80">High-ROI ads that convert.</p>
                    </div>
                  </Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="flex items-start gap-3 p-6 h-auto text-left justify-start hover:bg-primary hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <Link to="/growth-solutions/social-media-marketing" className="flex items-start gap-3">
                    <img src="/Growth Solutions Icons/Social Media Marketing & Brand Engagement.png" alt="Social Media Marketing" className="w-5 h-5 mt-1 flex-shrink-0 dark:invert" />
                    <div className="flex-1">
                      <h5 className="font-semibold">Social Media Marketing & Brand Engagement</h5>
                      <p className="text-sm opacity-80">Build audience, spark action.</p>
                    </div>
                  </Link>
                </Button>

                <Button 
                  variant="outline" 
                  className="flex items-start gap-3 p-6 h-auto text-left justify-start hover:bg-primary hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <Link to="/growth-solutions/email-marketing" className="flex items-start gap-3">
                    <img src="/Growth Solutions Icons/Email Marketing & Marketing Automation.png" alt="Email Marketing" className="w-5 h-5 mt-1 flex-shrink-0 dark:invert" />
                    <div className="flex-1">
                      <h5 className="font-semibold">Email Marketing & Marketing Automation</h5>
                      <p className="text-sm opacity-80">Automate nurture, drive loyalty.</p>
                    </div>
                  </Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="flex items-start gap-3 p-6 h-auto text-left justify-start hover:bg-primary hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <Link to="/growth-solutions/creative-solutions" className="flex items-start gap-3">
                    <img src="/Growth Solutions Icons/Creative Solutions.png" alt="Creative Solutions" className="w-5 h-5 mt-1 flex-shrink-0 dark:invert" />
                    <div className="flex-1">
                      <h5 className="font-semibold">Creative Solutions</h5>
                      <p className="text-sm opacity-80">Visuals that get results.</p>
                    </div>
                  </Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="flex items-start gap-3 p-6 h-auto text-left justify-start hover:bg-primary hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <Link to="/growth-solutions/conversion-optimization" className="flex items-start gap-3">
                    <img src="/Growth Solutions Icons/Conversion Rate Optimization.png" alt="Conversion Optimization" className="w-5 h-5 mt-1 flex-shrink-0 dark:invert" />
                    <div className="flex-1">
                      <h5 className="font-semibold">Conversion Rate Optimization (CRO)</h5>
                      <p className="text-sm opacity-80">Test. Refine. Convert more.</p>
                    </div>
                  </Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="flex items-start gap-3 p-6 h-auto text-left justify-start hover:bg-primary hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <Link to="/growth-solutions/seo-website-growth" className="flex items-start gap-3">
                    <img src="/Growth Solutions Icons/Search Engine Optimization (SEO) & Website Growth.png" alt="SEO & Website Growth" className="w-5 h-5 mt-1 flex-shrink-0 dark:invert" />
                    <div className="flex-1">
                      <h5 className="font-semibold">Search Engine Optimization (SEO) & Website Growth</h5>
                      <p className="text-sm opacity-80">Rank higher. Grow faster.</p>
                    </div>
                  </Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="flex items-start gap-3 p-6 h-auto text-left justify-start hover:bg-primary hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <Link to="/growth-solutions/website-solutions" className="flex items-start gap-3">
                    <img src="/Growth Solutions Icons/Website Solutions.png" alt="Website Solutions" className="w-5 h-5 mt-1 flex-shrink-0 dark:invert" />
                    <div className="flex-1">
                      <h5 className="font-semibold">Website Solutions</h5>
                      <p className="text-sm opacity-80">Seamless, scalable, conversion-ready.</p>
                    </div>
                  </Link>
                </Button>
              </div>

              
              <h4 className="text-lg sm:text-xl font-semibold mb-4">Specialized Growth Solutions</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
                <Button 
                  variant="outline" 
                  className="flex items-start gap-3 p-6 h-auto text-left justify-start hover:bg-primary hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <Link to="/specialized-growth-solutions/audit-insights" className="flex items-start gap-3">
                    <img src="/Specialized Growth Solutions Icons/Deep Dive Audit & Strategic Insights.png" alt="Deep Dive Audit" className="w-5 h-5 mt-1 flex-shrink-0 dark:invert" />
                    <div className="flex-1">
                      <h5 className="font-semibold">Deep Dive Audit & Strategic Insights</h5>
                      <p className="text-sm opacity-80">Clarity through expert analysis.</p>
                    </div>
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="flex items-start gap-3 p-6 h-auto text-left justify-start hover:bg-primary hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <Link to="/specialized-growth-solutions/analytics-tracking" className="flex items-start gap-3">
                    <img src="/Specialized Growth Solutions Icons/Analytics and Event Tracking Setup.png" alt="Analytics Tracking" className="w-5 h-5 mt-1 flex-shrink-0 dark:invert" />
                    <div className="flex-1">
                      <h5 className="font-semibold">Analytics and Event Tracking Setup</h5>
                      <p className="text-sm opacity-80">Track what matters, measure what works.</p>
                    </div>
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="flex items-start gap-3 p-6 h-auto text-left justify-start hover:bg-primary hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <Link to="/specialized-growth-solutions/lead-generation" className="flex items-start gap-3">
                    <img src="/Specialized Growth Solutions Icons/Lead Generation & Funnel Strategy.png" alt="Lead Generation" className="w-5 h-5 mt-1 flex-shrink-0 dark:invert" />
                    <div className="flex-1">
                      <h5 className="font-semibold">Lead Generation & Funnel Strategy</h5>
                      <p className="text-sm opacity-80">Build funnels that convert.</p>
                    </div>
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="flex items-start gap-3 p-6 h-auto text-left justify-start hover:bg-primary hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <Link to="/specialized-growth-solutions/brand-architecture" className="flex items-start gap-3">
                    <img src="/Specialized Growth Solutions Icons/Brand Architecture & Strategy.png" alt="Brand Architecture" className="w-5 h-5 mt-1 flex-shrink-0 dark:invert" />
                    <div className="flex-1">
                      <h5 className="font-semibold">Brand Architecture & Strategy</h5>
                      <p className="text-sm opacity-80">Define, differentiate, scale.</p>
                    </div>
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="flex items-start gap-3 p-6 h-auto text-left justify-start hover:bg-primary hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <Link to="/specialized-growth-solutions/content-strategy" className="flex items-start gap-3">
                    <img src="/Specialized Growth Solutions Icons/Content Strategy & Planning.png" alt="Content Strategy" className="w-5 h-5 mt-1 flex-shrink-0 dark:invert" />
                    <div className="flex-1">
                      <h5 className="font-semibold">Content Strategy & Marketing</h5>
                      <p className="text-sm opacity-80">Create content that drives action.</p>
                    </div>
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="flex items-start gap-3 p-6 h-auto text-left justify-start hover:bg-primary hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <Link to="/specialized-growth-solutions/ai-content" className="flex items-start gap-3">
                    <img src="/Specialized Growth Solutions Icons/AI-Accelerated Content Production Pipelines.png" alt="AI Content" className="w-5 h-5 mt-1 flex-shrink-0 dark:invert" />
                    <div className="flex-1">
                      <h5 className="font-semibold">AI-Accelerated Content Production Pipelines</h5>
                      <p className="text-sm opacity-80">Scale content with AI precision.</p>
                    </div>
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="flex items-start gap-3 p-6 h-auto text-left justify-start hover:bg-primary hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <Link to="/specialized-growth-solutions/executive-branding" className="flex items-start gap-3">
                    <img src="/Specialized Growth Solutions Icons/Executive Personal Branding & LinkedIn Marketing.png" alt="Executive Branding" className="w-5 h-5 mt-1 flex-shrink-0 dark:invert" />
                    <div className="flex-1">
                      <h5 className="font-semibold">Executive Personal Branding & LinkedIn Marketing</h5>
                      <p className="text-sm opacity-80">Elevate presence, grow influence.</p>
                    </div>
                  </Link>
                </Button>
              </div>

              <div className="text-center">
              <Button className="font-semibold text-lg mb-4" size="lg" asChild>
                  <a href="/contact">Ready to move faster? Let's talk.</a>
                </Button>
              </div>
            </motion.section>

            {/* Strategic Solutions Section - Slides from RIGHT to LEFT */}
            <motion.section 
              id="strategic-solutions" 
              className="py-4 mb-12 sm:mb-16"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight text-center sm:text-left text-primary">Strategic Solutions</h2>

              <p className="mb-6 text-muted-foreground leading-relaxed">
                You need to improve efficiency, automate intelligently, and ensure operations scale without chaos. If
                you're navigating operational bottlenecks, automation gaps, or complex scaling challenges, our Strategic
                Solutions offer high-ROI tailored strategy and implementations that are built for precision,
                scalability, and efficiency. From workflow orchestration to platform optimization, we help you execute
                at the next level with minimal disruption.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold mb-4">Core Strategic Solutions</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                <Button 
                  variant="outline" 
                  className="flex items-start gap-3 p-6 h-auto text-left justify-start hover:bg-primary hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <Link to="/strategic-solutions/process-automation">
                    <Cog className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold">Process & Workflow Automation</h5>
                      <p className="text-sm opacity-80">Automate execution. Eliminate friction.</p>
                    </div>
                  </Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="flex items-start gap-3 p-6 h-auto text-left justify-start hover:bg-primary hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <Link to="/strategic-solutions/digital-systems-enablement">
                    <Database className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold">Digital Systems Enablement</h5>
                      <p className="text-sm opacity-80">Optimize platforms. Empower teams.</p>
                    </div>
                  </Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="flex items-start gap-3 p-6 h-auto text-left justify-start hover:bg-primary hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <Link to="/strategic-solutions/custom-solution-engineering">
                    <Wrench className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold">Custom Solution Engineering</h5>
                      <p className="text-sm opacity-80">Solve complex. Deliver fast.</p>
                    </div>
                  </Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="flex items-start gap-3 p-6 h-auto text-left justify-start hover:bg-primary hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <Link to="/strategic-solutions/enterprise-evolution-strategic-transformation">
                    <Briefcase className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold">Enterprise Evolution & Strategic Transformation</h5>
                      <p className="text-sm opacity-80">Reshape. Scale. Future-proof.</p>
                    </div>
                  </Link>
                </Button>
              </div>

              <h4 className="text-lg sm:text-xl font-semibold mb-4">Solutions By Function</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
                <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                  <DollarSign className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-foreground">Finance</h5>
                    <p className="text-sm text-muted-foreground">Automate reporting. Accelerate reconciliation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                  <Activity className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-foreground">Operations</h5>
                    <p className="text-sm text-muted-foreground">Unblock execution. Speed up critical workflows.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                  <Shield className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-foreground">Compliance & Governance</h5>
                    <p className="text-sm text-muted-foreground">Reduce risk. Ensure audit-ready control.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                  <Network className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-foreground">Cross-Functional Leadership</h5>
                    <p className="text-sm text-muted-foreground">Align departments. Orchestrate complex delivery.</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button className="font-semibold text-lg mb-4" size="lg" asChild>
                  <a href="/contact">Ready to move faster? Let's talk.</a>
                </Button>
              </div>
            </motion.section>
          </main>
        </div>
      </div>
    </div>
  )
}