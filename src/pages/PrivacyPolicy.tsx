import React from 'react';

const PrivacyPolicy: React.FC = () => (
  <div className="container py-12 max-w-3xl">
    <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
    <p className="mb-4">Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website.</p>
    <h2 className="text-xl font-semibold mt-8 mb-2">Information We Collect</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>Personal information you provide (such as your name and email address)</li>
      <li>Usage data (such as pages visited, time spent on the site, etc.)</li>
    </ul>
    <h2 className="text-xl font-semibold mt-8 mb-2">How We Use Your Information</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>To provide and improve our services</li>
      <li>To communicate with you</li>
      <li>To analyze website usage</li>
    </ul>
    <h2 className="text-xl font-semibold mt-8 mb-2">Your Rights</h2>
    <p className="mb-4">You have the right to access, update, or delete your personal information. Contact us if you have any questions.</p>
    <p className="text-muted-foreground text-sm mt-8">This policy may be updated from time to time. Please review it periodically.</p>
  </div>
);

export default PrivacyPolicy; 