import * as React from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import LogoTeal from '/Logo-Teal.png';

interface FooterProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [email, setEmail] = React.useState("");
  const [isSubscribing, setIsSubscribing] = React.useState(false);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert("Thanks for subscribing! We'll be in touch soon.");
      setEmail("");
    } catch (error) {
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubscribing(false);
    }
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Insights', href: '/insights' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const solutions = {
    coreGrowth: [
      { name: 'Performance Marketing & Paid Media', href: '/growth-solutions/performance-marketing' },
      { name: 'Social Media Marketing & Brand Engagement', href: '/growth-solutions/social-media-marketing' },
      { name: 'Email Marketing & Marketing Automation', href: '/growth-solutions/email-marketing' },
      { name: 'Creative Solutions', href: '/growth-solutions/creative-solutions' },
      { name: 'Conversion Rate Optimization (CRO)', href: '/growth-solutions/conversion-optimization' },
      { name: 'SEO & Website Growth', href: '/growth-solutions/seo-website-growth' },
      { name: 'Website Solutions', href: '/growth-solutions/website-solutions' },
    ],
    specializedGrowth: [
      { name: 'Deep Dive Audit & Strategic Insights', href: '/specialized-growth-solutions/audit-insights' },
      { name: 'Analytics and Event Tracking Setup', href: '/specialized-growth-solutions/analytics-tracking' },
      { name: 'Lead Generation & Funnel Strategy', href: '/specialized-growth-solutions/lead-generation' },
      { name: 'Brand Architecture & Strategy', href: '/specialized-growth-solutions/brand-strategy' },
      { name: 'Content Strategy & Planning', href: '/specialized-growth-solutions/content-strategy' },
      { name: 'AI-Accelerated Content Production', href: '/specialized-growth-solutions/ai-content' },
      { name: 'Executive Personal Branding', href: '/specialized-growth-solutions/executive-branding' },
    ],
    coreStrategic: [
      { name: 'Process & Workflow Automation', href: '/strategic-solutions/process-automation' },
      { name: 'Digital Systems Enablement', href: '/strategic-solutions/digital-systems' },
      { name: 'Custom Solution Engineering', href: '/strategic-solutions/custom-engineering' },
      { name: 'Enterprise Evolution & Strategic Transformation', href: '/strategic-solutions/enterprise-transformation' },
    ],
    strategicByFunction: [
      { name: 'Finance', href: '/strategic-solutions/finance' },
      { name: 'Operations', href: '/strategic-solutions/operations' },
      { name: 'Compliance & Governance', href: '/strategic-solutions/compliance' },
      { name: 'Cross-Functional Leadership', href: '/strategic-solutions/leadership' },
    ],
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/perssonify', tooltip: 'Follow us on Facebook' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/perssonify', tooltip: 'Follow us on Twitter' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/perssonify', tooltip: 'Follow us on Instagram' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/perssonify', tooltip: 'Connect with us on LinkedIn' },
  ];

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Newsletter Section with Clickable Logo */}
          <div className="relative md:col-span-2">
            <button 
              onClick={handleLogoClick}
              className="mb-4 cursor-pointer hover:opacity-80 transition-opacity"
              aria-label="Go to homepage"
            >
              <img
                src={LogoTeal}
                alt="Perssonify Logo"
                className="object-contain"
                style={{ 
                  height: '50px', 
                  width: '150px',
                  minHeight: '50px', 
                  minWidth: '150px',
                  maxHeight: '50px',
                  maxWidth: '150px'
                }}
              />
            </button>
            <p className="mb-3 text-xs text-muted-foreground">Empowering businesses with growth and strategic solutions worldwide.</p>
            <p className="mb-6 text-sm text-muted-foreground">
              Join our newsletter for the latest updates and exclusive offers.
            </p>
            <form onSubmit={handleSubscribe} className="relative space-y-4">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-background pr-12 placeholder:text-muted-foreground/50"
                  required
                />
                <Button
                  type="submit"
                  size="sm"
                  className="absolute right-1 top-1 h-7 w-7 rounded-full bg-primary p-0 hover:bg-primary/90"
                  disabled={isSubscribing}
                >
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Subscribe to newsletter</span>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                By subscribing, you agree to our{" "}
                <Link to="/privacy-policy" className="underline hover:text-primary">
                  Privacy Policy
                </Link>
              </p>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              {navigation.map((item) => (
                <Link 
                  key={item.name}
                  to={item.href} 
                  className="block transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Solutions - Grid Layout */}
          <div className="md:col-span-6">
            <h3 className="mb-4 text-lg font-semibold">Our Solutions</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="mb-2 text-sm font-medium text-muted-foreground">Core Growth Solutions</h4>
                <nav className="space-y-1 text-xs">
                  {solutions.coreGrowth.map((item) => (
                    <Link 
                      key={item.name}
                      to={item.href} 
                      className="block transition-colors hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                
                <h4 className="mb-2 mt-4 text-sm font-medium text-muted-foreground">Specialized Growth Solutions</h4>
                <nav className="space-y-1 text-xs">
                  {solutions.specializedGrowth.map((item) => (
                    <Link 
                      key={item.name}
                      to={item.href} 
                      className="block transition-colors hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
              
              <div>
                <h4 className="mb-2 text-sm font-medium text-muted-foreground">Core Strategic Solutions</h4>
                <nav className="space-y-1 text-xs">
                  {solutions.coreStrategic.map((item) => (
                    <Link 
                      key={item.name}
                      to={item.href} 
                      className="block transition-colors hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                
                <h4 className="mb-2 mt-4 text-sm font-medium text-muted-foreground">Solutions By Function</h4>
                <nav className="space-y-1 text-xs">
                  {solutions.strategicByFunction.map((item) => (
                    <Link 
                      key={item.name}
                      to={item.href} 
                      className="block transition-colors hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Social Links and Theme Toggle */}
          <div className="relative md:col-span-2">
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="mb-6 flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <TooltipProvider key={social.name}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a 
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="rounded-full transition-colors hover:bg-primary hover:text-primary-foreground"
                        >
                          <social.icon className="h-4 w-4" />
                          <span className="sr-only">{social.name}</span>
                        </Button>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{social.tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <button 
                onClick={toggleDarkMode}
                className="p-1 hover:bg-muted rounded transition-colors"
                aria-label="Switch to light mode"
              >
              </button>
              <Switch
                checked={isDarkMode}
                setChecked={toggleDarkMode}
              />
              <button 
                onClick={toggleDarkMode}
                className="p-1 hover:bg-muted rounded transition-colors"
                aria-label="Switch to dark mode"
              >
              </button>
              <Label htmlFor="footer-dark-mode" className="sr-only">
                Toggle dark mode
              </Label>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2024 Perssonify. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <Link to="/privacy-policy" className="transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="transition-colors hover:text-primary">
              Terms of Service
            </Link>
            <Link to="/cookies" className="transition-colors hover:text-primary">
              Cookie Settings
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
