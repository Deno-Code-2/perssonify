
"use client"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function TimelineSection() {
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
          {/* Table of Contents - Hidden on mobile, sticky on desktop */}
          <nav className="hidden lg:block lg:sticky lg:top-24 lg:self-start p-4 lg:w-64">
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={cn(
                      "text-xl font-bold transition-colors pl-4 border-l-4 w-full text-left py-2",
                      activeSection === section.id
                        ? "text-primary border-primary text-2xl"
                        : "text-muted-foreground hover:text-foreground border-transparent text-xl"
                    )}
                  >
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Main Content */}
          <main className="flex-1 max-w-none">
            {/* Growth Solutions Section */}
            <section id="growth-solutions" className="py-4 mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-primary">Growth Solutions</h2>

              <h3 className="text-xl sm:text-2xl font-semibold mb-4">High-Performance Marketing</h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                You need more customers, more engagement, and more momentum. If your priority is to attract the right
                audience, convert consistently, and expand your market reach, our Growth Solutions are built for you. We
                deliver high-performance marketing strategy and execution that engineers demand, amplifies brand value,
                and accelerates customer acquisition.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold mb-4">Core Growth Solutions</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                {[
                  {
                    link: "/growth-solutions/performance-marketing",
                    icon: "/Growth Solutions Icons/PerformanceMarketing&PaidMedia.png",
                    title: "Performance Marketing & Paid Media",
                    desc: "High-ROI ads that convert."
                  },
                  {
                    link: "/growth-solutions/social-media-marketing",
                    icon: "/Growth Solutions Icons/Social Media Marketing & Brand Engagement.png",
                    title: "Social Media Marketing & Brand Engagement",
                    desc: "Build audience, spark action."
                  },
                  {
                    link: "/growth-solutions/email-marketing",
                    icon: "/Growth Solutions Icons/Email Marketing & Marketing Automation.png",
                    title: "Email Marketing & Marketing Automation",
                    desc: "Automate nurture, drive loyalty."
                  },
                  {
                    link: "/growth-solutions/creative-solutions",
                    icon: "/Growth Solutions Icons/Creative Solutions.png",
                    title: "Creative Solutions",
                    desc: "Visuals that get results."
                  },
                  {
                    link: "/growth-solutions/conversion-optimization",
                    icon: "/Growth Solutions Icons/Conversion Rate Optimization.png",
                    title: "Conversion Rate Optimization (CRO)",
                    desc: "Test. Refine. Convert more."
                  },
                  {
                    link: "/growth-solutions/seo-website-growth",
                    icon: "/Growth Solutions Icons/Search Engine Optimization (SEO) & Website Growth.png",
                    title: "Search Engine Optimization (SEO) & Website Growth",
                    desc: "Rank higher. Grow faster."
                  },
                  {
                    link: "/growth-solutions/website-solutions",
                    icon: "/Growth Solutions Icons/Website Solutions.png",
                    title: "Website Solutions",
                    desc: "Seamless, scalable, conversion-ready."
                  }
                ].map((item, index) => (
                  <Button 
                    key={index}
                    variant="outline" 
                    className="flex items-start gap-4 p-4 h-auto text-left justify-start hover:bg-primary hover:text-primary-foreground transition-colors min-h-[80px]"
                    asChild
                  >
                    <Link to={item.link} className="flex items-start gap-4 w-full">
                      <img 
                        src={item.icon} 
                        alt={item.title} 
                        className="w-8 h-8 mt-1 flex-shrink-0 dark:invert object-contain" 
                      />
                      <div className="flex-1 min-w-0">
                        <h5 className="font-semibold text-sm mb-1 line-clamp-2">{item.title}</h5>
                        <p className="text-xs opacity-80 line-clamp-2">{item.desc}</p>
                      </div>
                    </Link>
                  </Button>
                ))}
              </div>

              
              <h4 className="text-lg sm:text-xl font-semibold mb-4">Specialized Growth Solutions</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
                {[
                  {
                    link: "/specialized-growth-solutions/audit-insights",
                    icon: "/Specialized Growth Solutions Icons/Deep Dive Audit & Strategic Insights.png",
                    title: "Deep Dive Audit & Strategic Insights",
                    desc: "Clarity through expert analysis."
                  },
                  {
                    link: "/specialized-growth-solutions/analytics-tracking",
                    icon: "/Specialized Growth Solutions Icons/Analytics and Event Tracking Setup.png",
                    title: "Analytics and Event Tracking Setup",
                    desc: "Track what matters, measure what works."
                  },
                  {
                    link: "/specialized-growth-solutions/lead-generation",
                    icon: "/Specialized Growth Solutions Icons/Lead Generation & Funnel Strategy.png",
                    title: "Lead Generation & Funnel Strategy",
                    desc: "Build funnels that convert."
                  },
                  {
                    link: "/specialized-growth-solutions/brand-architecture",
                    icon: "/Specialized Growth Solutions Icons/Brand Architecture & Strategy.png",
                    title: "Brand Architecture & Strategy",
                    desc: "Define, differentiate, scale."
                  },
                  {
                    link: "/specialized-growth-solutions/content-strategy",
                    icon: "/Specialized Growth Solutions Icons/Content Strategy & Planning.png",
                    title: "Content Strategy & Marketing",
                    desc: "Create content that drives action."
                  },
                  {
                    link: "/specialized-growth-solutions/ai-content",
                    icon: "/Specialized Growth Solutions Icons/AI-Accelerated Content Production Pipelines.png",
                    title: "AI-Accelerated Content Production Pipelines",
                    desc: "Scale content with AI precision."
                  },
                  {
                    link: "/specialized-growth-solutions/executive-branding",
                    icon: "/Specialized Growth Solutions Icons/Executive Personal Branding & LinkedIn Marketing.png",
                    title: "Executive Personal Branding & LinkedIn Marketing",
                    desc: "Elevate presence, grow influence."
                  }
                ].map((item, index) => (
                  <Button 
                    key={index}
                    variant="outline" 
                    className="flex items-start gap-4 p-4 h-auto text-left justify-start hover:bg-primary hover:text-primary-foreground transition-colors min-h-[80px]"
                    asChild
                  >
                    <Link to={item.link} className="flex items-start gap-4 w-full">
                      <img 
                        src={item.icon} 
                        alt={item.title} 
                        className="w-8 h-8 mt-1 flex-shrink-0 dark:invert object-contain" 
                      />
                      <div className="flex-1 min-w-0">
                        <h5 className="font-semibold text-sm mb-1 line-clamp-2">{item.title}</h5>
                        <p className="text-xs opacity-80 line-clamp-2">{item.desc}</p>
                      </div>
                    </Link>
                  </Button>
                ))}
              </div>

              <div className="text-center">
              <Button className="font-semibold text-lg mb-4" size="lg" asChild>
                  <a href="/contact">Ready to move faster? Let's talk.</a>
                </Button>
              </div>
            </section>

            {/* Strategic Solutions Section */}
            <section id="strategic-solutions" className="py-4 mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-primary">Strategic Solutions</h2>

              <p className="mb-6 text-muted-foreground leading-relaxed">
                You need to improve efficiency, automate intelligently, and ensure operations scale without chaos. If
                you're navigating operational bottlenecks, automation gaps, or complex scaling challenges, our Strategic
                Solutions offer high-ROI tailored strategy and implementations that are built for precision,
                scalability, and efficiency. From workflow orchestration to platform optimization, we help you execute
                at the next level with minimal disruption.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold mb-4">Core Strategic Solutions</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                {[
                  {
                    link: "/strategic-solutions/process-automation",
                    icon: "/Strategic Solutions Icons/Process & Workflow Automation.png",
                    title: "Process & Workflow Automation",
                    desc: "Automate execution. Eliminate friction."
                  },
                  {
                    link: "/strategic-solutions/digital-systems-enablement",
                    icon: "/Strategic Solutions Icons/Digital Systems Enablement.png",
                    title: "Digital Systems Enablement",
                    desc: "Optimize platforms. Empower teams."
                  },
                  {
                    link: "/strategic-solutions/custom-solution-engineering",
                    icon: "/Strategic Solutions Icons/Custom Solution Engineering.png",
                    title: "Custom Solution Engineering",
                    desc: "Solve complex. Deliver fast."
                  },
                  {
                    link: "/strategic-solutions/enterprise-evolution-strategic-transformation",
                    icon: "/Strategic Solutions Icons/Enterprise Evolution & Strategic Transformation.png",
                    title: "Enterprise Evolution & Strategic Transformation",
                    desc: "Reshape. Scale. Future-proof."
                  }
                ].map((item, index) => (
                  <Button 
                    key={index}
                    variant="outline" 
                    className="flex items-start gap-4 p-4 h-auto text-left justify-start hover:bg-primary hover:text-primary-foreground transition-colors min-h-[80px]"
                    asChild
                  >
                    <Link to={item.link} className="flex items-start gap-4 w-full">
                      <img 
                        src={item.icon} 
                        alt={item.title} 
                        className="w-8 h-8 mt-1 flex-shrink-0 dark:invert object-contain" 
                      />
                      <div className="flex-1 min-w-0">
                        <h5 className="font-semibold text-sm mb-1 line-clamp-2">{item.title}</h5>
                        <p className="text-xs opacity-80 line-clamp-2">{item.desc}</p>
                      </div>
                    </Link>
                  </Button>
                ))}
              </div>

              <h4 className="text-lg sm:text-xl font-semibold mb-4">Solutions By Function</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
                {[
                  { title: "Finance", desc: "Automate reporting. Accelerate reconciliation." },
                  { title: "Operations", desc: "Unblock execution. Speed up critical workflows." },
                  { title: "Compliance & Governance", desc: "Reduce risk. Ensure audit-ready control." },
                  { title: "Cross-Functional Leadership", desc: "Align departments. Orchestrate complex delivery." }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg border bg-card min-h-[80px]">
                    <div className="w-8 h-8 mt-1 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="w-4 h-4 bg-primary rounded-sm"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="font-semibold text-foreground text-sm mb-1">{item.title}</h5>
                      <p className="text-xs text-muted-foreground line-clamp-2">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button className="font-semibold text-lg mb-4" size="lg" asChild>
                  <a href="/contact">Ready to move faster? Let's talk.</a>
                </Button>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}
