
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, DollarSign, CheckCircle, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ThemeBreadcrumb from '@/components/ui/theme-breadcrumb';

const FinanceOperations: React.FC = () => {
  const improvements = [
    'Automating financial workflows for invoice ingestion, approvals, expense reporting, and reconciliations',
    'Standardizing and validating data across systems for more accurate forecasting and reporting',
    'Implementing intelligent exception handling to reduce delays and manual review',
    'Designing scalable finance operations models that can support rapid growth or acquisition events'
  ];

  const whenToApply = [
    'When financial close cycles are too long and unpredictable',
    'When the team relies on spreadsheets or manual processes for reconciliation',
    'When leadership lacks real-time visibility into performance metrics or cash flow',
    'When finance operations can\'t scale with business growth or increased complexity'
  ];

  const useCases = [
    'Invoice ingestion and coding',
    'Automated approvals and validations',
    'Monthly reconciliation automation',
    'Audit-ready reporting',
    'Finance data lake integration',
    'ERP automation and enhancements'
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
              <DollarSign className="w-4 h-4 mr-2" />
              Finance Operations
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Finance Operations
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Unlocking efficiency in financial processes through automation, integration, and strategic optimization.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Finance teams are often overwhelmed by repetitive tasks, fragmented systems, and manual reconciliations that drain time and increase the risk of error. We work with finance leaders to streamline end-to-end processes, enabling faster closes, real-time visibility, and confident decision-making.
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
            <h2 className="text-3xl font-bold text-foreground mb-8">How We Improve Finance Functions</h2>
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
            Ready to Optimize Your Finance Operations?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Let's streamline your financial processes and unlock efficiency.
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

export default FinanceOperations;
