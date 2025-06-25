
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  User, 
  Target, 
  TrendingUp, 
  Users, 
  MessageSquare, 
  BarChart3,
  ArrowLeft,
  ArrowRight 
} from 'lucide-react';

const ExecutiveBranding: React.FC = () => {
  const keyDeliverables = [
    {
      icon: <User className="w-6 h-6" />,
      title: "LinkedIn Profile Optimization & Branding",
      description: "Complete LinkedIn profile overhaul with professional positioning, compelling headlines, and strategic content alignment."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Thought Leadership Content Creation",
      description: "Strategic content development that positions executives as industry authorities and thought leaders."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Personalized Connection-Building Strategies",
      description: "Targeted outreach and relationship building with high-value prospects and industry influencers."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Newsletter Development & Audience Growth",
      description: "Building and nurturing email audiences through strategic newsletter content and distribution."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Media Placement & Thought Leadership Amplification",
      description: "Strategic media placements, podcast appearances, and speaking opportunities to expand reach."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics, Reporting & Optimization",
      description: "Comprehensive performance tracking and strategic optimization based on engagement metrics."
    }
  ];

  const pricingTiers = [
    {
      name: "Essential",
      price: "$3,500/month",
      description: "Founders and executives building their digital presence from the ground up.",
      features: [
        "LinkedIn Profile Optimization",
        "Personal Brand Positioning",
        "3–5 Thought Leadership Posts/Month",
        "Audience & Connection Strategy",
        "Monthly Reporting"
      ]
    },
    {
      name: "Growth",
      price: "$6,000/month",
      description: "Leaders looking to grow influence and attract meaningful opportunities.",
      features: [
        "Everything in Essential",
        "8–10 Thought Leadership Posts/Month",
        "Custom Content Strategy",
        "Newsletter Development",
        "Engagement Management",
        "Bi-Weekly Analytics & Optimization"
      ]
    },
    {
      name: "Influence+",
      price: "$8,500/month",
      description: "High-visibility leaders seeking platform growth and media opportunities.",
      features: [
        "Everything in Growth",
        "Executive Ghostwriting",
        "Podcast & Speaking Outreach",
        "Media Placements",
        "Monthly Strategy Calls",
        "Audience Growth Campaigns",
        "End-to-End Brand Management"
      ]
    },
    {
      name: "Icon",
      price: "Custom ($10,000+)",
      description: "Full-spectrum brand authority and platform building at scale.",
      features: [
        "Full-service executive brand management",
        "Strategic Brand Narrative Development",
        "Advanced Content Architecture",
        "Video Scripting & Advisory",
        "Custom Visual Brand Kits",
        "Weekly 1:1 Strategy",
        "Executive Visibility Operations"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Executive Personal Branding & LinkedIn Marketing | Perssonify</title>
        <meta 
          name="description" 
          content="Amplify leadership visibility, credibility, and influence through tailored personal brand strategy and LinkedIn marketing for executives and founders." 
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
            Executive Personal Branding & LinkedIn Marketing
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 font-medium"
          >
            Amplifying Leadership Visibility, Credibility, and Influence Through Tailored Personal Brand Strategy
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8"
          >
            For leaders, founders, and industry experts, growth often depends on more than just what the business does—it also depends on how the people behind it are positioned. This solution focuses on transforming executive presence into a strategic asset for trust-building, deal flow, and market influence.
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

      {/* Key Deliverables Section */}
      <section className="py-12 sm:py-16 px-3 sm:px-4 lg:px-6 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center"
          >
            Key Deliverables
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {keyDeliverables.map((deliverable, index) => (
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
                    {deliverable.icon}
                  </motion.div>
                  <h4 className="text-lg sm:text-xl font-semibold">{deliverable.title}</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {deliverable.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 px-3 sm:px-4 lg:px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center"
          >
            Flexible Engagement Structure
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div 
                key={tier.name} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-4 sm:p-6 rounded-lg border hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4">
                  <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-2">{tier.name}</h4>
                  <p className="text-2xl sm:text-3xl font-bold text-primary mb-2">{tier.price}</p>
                  <p className="text-muted-foreground text-sm sm:text-base">{tier.description}</p>
                </div>
                <ul className="space-y-2">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm sm:text-base">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
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
              <strong>Increased executive visibility, stronger market credibility, and a consistent flow of high-quality opportunities—driven by a well-positioned personal brand and strategic LinkedIn presence.</strong>
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
                Ready to Amplify Your Influence?
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default ExecutiveBranding;
