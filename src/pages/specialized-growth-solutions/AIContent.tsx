
import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Users, TrendingUp, CheckCircle, ArrowRight, Zap, Video, Mic, PenTool, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { WavyBackground } from '@/components/ui/wavy-background';
import { motion } from 'framer-motion';

const AIContent: React.FC = () => {
  const keyCapabilities = [
    {
      icon: Image,
      title: 'AI-Enhanced Graphic Design',
      description: 'Rapid ideation and iteration of social media creatives, marketing visuals, and branded assets.'
    },
    {
      icon: Video,
      title: 'AI-Assisted Video Production',
      description: 'Automated video editing, text-to-video generation, and motion graphics for cost-effective storytelling.'
    },
    {
      icon: Mic,
      title: 'Podcast & Audio Content Creation',
      description: 'AI-supported transcription, voice modulation, and enhancements for podcast and audio campaigns.'
    },
    {
      icon: PenTool,
      title: 'AI-Powered Copywriting & Content Generation',
      description: 'Blog posts, ad copy, and social content created with AI, refined for brand tone and accuracy.'
    },
    {
      icon: Zap,
      title: 'Automated Content Adaptation',
      description: 'Resizing, repurposing, and localizing content for multi-channel distribution.'
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
              AI-Accelerated Content Production Pipelines
            </h1>
            <p className="text-xl md:text-2xl text-black/80 dark:text-white/80 mb-8 leading-relaxed max-w-4xl mx-auto">
              Enhancing Creativity and Efficiency with Human-Centered AI Workflows
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
              At Perssonify, we use AI-enhanced creativity to accelerate content development without sacrificing quality or brand alignment. Our approach keeps human expertise at the core, using advanced tools to streamline production, shorten timelines, and reduce costs—while ensuring originality, authenticity, and strategic fit.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              We follow a human-at-the-front, in-the-loop, and at-the-end methodology that ensures every output is designed, refined, and approved by expert creatives. The result is a scalable, high-impact content pipeline that complements traditional workflows and delivers efficiently at competitive pricing.
            </p>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full bg-gradient-to-br from-card to-card/50 border-0 custom-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <capability.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {capability.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {capability.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Structure */}
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
              These solutions are fully customizable and can be delivered as standalone services or integrated into broader growth programs. Whether you're enhancing current workflows or building entirely new AI-driven content systems, we tailor the solution to fit your needs and goals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-br from-card to-card/50 border-0 custom-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-foreground">
                  Customized Content Production Pipeline
                </CardTitle>
                <CardDescription className="text-3xl font-bold text-primary mt-4">
                  Custom ($5,000+ Setup Only)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-center">
                  End-to-end, AI-accelerated content production system tailored to your workflow, content types, audience needs, and growth goals.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {[
                        'Creative scoping and strategy',
                        'Pipeline design and architecture',
                        'System integration setup',
                        'Pilot execution and testing'
                      ].map((item, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          <span className="text-sm text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Additional Services:</h4>
                    <ul className="space-y-2">
                      {[
                        'Quality control systems',
                        'Team training and onboarding',
                        'Ongoing optimization',
                        'Performance monitoring'
                      ].map((item, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          <span className="text-sm text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-muted/30 rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                    <strong>Note:</strong> Scoping Required for Monthly Rates - We'll work with you to determine ongoing operational costs based on your specific needs and volume requirements.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mt-12"
          >
            <Button size="lg" asChild>
              <Link to="/contact">
                Schedule Strategy Call
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
              Faster content cycles, lower production costs, and continually evolving content capabilities that fuel engagement and growth.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIContent;
