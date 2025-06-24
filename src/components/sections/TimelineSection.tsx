
import React from 'react';
import { motion } from 'framer-motion';
import { Timeline } from '../ui/timeline';

const TimelineSection: React.FC = () => {
  const timelineData = [
    {
      title: "Discovery & Strategy",
      content: (
        <div className="space-y-6">
          <div className="flex items-start space-x-6">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <img 
                src="/Growth Solutions Icons/PerformanceMarketing&PaidMedia.png" 
                alt="Discovery" 
                className="w-10 h-10 object-contain dark:brightness-0 dark:invert"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Deep Dive into Your Business</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We start by understanding your unique challenges, market position, and growth objectives. Our comprehensive audit reveals what's working, what isn't, and where the biggest opportunities lie.
              </p>
              <ul className="mt-4 space-y-2 text-base text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Business model analysis & competitive assessment
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Current performance evaluation & gap identification
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Strategic roadmap development & priority setting
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Design & Development",
      content: (
        <div className="space-y-6">
          <div className="flex items-start space-x-6">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <img 
                src="/Growth Solutions Icons/Creative Solutions.png" 
                alt="Design" 
                className="w-10 h-10 object-contain dark:brightness-0 dark:invert"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Tailored Solutions Architecture</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Based on our findings, we design and build custom solutions that address your specific challenges. Every strategy is crafted to fit your business reality and growth ambitions.
              </p>
              <ul className="mt-4 space-y-2 text-base text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Custom growth strategy & execution framework
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Technology integration & automation setup
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Content strategy & creative asset development
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Implementation & Launch",
      content: (
        <div className="space-y-6">
          <div className="flex items-start space-x-6">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <img 
                src="/Growth Solutions Icons/Conversion Rate Optimization.png" 
                alt="Launch" 
                className="w-10 h-10 object-contain dark:brightness-0 dark:invert"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Precision Execution & Deployment</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We execute with speed and precision, ensuring seamless deployment across all channels. Our phased approach minimizes risk while maximizing early wins and momentum.
              </p>
              <ul className="mt-4 space-y-2 text-base text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Campaign launch & channel activation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  System integration & process automation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Team training & knowledge transfer
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Optimization & Scale",
      content: (
        <div className="space-y-6">
          <div className="flex items-start space-x-6">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <img 
                src="/Growth Solutions Icons/Search Engine Optimization (SEO) & Website Growth.png" 
                alt="Scale" 
                className="w-10 h-10 object-contain dark:brightness-0 dark:invert"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Continuous Growth & Refinement</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We continuously monitor, analyze, and optimize performance to ensure sustained growth. Data-driven adjustments and strategic refinements keep you ahead of the competition.
              </p>
              <ul className="mt-4 space-y-2 text-base text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Performance monitoring & analytics reporting
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  A/B testing & conversion rate optimization
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Strategic scaling & expansion planning
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How We Drive Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven methodology combines strategic thinking with tactical execution to deliver sustainable growth outcomes.
          </p>
        </motion.div>
        
        <Timeline data={timelineData} />
      </div>
    </section>
  );
};

export default TimelineSection;
