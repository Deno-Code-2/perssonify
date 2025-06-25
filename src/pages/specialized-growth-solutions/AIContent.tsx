
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Palette, 
  Video, 
  Mic, 
  FileText, 
  RefreshCw,
  ArrowLeft,
  ArrowRight 
} from 'lucide-react';

const AIContent: React.FC = () => {
  const keyCapabilities = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "AI-Enhanced Graphic Design",
      description: "Rapid ideation and iteration of social media creatives, marketing visuals, and branded assets with human-centered design principles."
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "AI-Assisted Video Production",
      description: "Automated video editing, text-to-video generation, and motion graphics for cost-effective storytelling and engagement."
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Podcast & Audio Content Creation",
      description: "AI-supported transcription, voice modulation, and audio enhancements for podcast and audio campaign production."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "AI-Powered Copywriting & Content Generation",
      description: "Blog posts, ad copy, and social content created with AI assistance, refined for brand tone and accuracy."
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Automated Content Adaptation",
      description: "Resizing, repurposing, and localizing content for multi-channel distribution and maximum reach."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Human-Centered AI Workflows",
      description: "Human-at-the-front, in-the-loop, and at-the-end methodology ensuring quality, originality, and strategic alignment."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>AI-Accelerated Content Production Pipelines | Perssonify</title>
        <meta 
          name="description" 
          content="Enhance creativity and efficiency with human-centered AI workflows. Scalable content production that maintains quality and brand alignment." 
        />
      </Helmet>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-16 sm:py-20 px-3 sm:px-4 lg:px-6"
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/specialized-growth-solutions" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 sm:mb-8 transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Specialized Growth Solutions
            </Link>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-foreground"
          >
            AI-Accelerated Content Production Pipelines
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 font-medium"
          >
            Enhancing Creativity and Efficiency with Human-Centered AI Workflows
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8"
          >
            At Perssonify, we use AI-enhanced creativity to accelerate content development without sacrificing quality or brand alignment. Our approach keeps human expertise at the core, using advanced tools to streamline production, shorten timelines, and reduce costs—while ensuring originality, authenticity, and strategic fit.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8" asChild>
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Key Capabilities Section */}
      <section className="py-12 sm:py-16 px-3 sm:px-4 lg:px-6 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center"
          >
            Key Capabilities
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {keyCapabilities.map((capability, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-background p-4 sm:p-6 rounded-lg shadow-sm border hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <motion.div 
                    className="text-primary"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {capability.icon}
                  </motion.div>
                  <h4 className="text-lg sm:text-xl font-semibold">{capability.title}</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Structure Section */}
      <section className="py-12 sm:py-16 px-3 sm:px-4 lg:px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center"
          >
            Flexible Engagement Structure
          </motion.h3>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card p-6 sm:p-8 rounded-lg border"
          >
            <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              Customized Content Production Pipeline
            </h4>
            <p className="text-muted-foreground mb-4 text-sm sm:text-base">
              End-to-end, AI-accelerated content production system tailored to your workflow, content types, audience needs, and growth goals.
            </p>
            <div className="mb-4">
              <h5 className="font-semibold mb-2">Includes:</h5>
              <ul className="space-y-1 text-sm sm:text-base">
                <li>• Creative scoping and pipeline design</li>
                <li>• System integration and pilot execution</li>
                <li>• Quality control systems and ongoing optimization</li>
              </ul>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xl sm:text-2xl font-bold text-primary">Custom ($5,000+)</span>
              <span className="text-sm text-muted-foreground">Setup Only - Scoping Required for Monthly Rates</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Outcome Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-12 sm:py-16 px-3 sm:px-4 lg:px-6 bg-muted/50"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8"
          >
            Expected Outcome
          </motion.h3>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-primary/10 p-6 sm:p-8 rounded-lg border border-primary/20"
          >
            <p className="text-base sm:text-lg text-foreground leading-relaxed">
              <strong>Faster content cycles, lower production costs, and continually evolving content capabilities that fuel engagement and growth.</strong>
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 sm:mt-12"
          >
            <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8" asChild>
              <Link to="/contact">
                Ready to Accelerate Content Production?
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AIContent;
