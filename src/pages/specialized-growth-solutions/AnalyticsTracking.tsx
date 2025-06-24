
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BarChart3, Target, Eye, Settings, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AnalyticsTracking: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const deliverables = [
    {
      icon: BarChart3,
      title: "Comprehensive Tracking Implementation",
      description: "Google Analytics, Meta Pixel, LinkedIn Insights, and other tracking tools configured for precise data capture."
    },
    {
      icon: Target,
      title: "Event Tracking & Conversion Setup",
      description: "Defining key business actions (purchases, sign-ups, leads, engagements) and ensuring they are accurately recorded across platforms."
    },
    {
      icon: Eye,
      title: "Custom Dashboard Creation",
      description: "Real-time performance monitoring through Google Looker Studio, ad platform dashboards, and custom reporting tools."
    },
    {
      icon: Settings,
      title: "Tag Management & Data Validation",
      description: "Implementing and auditing Google Tag Manager and other tracking solutions for accurate event firing."
    },
    {
      icon: CheckCircle,
      title: "Cross-Platform Attribution Setup",
      description: "Configuring multi-touch attribution models to understand the impact of various marketing channels."
    }
  ];

  const pricingTiers = [
    {
      title: "Simple Analytics & Event Tracking Setup",
      price: "$1,500",
      type: "One-Time",
      description: "Basic tracking configuration for key marketing platforms (Google Analytics, Meta Pixel, LinkedIn Insights, Google Tag Manager). Covers page views, basic event tracking (e.g., form submissions, button clicks), and foundational reporting setup.",
      features: [
        "Google Analytics 4 setup",
        "Meta Pixel implementation",
        "LinkedIn Insights configuration",
        "Basic event tracking",
        "Google Tag Manager setup",
        "Foundational reporting"
      ]
    },
    {
      title: "Comprehensive Analytics & Event Tracking Setup",
      price: "$2,500 - $5,000",
      type: "Scope Based",
      description: "Advanced tracking for complex marketing funnels, including multi-touch attribution, e-commerce tracking, advanced event firing (scroll depth, video engagement, checkout behavior), Google Tag Manager optimization, and custom dashboard creation for reporting.",
      features: [
        "Advanced funnel tracking",
        "Multi-touch attribution",
        "E-commerce tracking",
        "Advanced event firing",
        "Custom dashboard creation",
        "GTM optimization",
        "Cross-platform integration"
      ]
    },
    {
      title: "Large Scale / Custom Analytics & Event Tracking Setup",
      price: "Custom ($5,000+)",
      type: "Audit Required",
      description: "Customized tracking solutions tailored for enterprise needs, multi-platform environments, or highly customized requirements. Includes a full analytics audit ($500 fee), which can be applied toward implementation costs if Perssonify handles the setup.",
      features: [
        "Enterprise-level tracking",
        "Custom tracking solutions",
        "Multi-platform environments",
        "Full analytics audit included",
        "Dedicated implementation team",
        "Ongoing support options"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Analytics & Event Tracking Setup
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Unlock Data-Driven Decision Making & Maximize Performance Insights
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Our Analytics & Event Tracking Setup solution ensures that every interaction, engagement, and conversion is accurately measured—providing the insights needed to refine marketing strategies, allocate budgets effectively, and maximize ROI.
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
              Comprehensive tracking solutions that provide actionable insights for your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliverables.map((deliverable, index) => (
              <motion.div
                key={deliverable.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full bg-gradient-to-br from-primary/10 to-primary/5 border-0 custom-shadow">
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

      {/* Flexible Engagement Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Flexible Engagement Structure
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our Analytics & Event Tracking Setup can be delivered as a standalone service or as part of a broader engagement. It's built for businesses that need to establish, improve, or validate their tracking infrastructure before scaling campaigns or making critical marketing decisions.
            </p>
          </motion.div>
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
              Pricing & Packages
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the package that best fits your tracking needs and business scale
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={index === 1 ? 'relative' : ''}
              >
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <Card className={`h-full ${index === 1 ? 'border-primary shadow-xl scale-105' : 'border-border'}`}>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {tier.title}
                    </CardTitle>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-primary">{tier.price}</span>
                      <span className="text-muted-foreground ml-2">{tier.type}</span>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {tier.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6" variant={index === 1 ? 'default' : 'outline'} asChild>
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
              Final pricing is determined based on scope assessment. Custom pricing is available for specialized needs.
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
              A reliable, insight-rich tracking foundation that helps businesses measure what matters, improve performance, and scale with confidence.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">
                Start Your Analytics Setup
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AnalyticsTracking;
