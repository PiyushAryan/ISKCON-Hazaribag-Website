import React, { useEffect } from 'react';
import LegalPage from '../components/LegalPage';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = 'Privacy Policy — ISKCON Hazaribag';
    window.scrollTo(0, 0);
  }, []);

  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      lastUpdated="April 2024"
    >
      <div className="lp-highlight">
        ISKCON Hazaribag is committed to protecting your personal information. This policy explains what we collect, how we use it, and your rights as a donor or visitor.
      </div>

      <h2>1. Information We Collect</h2>
      <p>When you make a donation or interact with our website, we may collect the following information:</p>
      <ul>
        <li><strong>Personal details:</strong> Full name and mobile number (entered during the donation checkout).</li>
        <li><strong>Payment information:</strong> Transaction details processed securely through Razorpay. We do not store card or bank account details on our servers.</li>
        <li><strong>Communication data:</strong> Email address if you contact us at <a href="mailto:info@iskconhzb.com">info@iskconhzb.com</a> for a donation receipt or inquiry.</li>
        <li><strong>Usage data:</strong> Standard web server logs (IP address, browser type, pages visited) for site security and performance — not linked to your identity.</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use your information solely for the following purposes:</p>
      <ul>
        <li>Processing your donation through the Razorpay payment gateway.</li>
        <li>Generating and issuing donation receipts (including 80G tax exemption certificates).</li>
        <li>Responding to your queries sent via email.</li>
        <li>Maintaining records required under applicable Indian tax and charitable trust laws.</li>
      </ul>
      <p>We do <strong>not</strong> use your data for marketing, advertising, or sell it to any third party under any circumstances.</p>

      <h2>3. Payment Gateway &amp; Third Parties</h2>
      <p>
        All online donations are processed by <strong>Razorpay Software Pvt. Ltd.</strong>, a RBI-regulated payment gateway. Your payment information is transmitted directly to Razorpay over a 256-bit SSL encrypted connection and is governed by{' '}
        <a href="https://razorpay.com/privacy/" target="_blank" rel="noreferrer">Razorpay's Privacy Policy</a>.
      </p>
      <p>We do not share your personal data with any other third party except as required by law or to comply with a valid legal order from an Indian court or authority.</p>

      <h2>4. Cookies</h2>
      <p>
        This website does not use tracking cookies or analytics cookies. Only essential session-based data may be stored temporarily for the functioning of the payment flow.
      </p>

      <h2>5. Data Retention</h2>
      <p>
        Donation records (name, amount, payment reference) are retained for a minimum of 7 years as required by Indian charitable trust and income tax regulations. Other data (email correspondence) is retained for as long as necessary to resolve your inquiry.
      </p>

      <h2>6. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Request access to the personal data we hold about you.</li>
        <li>Request correction of inaccurate information.</li>
        <li>Request deletion of your data, subject to legal retention requirements.</li>
      </ul>
      <p>
        To exercise any of these rights, please write to us at{' '}
        <a href="mailto:info@iskconhzb.com">info@iskconhzb.com</a>.
      </p>

      <h2>7. Security</h2>
      <p>
        We take reasonable technical and organisational measures to protect your data from unauthorised access, disclosure, or loss. All payment transactions are encrypted using industry-standard TLS/SSL protocols.
      </p>

      <h2>8. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised "Last updated" date. Continued use of the website after changes constitutes acceptance of the revised policy.
      </p>

      <h2>9. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at:<br />
        <a href="mailto:info@iskconhzb.com">info@iskconhzb.com</a><br />
        ISKCON Hazaribag, New Okni Talab, Lohsinghna Road, Hazaribag — 825301, Jharkhand, India.
      </p>
    </LegalPage>
  );
};

export default PrivacyPolicy;
