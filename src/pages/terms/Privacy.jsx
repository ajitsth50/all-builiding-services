// src/pages/Privacy.jsx
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Check = ({ className = "h-6 w-6 text-blue-500" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Bolt = ({ className = "h-6 w-6 text-blue-500" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const Mail = ({ className = "h-5 w-5" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const Privacy = () => {
  return (
    <section className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
            <p className="mt-2 text-sm text-gray-500">Last updated: 24 October 2025</p>
            <p className="mt-3 text-gray-600 leading-relaxed">
              This Privacy Policy explains how{" "}
              <span className="font-semibold">All Building &amp; Property Services Pty Ltd</span> collects, uses, and safeguards your information when you use our website,
              request a quote, or engage our maintenance and remedial services across Sydney.
            </p>
          </header>

          {/* Information We Collect */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed">
              We collect information that you provide directly to us, as well as limited technical data when you use our site:
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex items-start">
                <Check />
                <span className="ml-3 text-gray-600">
                  Name, contact details, and address information for quotes and site visits
                </span>
              </div>
              <div className="flex items-start">
                <Check />
                <span className="ml-3 text-gray-600">Project details and photos you share for maintenance requests</span>
              </div>
              <div className="flex items-start">
                <Check />
                <span className="ml-3 text-gray-600">
                  Billing and payment details processed securely through third-party providers
                </span>
              </div>
              <div className="flex items-start">
                <Check />
                <span className="ml-3 text-gray-600">Device and usage data for analytics and security purposes</span>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Bolt />
                  <span className="ml-3 text-gray-600">To provide quotes, schedule works, and deliver our services</span>
                </li>
                <li className="flex items-start">
                  <Bolt />
                  <span className="ml-3 text-gray-600">To manage billing, invoices, and customer support</span>
                </li>
                <li className="flex items-start">
                  <Bolt />
                  <span className="ml-3 text-gray-600">To improve our website and maintain security</span>
                </li>
                <li className="flex items-start">
                  <Bolt />
                  <span className="ml-3 text-gray-600">
                    To send service updates or offers (only where you’ve consented)
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Data Security */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Data Security</h2>
            <div className="prose text-gray-600">
              <p className="mb-4">
                We use industry-standard security measures to protect your data. However, no method of transmission over the internet is completely secure.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-blue-700">
                  We regularly review and update our security policies to ensure your information remains protected.
                </p>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Rights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Access</h3>
                <p className="text-gray-600">You can request access to your personal data any time.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Rectification</h3>
                <p className="text-gray-600">You can ask us to correct inaccurate information.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Erasure</h3>
                <p className="text-gray-600">You can request deletion of data we no longer need.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Portability</h3>
                <p className="text-gray-600">You can request a copy of your data in a common format.</p>
              </div>
            </div>
            <p className="mt-4 text-gray-600">
              Additional rights may apply depending on your jurisdiction.
            </p>
          </section>

          {/* Cookies */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Cookies</h2>
            <p className="text-gray-600 leading-relaxed">
              Our website uses cookies for core functionality and analytics. You can manage cookie preferences in your browser settings. Some features may not work properly without cookies.
            </p>
          </section>

          {/* Changes */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Changes to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this policy from time to time. Updates will be posted on this page with the revised date above.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy or your data, please contact us:
              </p>
              <div className="flex items-center space-x-2 text-blue-600">
                <Mail />
                <a href="mailto:admin@allbuildingservices.com.au" className="hover:underline">
                  admin@allbuildingservices.com.au
                </a>
              </div>
              <p className="mt-2 text-gray-600">
                All Building &amp; Property Services Pty Ltd<br />
                81–83 Campbell Street, Surry Hills NSW 2010, Australia
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Privacy;
