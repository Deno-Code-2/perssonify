import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BarChart3, Target, Eye, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const AuditInsights: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const deliverables = [
    {
      icon: BarChart3,
      title: "Detailed Performance Review",
      description: "A full evaluation of digital marketing, social engagement, paid media effectiveness, brand positioning, and audience impact"
    },
    {
      icon: Target,
      title: "Strategic Improvement Roadmap",
      description: "Actionable recommendations tailored for in-house execution or used to build a custom engagement plan with Perssonify"
    },
    {
      icon: Eye,
      title: "Competitive Benchmarking",
      description: "Industry and peer analysis to identify performance gaps, strategic strengths, and new opportunities"
    },
    {
      icon: Users,
      title: "Expert Validation & Fresh Perspective",
      description: "Seasoned insight that ensures alignment with best practices and future-ready strategy"
    }
  ];

  const auditComponents = [
    "Social Media – Performance, engagement, and audience analysis across platforms",
    "Paid Media – Ad spend efficiency, conversion tracking, and campaign performance review",
    "Brand Messaging – Evaluating consistency, positioning, and competitive differentiation",
    "Content Performance – Effectiveness of content strategy, engagement, and distribution",
    "SEO – Website visibility, keyword rankings, and technical site health assessment",
    "Analytics Configuration & Data Validation – Ensuring proper event tracking, conversion measurement, and data accuracy across platforms"
  ];

  const pricingTiers = [
    {
      title: "Single Component Audit",
      price: "$2,000",
      description: "Focus on one specific area"
    },
    {
      title: "2-3 Component Bundle",
      price: "$1,750",
      description: "Per component pricing"
    },
    {
      title: "4-5 Component Bundle",
      price: "$1,500",
      description: "Per component pricing"
    },
    {
      title: "Comprehensive Audit",
      price: "$5,000",
      description: "Flat rate for all components"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="pt-24 pb-4">
        <div className="container">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/specialized-growth-solutions">Specialized Growth Solutions</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Deep Dive Audit & Strategic Insights</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Deep Dive Audit & Strategic Insights
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Uncover Opportunities, Validate Strategies, and Optimize for Growth
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Making informed decisions requires deep clarity. Perssonify's Deep Dive Audit delivers a comprehensive, data-driven assessment of digital performance across marketing, engagement, and brand activity. It equips businesses with the insights needed to validate what's working, refine what's not, and uncover new opportunities for growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Deliverables Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Key Deliverables
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive analysis that provides actionable insights for your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {deliverables.map((deliverable, index) => (
              <motion.div
                key={deliverable.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                      <deliverable.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {deliverable.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {deliverable.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Components Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Audit Component Options
            </h2>
          </motion.div>

          <div className="space-y-4">
            {auditComponents.map((component, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-4 rounded-lg bg-card border"
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground">{component}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Flexible Engagement Structure
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer a modular audit approach, allowing businesses to focus on specific areas of interest while benefiting from cost-effective bundling.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className={`h-full text-center ${index === 3 ? 'border-primary bg-primary/5' : 'border-border'}`}>
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-foreground">
                      {tier.title}
                    </CardTitle>
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-primary">{tier.price}</span>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {tier.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" variant={index === 3 ? 'default' : 'outline'} asChild>
                      <Link to="/contact">
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-4">
              <strong>Cost Offset for Future Engagement:</strong> Businesses that choose to work with Perssonify after an audit can apply 50% of the audit fee towards their engagement package.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Expected Outcome
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Clear priorities, stronger positioning, and a smarter path forward.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">
                Start Your Audit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AuditInsights;
