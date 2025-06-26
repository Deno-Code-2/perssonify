import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Users, TrendingUp, CheckCircle, ArrowRight, Calendar, MessageSquare, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { WavyBackground } from '@/components/ui/wavy-background';
import { motion } from 'framer-motion';

const ContentStrategy: React.FC = () => {
  const keyDeliverables = [
    {
      icon: Calendar,
      title: 'Editorial Calendar Development',
      description: 'Strategic scheduling of content across channels to maintain consistency, relevance, and timely engagement.'
    },
    {
      icon: MessageSquare,
      title: 'Messaging Frameworks',
      description: 'Translating brand pillars into clear messages tailored for different formats, platforms, and audience segments.'
    },
    {
      icon: Target,
      title: 'Channel Strategy & Prioritization',
      description: 'Identifying the right mix of owned, earned, and paid channels to amplify content impact.'
    },
    {
      icon: Users,
      title: 'Content Format Planning',
      description: 'Recommending the types of content—written, visual, interactive—that best support growth and align with audience behavior.'
    },
    {
      icon: BarChart3,
      title: 'Performance Alignment',
      description: 'Defining content KPIs and feedback loops to ensure continuous refinement and measurable impact.'
    }
  ];

  const pricingTiers = [
    {
      name: 'Content Essentials',
      price: '$1,500',
      description: 'Foundational messaging framework, multi-platform editorial kickoff calendar, and basic alignment on content goals and audience segments.',
      features: [
        'Basic messaging framework',
        'Editorial calendar setup',
        'Content goals alignment',
        'Audience segmentation',
        'Platform recommendations'
      ]
    },
    {
      name: 'Integrated Content Strategy',
      price: '$3,500',
      description: 'Core messaging strategy with multi-platform editorial planning, channel prioritization, content format mix, and basic performance alignment.',
      features: [
        'Everything in Essentials',
        'Multi-platform planning',
        'Channel prioritization',
        'Content format strategy',
        'Performance tracking'
      ]
    },
    {
      name: 'Editorial Ecosystem Strategy',
      price: '$7,500',
      description: 'Full-spectrum content roadmap across platforms. Includes detailed audience mapping, KPI-based editorial planning, publishing cadence, and content layering.',
      features: [
        'Everything in Integrated',
        'Detailed audience mapping',
        'KPI-based planning',
        'Publishing workflows',
        'Content optimization'
      ]
    },
    {
      name: 'Cross-Channel Growth Planning',
      price: 'Custom ($10,000+)',
      description: 'Enterprise-level content strategy across departments or business units. Includes team workflows, asset systems, and complex integration needs.',
      features: [
        'Everything in Editorial',
        'Enterprise workflows',
        'Asset management systems',
        'Team coordination',
        'Ongoing optimization'
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
              Content Strategy & Planning
            </h1>
            <p className="text-xl md:text-2xl text-black/80 dark:text-white/80 mb-8 leading-relaxed max-w-4xl mx-auto">
              Structuring Messaging & Content to Support Long-Term Growth
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
              Once a brand's foundation is defined, the next step is to translate that identity into a content strategy that drives consistent visibility, engagement, and growth. Our Content Strategy & Planning solution bridges the gap between brand strategy and execution by turning positioning into a clear, cross-channel content roadmap.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              We help businesses align messaging with audience needs, build editorial calendars that support strategic objectives, and optimize content delivery across key platforms—ensuring every piece of content contributes to measurable outcomes.
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
              Our Content Strategy & Planning solution can be delivered as a standalone engagement or as a strategic layer within broader brand or marketing programs. Whether you need a focused messaging framework or a full editorial ecosystem, we tailor the engagement to match your growth goals.
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
              Final pricing is determined based on scope and platform complexity. Custom pricing is available for multi-channel content strategies or highly specialized needs.
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
              A structured content strategy that supports brand goals, enhances visibility, and fuels long-term marketing momentum.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContentStrategy;
