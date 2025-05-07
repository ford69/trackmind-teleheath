import React from "react";

const TermsOfUse = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-purple-700">
      <h1 className="text-4xl font-bold text-purple-600 mb-8">Terms of Use</h1>

      <p className="mb-6 text-gray-700">
        These Terms of Use govern your access to and use of the TrackMind Psychiatric & Mental Health Services website and services. By accessing or using our site, you agree to be bound by these terms.
      </p>

      <h2 className="text-2xl font-semibold text-purple-600 mb-4">1. Acceptance of Terms</h2>
      <p className="mb-6 text-gray-700">
        By using this website, you confirm that you are at least 18 years old and agree to comply with these Terms of Use. If you do not agree, you must not use our site or services.
      </p>

      <h2 className="text-2xl font-semibold text-purple-600 mb-4">2. Medical Disclaimer</h2>
      <p className="mb-6 text-gray-700">
        Information on this site is for educational purposes only and does not constitute medical advice. Always consult a licensed healthcare provider for diagnosis and treatment.
      </p>

      <h2 className="text-2xl font-semibold text-purple-600 mb-4">3. User Conduct</h2>
      <ul className="list-disc list-inside mb-6 text-gray-700 space-y-2">
        <li>You agree not to misuse the site or interfere with others’ use of it.</li>
        <li>You agree not to attempt unauthorized access to any part of the system.</li>
        <li>You may not upload or transmit harmful or offensive content.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-purple-600 mb-4">4. Intellectual Property</h2>
      <p className="mb-6 text-gray-700">
        All content, logos, images, and branding are the intellectual property of TrackMind or its licensors. You may not reproduce or distribute this content without written permission.
      </p>

      <h2 className="text-2xl font-semibold text-purple-600 mb-4">5. Limitation of Liability</h2>
      <p className="mb-6 text-gray-700">
        TrackMind is not responsible for any damages resulting from your use of this site. This includes, without limitation, indirect or consequential damages.
      </p>

      <h2 className="text-2xl font-semibold text-purple-600 mb-4">6. Changes to Terms</h2>
      <p className="mb-6 text-gray-700">
        We reserve the right to update these Terms at any time. Changes will be posted on this page, and continued use of the site constitutes acceptance of the revised terms.
      </p>

      <h2 className="text-2xl font-semibold text-purple-600 mb-4">7. Contact</h2>
      <p className="text-gray-700">
        If you have any questions about these Terms, please contact us at:{" "}
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

export default TermsOfUse;
