
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Cog, Target, Users, Zap, CheckCircle, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ThemeBreadcrumb from '@/components/ui/theme-breadcrumb';

const CustomSolutionEngineering: React.FC = () => {
  const services = [
    {
      icon: Target,
      title: 'Challenge Mapping & Root Cause Discovery',
      description: 'Rapid diagnostics to identify the core problem, associated risks, and potential solution pathways.'
    },
    {
      icon: Settings,
      title: 'Solution Architecture & Prioritization',
      description: 'Design of a custom solution blueprint that balances speed, feasibility, and strategic value.'
    },
    {
      icon: Users,
      title: 'Expert Collaboration',
      description: 'Matching businesses with trusted solution providers inside an efficient workflow that brings the right capabilities to the table.'
    },
    {
      icon: Zap,
      title: 'Pilot, Validate, and Iterate',
      description: 'Build light MVPs or prototypes to validate direction and reduce risk before full-scale deployment.'
    },
    {
      icon: Cog,
      title: 'End-to-End Implementation Support',
      description: 'Manage the full execution cycle—from initial scoping and build to launch, measurement, and iteration.'
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
              <Cog className="w-4 h-4 mr-2" />
              Strategic Solutions
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Custom Solution Engineering
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Solving High-Stakes, Complex Business Challenges with Precision-Built Solutions
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
              Some challenges don't fit neatly into categories—they're high-impact, time-sensitive, and often tied to urgent operational risks, untapped growth opportunities, or structural inefficiencies that can't be ignored.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Custom Solution Engineering is Perssonify's process for rapidly defining and delivering tailored solutions built from the ground up. We work closely with stakeholders to pinpoint the root of the challenge, design the right approach, validate the solution with domain experts, and drive implementation with speed, accuracy, and accountability.
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
                'When an obstacle is too complex, urgent, or unique for off-the-shelf tools or traditional approaches.',
                'When existing systems or teams are struggling to respond to a critical need or growth opportunity.',
                'When leadership has a vision or initiative but lacks the in-house resources or roadmap to bring it to life.',
                'When speed, precision, and ROI are all non-negotiables.'
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
                'Unsolved challenges compound over time—creating inefficiencies, missed opportunities, and strategic risk.',
                'Custom-built solutions ensure organizations aren\'t just reacting—they\'re engineering competitive advantage.',
                'Without a structured pathway, high-value ideas often stall due to internal capacity or execution gaps.',
                'Having the right partner and solution architecture dramatically increases speed-to-impact while reducing failure risk.'
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
            Ready for Custom Solutions?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Let's engineer precision-built solutions for your unique challenges.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">
              Start Your Custom Solution
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.section>
      </div>
    </div>
  );
};

export default CustomSolutionEngineering;
