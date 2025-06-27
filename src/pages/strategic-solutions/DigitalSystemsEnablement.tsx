
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Database, Settings, Zap, BarChart, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ThemeBreadcrumb from '@/components/ui/theme-breadcrumb';

const DigitalSystemsEnablement: React.FC = () => {
  const services = [
    {
      icon: BarChart,
      title: 'Platform Performance Audit',
      description: 'Analyze core systems (e.g., CRM, ERP, PM tools) to identify inefficiencies, friction points, and underutilized capabilities.'
    },
    {
      icon: Users,
      title: 'User Experience & Enablement Strategy',
      description: 'Optimize interface layouts, workflows, and data access to reduce effort and increase adoption.'
    },
    {
      icon: Zap,
      title: 'AI Copilot & Assistant Integration',
      description: 'Embed AI into daily workflows to enhance task support, predictive analytics, and decision augmentation.'
    },
    {
      icon: Database,
      title: 'System Integration & Data Flow Mapping',
      description: 'Connect platforms to ensure seamless data movement and reduce manual work across the tech stack.'
    },
    {
      icon: Settings,
      title: 'Custom Dashboards & Reporting Layers',
      description: 'Build real-time visibility tools that centralize performance insights and operational health indicators.'
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <ThemeBreadcrumb />
        
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              <Database className="w-4 h-4 mr-2" />
              Strategic Solutions
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Digital Systems Enablement
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Enhancing Platform Strategy & Workforce Effectiveness with Intelligent Systems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link to="/strategic-solutions">
                  View All Strategic Solutions
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.section>

        {/* Description Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Digital Systems Enablement focuses on strengthening the systems and tools that power daily operations—ensuring they're optimized, integrated, and designed to support scale. This includes improving the usability and impact of platforms like CRMs and ERPs, while layering in AI-powered tools, digital dashboards, and workflow enhancements that elevate decision-making and execution.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Perssonify, we help businesses unlock more value from their existing platforms, bridge gaps between disconnected systems, and enable teams to operate with greater precision, visibility, and speed.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Approach
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 bg-card custom-shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* When to Apply Section */}
        <section className="py-16 bg-muted/30 rounded-2xl">
          <div className="max-w-4xl mx-auto px-8">
            <h3 className="text-3xl font-bold text-foreground mb-8">When to Apply</h3>
            <div className="space-y-4">
              {[
                'When critical systems like CRM or ERP are underutilized, fragmented, or creating workflow friction.',
                'When teams rely on manual workarounds due to limitations in existing tools.',
                'When leadership lacks clear visibility into real-time operational performance.',
                'When introducing AI-powered tooling or user-facing enhancements to streamline day-to-day activity.'
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why It Matters Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-8">Why It Matters</h3>
            <div className="space-y-4">
              {[
                'System friction slows execution and forces teams to rely on disconnected tools or shadow processes.',
                'Optimizing the digital stack improves operational speed, workforce efficiency, and platform ROI.',
                'AI copilots and enablement tools empower teams to make better decisions and reduce errors at the point of action.',
                'Integrated dashboards surface the right data at the right time, supporting smarter, faster decisions across the organization.'
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Enable Your Digital Systems?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Let's optimize your platforms and empower your teams with intelligent systems.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">
              Start Your Digital Transformation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.section>
      </div>
    </div>
  );
};

export default DigitalSystemsEnablement;
