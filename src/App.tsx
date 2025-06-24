import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import Insights from './pages/Insights';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import GrowthSolutions from './pages/GrowthSolutions';
import StrategicSolutions from './pages/StrategicSolutions';
import SpecializedGrowthSolutions from './pages/SpecializedGrowthSolutions';
import CoreGrowthSolutions from './pages/CoreGrowthSolutions';
import SolvePathFramework from './pages/SolvePathFramework';
import ExecutionModel from './pages/ExecutionModel';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import PerformanceMarketing from './pages/growth-solutions/PerformanceMarketing';
import SocialMediaMarketing from './pages/growth-solutions/SocialMediaMarketing';
import CreativeSolutions from './pages/growth-solutions/CreativeSolutions';
import ConversionOptimization from './pages/growth-solutions/ConversionOptimization';
import SEOWebsiteGrowth from './pages/growth-solutions/SEOWebsiteGrowth';
import WebsiteSolutions from './pages/growth-solutions/WebsiteSolutions';
import AnalyticsTracking from './pages/specialized-growth-solutions/AnalyticsTracking';
import ProcessAutomation from './pages/strategic-solutions/ProcessAutomation';
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/ui/scroll-to-top';
import CookieConsent from './components/ui/cookie-consent';
import SocialMeta from './components/ui/social-meta';
import EmailMarketing from './pages/growth-solutions/EmailMarketing';
import AuditInsights from './pages/specialized-growth-solutions/AuditInsights';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop />
        <CookieConsent />
        <SocialMeta />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="about" element={<About />} />
            <Route path="insights" element={<Insights />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="growth-solutions" element={<GrowthSolutions />} />
            <Route path="strategic-solutions" element={<StrategicSolutions />} />
            <Route path="specialized-growth-solutions" element={<SpecializedGrowthSolutions />} />
            <Route path="core-growth-solutions" element={<CoreGrowthSolutions />} />
            <Route path="solve-path-framework" element={<SolvePathFramework />} />
            <Route path="execution-model" element={<ExecutionModel />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-of-service" element={<TermsOfService />} />
            
            {/* Growth Solutions Routes */}
            <Route path="growth-solutions/performance-marketing" element={<PerformanceMarketing />} />
            <Route path="growth-solutions/social-media-marketing" element={<SocialMediaMarketing />} />
            <Route path="growth-solutions/email-marketing" element={<EmailMarketing />} />
            <Route path="growth-solutions/creative-solutions" element={<CreativeSolutions />} />
            <Route path="growth-solutions/conversion-optimization" element={<ConversionOptimization />} />
            <Route path="growth-solutions/seo-website-growth" element={<SEOWebsiteGrowth />} />
            <Route path="growth-solutions/website-solutions" element={<WebsiteSolutions />} />
            
            {/* Specialized Growth Solutions Routes */}
            <Route path="specialized-growth-solutions/analytics-tracking" element={<AnalyticsTracking />} />
            <Route path="specialized-growth-solutions/audit-insights" element={<AuditInsights />} />
            
            {/* Strategic Solutions Routes */}
            <Route path="strategic-solutions/process-automation" element={<ProcessAutomation />} />
            
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
