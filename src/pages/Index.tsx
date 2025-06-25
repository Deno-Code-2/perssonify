import React from 'react';
import Hero from '@/components/sections/Hero';
import AboutSection from '@/components/sections/AboutSection';
import OurSolutions from '@/components/sections/Our Solutions';
import ContactSection from '@/components/sections/ContactSection';
import CookieConsent from '@/components/CookieConsent';
import SocialMeta from '@/components/SocialMeta';

const Index: React.FC = () => {
  return (
    <div>
      <SocialMeta />
      <Hero />
      <OurSolutions />
      <AboutSection />
      <ContactSection />
      <CookieConsent />
    </div>
  );
};

export default Index;
