import React from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-purple-700">
      <h1 className="text-4xl font-bold text-purple-600 mb-8">Privacy Policy</h1>

      <p className="mb-6 text-gray-700">
        At TrackMind Psychiatric & Mental Health Services, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our services or visit our website.
      </p>

      <h2 className="text-2xl font-semibold text-purple-600 mb-4">1. Information We Collect</h2>
      <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
        <li>Personal identification information (name, email address, phone number, etc.)</li>
        <li>Health-related information provided via intake forms or online appointments</li>
        <li>Usage data and browser information for website analytics</li>
      </ul>

      <h2 className="text-2xl font-semibold text-purple-600 mb-4">2. How We Use Your Information</h2>
      <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
        <li>To provide mental health services and schedule appointments</li>
        <li>To improve our website experience and services</li>
        <li>To contact you with important updates or information</li>
      </ul>

      <h2 className="text-2xl font-semibold text-purple-600 mb-4">3. Data Protection</h2>
      <p className="mb-6 text-gray-700">
        We implement appropriate security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. We comply with HIPAA and other relevant data privacy regulations.
      </p>

      <h2 className="text-2xl font-semibold text-purple-600 mb-4">4. Sharing Your Information</h2>
      <p className="mb-6 text-gray-700">
        We do not sell, trade, or rent your personal information. We may share your data with trusted partners solely for the purpose of providing care or fulfilling legal obligations.
      </p>

      <h2 className="text-2xl font-semibold text-purple-600 mb-4">5. Your Rights</h2>
      <p className="mb-6 text-gray-700">
        You have the right to request access to your personal data, correct inaccuracies, or request deletion, in accordance with applicable law.
      </p>

      <h2 className="text-2xl font-semibold text-purple-600 mb-4">6. Contact Us</h2>
      <p className="text-gray-700">
        If you have questions or concerns about this Privacy Policy, please contact us at:{" "}
        <a
          href="mailto:admin@trackmindpmh.com"
          className="text-purple-600 underline hover:text-purple-800"
        >
          admin@trackmindpmh.com
        </a>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
