import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Target, 
  BarChart3, 
  Zap, 
  Globe, 
  Eye,
  ArrowLeft,
  ArrowRight 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const PerformanceMarketing: React.FC = () => {
  const keyDeliverables = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Ad Strategy & Setup",
      description: "Identifying high-intent audiences, keyword research, and targeting optimization."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Cross-Platform Execution",
      description: "Google Ads, Display Network, YouTube, Meta (Facebook/Instagram), LinkedIn, Content Recommendation Networks (Taboola, Outbrain, Revcontent), Alternative Platforms (Reddit Ads, Quora Ads, X Ads), Direct Media Buys on premium websites and industry-specific publications, and Performance Marketing Partnerships."
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Creative Development",
      description: "High-converting ad creatives, including static, carousel, and video formats."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Bid & Budget Optimization",
      description: "Maximizing ROI through dynamic budget allocation and A/B testing."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Landing Page Optimization",
      description: "Custom landing pages built for high engagement and conversion rates."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-Time Analytics & Reporting",
      description: "Continuous campaign monitoring and strategic adjustments."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Performance Marketing & Paid Media Management | Perssonify</title>
        <meta 
          name="description" 
          content="Drive customers, users & revenue with precision advertising and multi-platform reach. Expert performance marketing and paid media management." 
        />
      </Helmet>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/growth-solutions" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Growth Solutions
            </Link>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-foreground"
          >
            Performance Marketing & Paid Media Management
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium"
          >
            Driving Customers, Users & Revenue with Precision Advertising and Multi-Platform Reach
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-muted-foreground leading-relaxed mb-8"
          >
            Digital advertising should be an investment with a measurable return. Our performance-driven ad campaigns are structured to maximize conversions, optimize budgets, and generate high-value leads, customers, and users across multiple platforms.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg" className="text-lg px-8" asChild>
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Key Deliverables Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Key Deliverables
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyDeliverables.map((deliverable, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div 
                        className="text-primary"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {deliverable.icon}
                      </motion.div>
                      <h4 className="text-xl font-semibold">{deliverable.title}</h4>
                    </div>
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

      {/* Outcome Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8"
          >
            Expected Outcome
          </motion.h3>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-primary/10 p-8 rounded-lg border border-primary/20"
          >
            <p className="text-lg text-foreground leading-relaxed">
              <strong>Higher lead quality, increased customer acquisition, user growth, and a streamlined conversion journey.</strong>
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Button size="lg" className="text-lg px-8" asChild>
              <Link to="/contact">
                Ready to Drive Results?
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default PerformanceMarketing;
