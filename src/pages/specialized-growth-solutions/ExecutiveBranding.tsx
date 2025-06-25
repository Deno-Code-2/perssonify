
import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Users, TrendingUp, CheckCircle, ArrowRight, User, Linkedin, Star, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { WavyBackground } from '@/components/ui/wavy-background';
import { motion } from 'framer-motion';

const ExecutiveBranding: React.FC = () => {
  const keyCapabilities = [
    {
      title: 'LinkedIn profile optimization and branding'
    },
    {
      title: 'Thought leadership content creation and publishing'
    },
    {
      title: 'Personalized connection-building strategies'
    },
    {
      title: 'Newsletter development and audience growth'
    },
    {
      title: 'Media placement and thought leadership amplification'
    },
    {
      title: 'Ongoing analytics, reporting, and optimization'
    }
  ];

  const pricingTiers = [
    {
      name: 'Essential',
      price: '$3,500/month',
      idealFor: 'Founders and executives building their digital presence from the ground up.',
      features: [
        'LinkedIn Profile Optimization',
        'Personal Brand Positioning',
        '3–5 Thought Leadership Posts/Month',
        'Audience & Connection Strategy',
        'Monthly Reporting'
      ],
      icon: User
    },
    {
      name: 'Growth',
      price: '$6,000/month',
      idealFor: 'Leaders looking to grow influence and attract meaningful opportunities.',
      features: [
        'Everything in Essential',
        '8–10 Thought Leadership Posts/Month',
        'Custom Content Strategy',
        'Newsletter Development',
        'Engagement Management',
        'Bi-Weekly Analytics & Optimization'
      ],
      icon: TrendingUp
    },
    {
      name: 'Influence+',
      price: '$8,500/month',
      idealFor: 'High-visibility leaders seeking platform growth, speaking/media opportunities, and full-service personal brand support.',
      features: [
        'Everything in Growth',
        'Executive Ghostwriting (Posts, Articles, Bios)',
        'Podcast & Speaking Outreach',
        'Media Placements',
        'Monthly Strategy Calls',
        'Audience Growth Campaigns',
        'End-to-End Brand Management'
      ],
      icon: Star
    },
    {
      name: 'Icon',
      price: 'Custom ($10,000+)',
      idealFor: 'Executives and thought leaders seeking full-spectrum brand authority and platform building at scale.',
      features: [
        'Full-service executive brand management',
        'Strategic Brand Narrative Development',
        'Advanced Content Architecture',
        'Executive Ghostwriting',
        'High-Touch Thought Leadership Programs',
        'Video Scripting & Advisory',
        'Speaking & Media Placement Strategy',
        'Custom Visual Brand Kits',
        'Weekly 1:1 Strategy',
        'Executive Visibility Ops'
      ],
      icon: Crown
    }
  ];

  const benefits = [
    'Establish authority and trust through high-performance LinkedIn profiles and thought leadership content',
    'Engage high-value connections with personalized outreach and messaging',
    'Increase visibility through curated media, podcast, and speaking opportunities',
    'Measure and optimize influence through detailed performance analytics'
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
              Executive Personal Branding & LinkedIn Marketing
            </h1>
            <p className="text-xl md:text-2xl text-black/80 dark:text-white/80 mb-8 leading-relaxed max-w-4xl mx-auto">
              Amplifying leadership visibility, credibility, and influence through tailored personal brand strategy.
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
              For leaders, founders, and industry experts, growth often depends on more than just what the business does—it also depends on how the people behind it are positioned. This solution focuses on transforming executive presence into a strategic asset for trust-building, deal flow, and market influence.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              Whether you're looking to elevate visibility, shape perception, or expand strategic networks, this program helps you establish authority and drive meaningful business outcomes through strategic personal branding.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-gradient-to-br from-card to-card/50 border-0 custom-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Linkedin className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-foreground text-sm leading-relaxed">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Key Capabilities
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {keyCapabilities.map((capability, index) => (
                <div key={index} className="flex items-center p-4 bg-card rounded-lg border">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-foreground">{capability.title}</span>
                </div>
              ))}
            </div>
          </motion.div>
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
              This solution is offered as a specialized track within Perssonify's Growth Services and is available in four structured packages based on goals and stage. It can also be integrated into a broader growth program for executives and founder-led brands.
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
                <Card className="h-full bg-gradient-to-br from-card to-card/50 border-0 custom-shadow relative">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <tier.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {tier.name}
                    </CardTitle>
                    <CardDescription className="text-2xl font-bold text-primary">
                      {tier.price}
                    </CardDescription>
                    <p className="text-sm text-muted-foreground mt-2">
                      {tier.idealFor}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
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
            <Button size="lg" asChild>
              <Link to="/contact">
                Schedule Consultation
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
              Increased executive visibility, stronger market credibility, and a consistent flow of high-quality opportunities—driven by a well-positioned personal brand and strategic LinkedIn presence.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ExecutiveBranding;
