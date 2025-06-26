import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Users, TrendingUp, CheckCircle, ArrowRight, Palette, MessageSquare, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { WavyBackground } from '@/components/ui/wavy-background';
import { motion } from 'framer-motion';

const BrandStrategy: React.FC = () => {
  const keyDeliverables = [
    {
      icon: Target,
      title: 'Brand Positioning & Messaging Framework',
      description: 'Defining core brand identity, tone of voice, differentiation, and messaging pillars.'
    },
    {
      icon: Users,
      title: 'Target Audience Definition & Persona Development',
      description: 'Developing detailed audience segments using demographic and behavioral insights.'
    },
    {
      icon: MessageSquare,
      title: 'Brand Narrative & Storytelling Strategy',
      description: 'Crafting a compelling brand story that enhances emotional connection and recall.'
    },
    {
      icon: Palette,
      title: 'Visual Identity & Branding Guidelines',
      description: 'Providing foundational design elements and documentation for brand consistency.'
    },
    {
      icon: Zap,
      title: 'Content & Engagement Strategy',
      description: 'Creating messaging and content frameworks that align with audience and brand goals.'
    },
    {
      icon: TrendingUp,
      title: 'Competitive Landscape & Market Positioning Analysis',
      description: 'Evaluating the brand\'s role in its ecosystem to highlight unique value.'
    }
  ];

  const pricingTiers = [
    {
      name: 'Essential Brand Strategy',
      price: '$3,500',
      description: 'Foundational brand strategy including core positioning, audience segmentation, and messaging pillars. Ideal for startups and early-stage businesses.',
      features: [
        'Core brand positioning',
        'Basic audience segmentation',
        'Messaging pillars',
        'Brand voice definition',
        'Competitive analysis'
      ]
    },
    {
      name: 'Comprehensive Brand Development',
      price: '$8,000',
      description: 'Mid-depth engagement that expands core strategy into brand storytelling, visual identity, and cross-channel alignment.',
      features: [
        'Everything in Essential',
        'Brand storytelling strategy',
        'Visual identity guidelines',
        'Cross-channel alignment',
        'Content strategy framework'
      ]
    },
    {
      name: 'Strategic Brand Platform',
      price: '$20,000',
      description: 'End-to-end brand development including all core components, expanded narrative frameworks, and documentation to enable internal alignment and activation.',
      features: [
        'Everything in Comprehensive',
        'Complete brand platform',
        'Internal alignment tools',
        'Activation roadmap',
        'Team training materials'
      ]
    },
    {
      name: 'Advanced Market Positioning & Strategy',
      price: 'Custom ($25,000+)',
      description: 'Full-scale brand consulting with in-depth market analysis, competitive intelligence, stakeholder interviews, and executive advisory.',
      features: [
        'Everything in Strategic',
        'In-depth market analysis',
        'Stakeholder interviews',
        'Executive advisory',
        'Ongoing consultation'
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
              Brand Architecture & Strategy
            </h1>
            <p className="text-xl md:text-2xl text-black/80 dark:text-white/80 mb-8 leading-relaxed max-w-4xl mx-auto">
              Define, Differentiate & Position Your Brand for Long-Term Success
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
              A strong brand is built on more than just a logo—it's a strategic foundation that defines how a business presents itself, communicates its value, and connects with its audience. Perssonify's Brand Architecture & Strategy service equips businesses with a structured approach to create a clear, consistent, and compelling brand identity that differentiates, resonates, and drives engagement.
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
                <Card className="h-full">
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
              Our Brand Architecture & Strategy solution is available as a standalone solution for businesses looking to define or refine their brand identity before launching broader marketing initiatives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {tier.name}
                    </CardTitle>
                    <CardDescription className="text-2xl font-bold text-primary">
                      {tier.price}
                    </CardDescription>
                    <p className="text-sm text-muted-foreground">
                      {tier.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          <span className="text-sm text-foreground">{feature}</span>
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
              A clearly defined brand identity and positioning strategy that helps businesses communicate more effectively, engage their audiences, and stand out in competitive markets.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BrandStrategy;
