
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, TrendingUp, Users, Settings, CheckCircle, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ThemeBreadcrumb from '@/components/ui/theme-breadcrumb';

const EnterpriseEvolution: React.FC = () => {
  const services = [
    {
      icon: Target,
      title: 'Business Model Reengineering',
      description: 'Help leadership reshape how value is created, delivered, and captured across the business.'
    },
    {
      icon: Settings,
      title: 'Scalable Operational Frameworks',
      description: 'Design operating structures that increase capacity without increasing complexity.'
    },
    {
      icon: TrendingUp,
      title: 'Strategic Planning & Roadmapping',
      description: 'Guide long-term decisions on markets, teams, investments, and digital transformation.'
    },
    {
      icon: Users,
      title: 'Cross-Functional Optimization',
      description: 'Break down silos, streamline collaboration, and align departments on shared outcomes.'
    },
    {
      icon: Zap,
      title: 'Transformation Execution',
      description: 'Support implementation of change initiatives with expert-led guidance, resource coordination, and measurable milestones.'
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
              <Target className="w-4 h-4 mr-2" />
              Strategic Solutions
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Enterprise Evolution & Strategic Transformation
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Redefining Models, Reshaping Operations, and Scaling for Long-Term Success
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
              As businesses grow, their operating models, structures, and strategies can become bottlenecks. Legacy systems, outdated workflows, or siloed teams can stall progress and limit adaptability. Enterprise Evolution & Strategic Transformation is Perssonify's approach to helping organizations redesign how they operate to meet changing demands, align with future goals, and unlock scalable, sustainable growth.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This isn't about technology for technology's sake—it's about enhancing business operations to adapt, evolve, and thrive.
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
                'When leadership knows change is needed but clarity is lacking on where to begin or what to prioritize.',
                'When growth is limited by operational constraints, outdated structures, or internal friction.',
                'When organizations are entering a new phase—scaling, restructuring, or integrating after M&A activity.',
                'When new revenue streams or innovation goals require a new go-to-market approach or cross-functional realignment.'
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
                'Businesses that fail to evolve become slow, reactive, and strategically irrelevant.',
                'Clear transformation strategies ensure that change efforts are aligned, resourced, and measurable.',
                'Perssonify helps reduce the risk of transformation by combining big-picture thinking with execution-focused support.',
                'We ensure organizations don\'t just plan to change—they actually move forward with confidence and clarity.'
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
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Let's reshape your operations and scale for long-term success.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">
              Start Your Transformation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.section>
      </div>
    </div>
  );
};

export default EnterpriseEvolution;
