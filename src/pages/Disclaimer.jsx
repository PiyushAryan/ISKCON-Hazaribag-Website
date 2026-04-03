import React, { useEffect } from 'react';
import LegalPage from '../components/LegalPage';

const Disclaimer = () => {
  useEffect(() => {
    document.title = 'Disclaimer — ISKCON Hazaribag';
    window.scrollTo(0, 0);
  }, []);

  return (
    <LegalPage
      eyebrow="Legal"
      title="Disclaimer"
      lastUpdated="April 2024"
    >
      <div className="lp-highlight">
        Please read this disclaimer carefully before using the ISKCON Hazaribag website or making a donation through our online portal.
      </div>

      <h2>1. General Information</h2>
      <p>
        The information provided on this website (<strong>iskconhzb.com</strong>) is for general informational and devotional purposes only. ISKCON Hazaribag — Sri Sri Radha Madhava Temple makes every effort to keep the information accurate and up-to-date, but makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, or suitability of the information.
      </p>

      <h2>2. Donation Disclaimer</h2>
      <p>
        All donations made through this website are voluntary contributions to ISKCON Hazaribag, a registered religious charitable trust. By making a donation, you acknowledge and agree to the following:
      </p>
      <ul>
        <li>Donations are non-refundable once processed through the Razorpay payment gateway, except in the case of a verified technical error resulting in a duplicate charge.</li>
        <li>The suggested donation amounts displayed are indicative. You are free to choose any amount.</li>
        <li>In case of a payment failure, please do not attempt multiple payments before confirming a failed transaction through your bank or Razorpay support.</li>
        <li>ISKCON Hazaribag is not responsible for any charges levied by your bank or card network during the donation process.</li>
      </ul>

      <h2>3. Tax Exemption (80G)</h2>
      <p>
        Donations to ISKCON Hazaribag may be eligible for income tax exemption under Section 80G of the Indian Income Tax Act, 1961. Tax Exemption Certificate Reference No.: <strong>XXXXXXXPF20219</strong>.
      </p>
      <p>
        To claim your 80G receipt, please email your full legal name, postal address with PIN code, PAN number, and transaction reference to{' '}
        <a href="mailto:info@iskconhzb.com">info@iskconhzb.com</a>. We recommend consulting a qualified tax advisor for advice specific to your situation.
      </p>

      <h2>4. Third-Party Payment Gateway</h2>
      <p>
        Online payments are processed by <strong>Razorpay Software Pvt. Ltd.</strong>, a third-party payment gateway regulated by the Reserve Bank of India (RBI). ISKCON Hazaribag is not responsible for any issues arising from the Razorpay platform, including but not limited to payment failures, refund timelines, or security breaches on Razorpay's systems. For payment-related disputes, please contact Razorpay support directly at{' '}
        <a href="https://razorpay.com/support/" target="_blank" rel="noreferrer">razorpay.com/support</a>.
      </p>

      <h2>5. External Links</h2>
      <p>
        This website may contain links to external websites for reference or convenience. ISKCON Hazaribag does not endorse, control, or take responsibility for the content of any third-party website linked from this site.
      </p>

      <h2>6. Spiritual Content</h2>
      <p>
        The spiritual teachings, quotes, and scriptural references on this website are presented for devotional and educational purposes. They are sourced from authorised ISKCON literature. ISKCON Hazaribag is not liable for any personal interpretation or misapplication of these teachings.
      </p>

      <h2>7. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by applicable law, ISKCON Hazaribag shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with the use of this website or the donation process, including but not limited to loss of data, revenue, or goodwill.
      </p>

      <h2>8. Governing Law</h2>
      <p>
        This disclaimer and all matters arising from the use of this website are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Hazaribag, Jharkhand.
      </p>

      <h2>9. Contact</h2>
      <p>
        For any questions or concerns regarding this disclaimer, please contact us at:<br />
        <a href="mailto:info@iskconhzb.com">info@iskconhzb.com</a><br />
        ISKCON Hazaribag, New Okni Talab, Lohsinghna Road, Hazaribag — 825301, Jharkhand, India.
      </p>
    </LegalPage>
  );
};

export default Disclaimer;
