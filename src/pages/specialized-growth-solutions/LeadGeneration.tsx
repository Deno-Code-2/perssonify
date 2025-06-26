import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Users, TrendingUp, CheckCircle, ArrowRight, Funnel, DollarSign, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { WavyBackground } from '@/components/ui/wavy-background';
import { motion } from 'framer-motion';

const LeadGeneration: React.FC = () => {
  const keyDeliverables = [
    {
      icon: Funnel,
      title: 'Funnel Mapping & Optimization',
      description: 'Structuring multi-step funnels to reduce friction, improve flow, and increase conversion efficiency.'
    },
    {
      icon: Target,
      title: 'Content & Offer Alignment',
      description: 'Tailoring messaging, incentives, and calls to action for each funnel stage to improve engagement and guide progression.'
    },
    {
      icon: Users,
      title: 'Audience Segmentation & Lead Qualification',
      description: 'Defining lead types, scoring mechanisms, and targeting criteria to maximize quality and relevance.'
    },
    {
      icon: DollarSign,
      title: 'E-Commerce & Checkout Strategy',
      description: 'Optimizing checkout processes, improving cart recovery, and driving repeat purchases through conversion-focused tactics.'
    },
    {
      icon: BarChart3,
      title: 'Reporting Framework & Attribution Support',
      description: 'Establishing performance dashboards and helping connect funnel activities to bottom-line outcomes.'
    }
  ];

  const pricingTiers = [
    {
      name: 'Funnel Essentials',
      price: '$1,500',
      description: 'Funnel mapping, basic offer alignment, and lead qualification setup.',
      features: [
        'Basic funnel mapping',
        'Lead qualification setup',
        'Simple offer alignment',
        'Performance tracking basics'
      ]
    },
    {
      name: 'Optimized Funnel Strategy',
      price: '$2,500 - $5,000',
      description: 'Full-funnel architecture, audience segmentation, multi-stage offer strategy, and checkout refinement.',
      features: [
        'Complete funnel architecture',
        'Advanced audience segmentation',
        'Multi-stage offer strategy',
        'Checkout optimization',
        'Performance analytics'
      ]
    },
    {
      name: 'Advanced Funnel & Revenue Strategy',
      price: 'Custom ($5,000+)',
      description: 'All above, plus attribution support, ongoing testing roadmap, and revenue-focused optimization.',
      features: [
        'Everything in Optimized',
        'Attribution modeling',
        'Testing roadmap',
        'Revenue optimization',
        'Ongoing support'
      ]
    }
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <WavyBackground className="py-8 md:py-12 mt-16 md:mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6">
              Lead Generation & Funnel Strategy
            </h1>
            <p className="text-xl md:text-2xl text-black/80 dark:text-white/80 mb-8 leading-relaxed max-w-4xl mx-auto">
              Designing Full-Funnel Journeys That Attract, Nurture, and Convert
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/specialized-growth-solutions">Back to Specialized Solutions</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </WavyBackground>

      {/* Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              A strong funnel strategy connects demand generation with reliable outcomes. Perssonify's Lead Generation & Funnel Strategy solution helps businesses design and implement full-funnel systems that attract high-quality leads, guide them through key decision stages, and convert them with consistency. We break down the funnel into manageable, high-impact stages—audience targeting, messaging alignment, offer sequencing, and checkout optimization—ensuring each part is built for consistency, engagement, and conversion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Deliverables */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Key Deliverables
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyDeliverables.map((deliverable, index) => (
              <motion.div
                key={deliverable.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
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

      {/* Pricing */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
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
              Our Lead Generation & Funnel Strategy service can be delivered as a standalone engagement or integrated into a broader growth initiative. Each tier is designed to match your current funnel maturity and strategic needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-foreground">
                      {tier.name}
                    </CardTitle>
                    <CardDescription className="text-3xl font-bold text-primary">
                      {tier.price}
                    </CardDescription>
                    <p className="text-muted-foreground">
                      {tier.description}
                    </p>
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
            <p className="text-muted-foreground mb-8">
              Final pricing is determined based on scope assessment. Custom pricing is available for specialized needs.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">
                Get Custom Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Outcome */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Expected Outcome
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A strategically structured funnel that maximizes lead quality, improves customer progression, and boosts revenue outcomes.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LeadGeneration;
