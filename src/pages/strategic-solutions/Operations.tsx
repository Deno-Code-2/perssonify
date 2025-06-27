
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings, CheckCircle, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ThemeBreadcrumb from '@/components/ui/theme-breadcrumb';

const Operations: React.FC = () => {
  const improvements = [
    'Mapping multi-step operational workflows to identify friction, escalation points, and failure risks',
    'Orchestrating cross-functional processes to unify execution across sales, delivery, finance, and support',
    'Automating task handoffs and SLA tracking to ensure accountability and transparency',
    'Implementing performance dashboards for real-time visibility and data-driven adjustments'
  ];

  const whenToApply = [
    'When processes drag on for weeks due to manual steps and slow escalations',
    'When lack of transparency leads to missed deadlines or misaligned teams',
    'When operations rely on email, spreadsheets, or ad hoc tools to coordinate',
    'When growing teams outpace current operational systems'
  ];

  const useCases = [
    'Multi-step task routing with escalations',
    'Operational SLA tracking',
    'Automated handoffs between teams',
    'Real-time dashboards',
    'Audit-ready activity logs'
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
              <Settings className="w-4 h-4 mr-2" />
              Operations
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Operations
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Eliminating delays, inefficiencies, and handoff gaps in operational execution.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Operations teams often face challenges tied to fragmented systems, manual workflows, and bottlenecks that reduce throughput and increase costs. We streamline critical processes across departments to create smoother execution, faster response times, and more predictable outcomes.
            </p>
          </motion.div>
        </motion.section>

        {/* How We Improve Section */}
        <section className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-8">How We Improve Operational Functions</h2>
            <div className="space-y-4">
              {improvements.map((improvement, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{improvement}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* When to Apply Section */}
        <section className="py-16 bg-muted/30 rounded-2xl">
          <div className="max-w-4xl mx-auto px-8">
            <h3 className="text-3xl font-bold text-foreground mb-8">When to Apply This Solution</h3>
            <div className="space-y-4">
              {whenToApply.map((item, index) => (
                <div key={index} className="flex items-start">
                  <Zap className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-foreground mb-8">Use Cases</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {useCases.map((useCase, index) => (
                <Card key={index} className="p-4">
                  <p className="text-foreground font-medium">{useCase}</p>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Streamline Your Operations?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Let's eliminate delays and optimize your operational execution.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.section>
      </div>
    </div>
  );
};

export default Operations;
