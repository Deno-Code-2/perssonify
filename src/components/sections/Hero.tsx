
import React from 'react';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import InteractiveHoverCard from '../ui/interactive-hover-card';
import TextRotate from '../ui/text-rotate';

const Hero: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16">
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-3 py-2 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 text-primary dark:text-primary text-sm font-medium mb-6 sm:mb-8 backdrop-blur-sm"
          >
            <Zap className="w-4 h-4 mr-2 animate-pulse" />
            Growth & Strategic Solutions
          </motion.div>

          {/* Main Headline with Text Rotation */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight text-center"
          >
            We bring{' '}
            <TextRotate
              words={['Growth', 'Scale']}
              className="text-primary"
            />
            {' '}to life.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/90 dark:text-foreground/80 mb-8 sm:mb-12 leading-relaxed max-w-3xl"
          >
            We help businesses grow fast and scale smart. The right solution. The right time. Delivered.
          </motion.p>

          {/* Interactive Hover Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col lg:flex-row gap-4 sm:gap-6 justify-center items-center w-full mt-4 sm:mt-8"
          >
            <Link to="/growth-solutions" className="block w-full max-w-sm lg:max-w-lg">
              <InteractiveHoverCard
                imageUrl="/Icons/Growth Solutions.png"
                heading="Growth Solutions"
                text="High-performance marketing strategy and execution that amplifies brand value and accelerates customer acquisition."
              />
            </Link>
            
            <Link to="/strategic-solutions" className="block w-full max-w-sm lg:max-w-lg">
              <InteractiveHoverCard
                imageUrl="/Icons/Strategic Solutions.png"
                heading="Strategic Solutions"
                text="Tailored strategy and implementations built for precision, scalability, and operational efficiency."
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
