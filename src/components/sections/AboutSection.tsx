import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Users, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutSection: React.FC = () => {
  const stats = [
    { icon: Target, label: 'Projects Completed', value: '500+' },
    { icon: Users, label: 'Happy Clients', value: '200+' },
    { icon: Trophy, label: 'Years Experience', value: '10+' }
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              About Perssonify
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              We're a growth-focused agency that combines strategic thinking with tactical execution. 
              Our team specializes in delivering measurable results through data-driven marketing solutions 
              and strategic business transformation.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              From startups to enterprise companies, we help businesses scale efficiently by implementing 
              the right mix of growth strategies, technology solutions, and operational improvements.
            </p>
            <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8" asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center lg:text-left p-6 rounded-lg bg-background border hover:shadow-lg transition-shadow"
              >
                <stat.icon className="w-10 h-10 text-primary mx-auto lg:mx-0 mb-4" />
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                </h3>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
