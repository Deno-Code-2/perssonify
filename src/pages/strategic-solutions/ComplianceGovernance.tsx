
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, CheckCircle, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ThemeBreadcrumb from '@/components/ui/theme-breadcrumb';

const ComplianceGovernance: React.FC = () => {
  const improvements = [
    'Digitizing audit trails and approval workflows to ensure traceability and control',
    'Automating policy enforcement checks for consistent application across the organization',
    'Integrating documentation processes into daily operations for seamless compliance readiness',
    'Designing systems for governance alignment that reduce human error and audit risk'
  ];

  const whenToApply = [
    'When compliance processes depend on email chains, spreadsheets, or untracked approvals',
    'When the cost of audits or regulatory delays starts to climb',
    'When risk exposure increases due to inconsistent enforcement of policies',
    'When leadership needs greater visibility into compliance posture and controls'
  ];

  const useCases = [
    'Control tracking and evidence capture',
    'Automated policy enforcement checks',
    'Sample gathering and packaging for audits',
    'Compliance workflows with digital traceability'
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
              <Shield className="w-4 h-4 mr-2" />
              Compliance & Governance
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Compliance & Governance
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Reducing regulatory burden and risk exposure with streamlined, traceable processes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Compliance-heavy environments demand precision, documentation, and control—yet many still rely on scattered tools and manual oversight. We help businesses implement systems that simplify regulatory workflows, improve accountability, and reduce the risk of non-compliance.
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
            <h2 className="text-3xl font-bold text-foreground mb-8">How We Improve Compliance & Governance Functions</h2>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            Ready to Strengthen Your Compliance?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Let's reduce regulatory burden and improve your compliance posture.
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

export default ComplianceGovernance;
