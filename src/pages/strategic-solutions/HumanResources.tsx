
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, CheckCircle, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ThemeBreadcrumb from '@/components/ui/theme-breadcrumb';

const HumanResources: React.FC = () => {
  const improvements = [
    'Digitizing onboarding and offboarding workflows to eliminate manual steps and reduce time-to-productivity',
    'Automating compliance tracking for policies, access revocation, certifications, and regulatory acknowledgments',
    'Integrating HR systems to ensure data consistency across recruitment, payroll, and performance tools',
    'Enabling HR self-service and knowledge portals to reduce internal ticket volume and increase employee satisfaction'
  ];

  const whenToApply = [
    'When manual onboarding processes delay employee readiness',
    'When compliance tasks are time-consuming or prone to human error',
    'When HR platforms aren\'t integrated, leading to duplication or data loss',
    'When HR is focused on execution over enablement and strategy'
  ];

  const useCases = [
    'New hire provisioning',
    'Offboarding checklists with access revocation',
    'Digital policy acknowledgments',
    'Compliance tracking automation',
    'Internal HR request portals',
    'Integrated people analytics'
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
              <Users className="w-4 h-4 mr-2" />
              Human Resources
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Human Resources
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Streamlining HR processes to reduce friction, improve compliance, and elevate the employee experience.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Human Resources teams often face high volumes of administrative work and compliance tasks that slow down onboarding, create inefficiencies, and reduce team agility. We help HR functions become more strategic by automating repetitive workflows and aligning systems around employee needs.
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
            <h2 className="text-3xl font-bold text-foreground mb-8">How We Improve Human Resources Functions</h2>
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
            Ready to Transform Your HR Operations?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Let's streamline your human resources processes and improve employee experience.
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

export default HumanResources;
