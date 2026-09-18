import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  ArrowRight,
  Clock3,
} from "lucide-react";

import { WHATSAPP_LINK } from "../data/siteData";
import PageHero from "../components/PageHero";
import CTA from "../components/CTA";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setShowSuccess(false);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xkjggpqk", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        setShowSuccess(true);
      } else {
        const data = await response.json();

        if (data.errors) {
          setError(data.errors.map((error) => error.message).join(", "));
        } else {
          setError(
            "Something went wrong while submitting your enquiry. Please try again.",
          );
        }
      }
    } catch (err) {
      console.error("Form submission error:", err);

      setError(
        "Unable to send your enquiry. Please try again or contact us directly.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* =========================
          PAGE HERO
      ========================== */}
      <PageHero
        eyebrow="Contact Silicon Systems & Securities"
        title="Let's turn your requirement into a practical plan."
        text="Tell us what you are trying to improve, install or protect. We can help you define the right technology scope before work begins."
        image="/images/contact-page.svg"
      />

      {/* =========================
          CONTACT SECTION
      ========================== */}
      <section className="section">
        <div className="container contact-grid">
          {/* LEFT CONTENT */}
          <div>
            <p className="eyebrow">Start a conversation</p>

            <h2>Tell us what needs to work better.</h2>

            <p>
              Whether you are planning a new office setup, upgrading security,
              resolving recurring IT issues or building a digital presence,
              start with the requirement. We will help shape the next step.
            </p>

            <div className="contact-details">
              {/* CALL */}
              <a href="tel:+918080495101">
                <span>
                  <Phone />
                </span>

                <div>
                  <b>Call our team</b>
                  <small>+91 8080495101</small>
                  <small>+91 9821024897</small>
                </div>
              </a>

              {/* WHATSAPP */}
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                <span>
                  <MessageCircle />
                </span>

                <div>
                  <b>WhatsApp</b>
                  <small>Quick project conversation</small>
                </div>
              </a>

              {/* EMAIL */}
              <a href="mailto:info@sstm.in">
                <span>
                  <Mail />
                </span>

                <div>
                  <b>Email</b>
                  <small>info@sstm.in</small>
                </div>
              </a>

              {/* SERVICE AREA */}
              <div>
                <span>
                  <MapPin />
                </span>

                <div>
                  <b>Service area</b>
                  <small>Maharashtra, Gujarat</small>
                </div>
              </div>

              {/* ENQUIRIES */}
              <div>
                <span>
                  <Clock3 />
                </span>

                <div>
                  <b>Enquiries</b>
                  <small>Business hours • response focused</small>
                </div>
              </div>
            </div>
          </div>

          {/* =========================
              CONTACT FORM
          ========================== */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <p className="eyebrow">Project enquiry</p>

            <h3>Give us a little context.</h3>

            {/* FULL NAME */}
            <label>
              Full name
              <input type="text" name="name" required placeholder="Your name" />
            </label>

            {/* BUSINESS EMAIL */}
            <label>
              Business email
              <input
                type="email"
                name="email"
                required
                placeholder="you@company.com"
              />
            </label>

            {/* PHONE */}
            <label>
              Phone number
              <input
                type="tel"
                name="phone"
                required
                placeholder="+91 8080495101"
              />
            </label>

            {/* REQUIREMENT */}
            <label>
              What do you need help with?
              <textarea
                name="message"
                required
                rows="5"
                placeholder="For example: CCTV for an office, network setup, website development..."
              />
            </label>

            {/* EMAIL SUBJECT */}
            <input
              type="hidden"
              name="_subject"
              value="New Enquiry - Silicon Systems & Securities"
            />

            {/* SUBMIT BUTTON */}
            <button
              className="button button-dark"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                "Sending..."
              ) : (
                <>
                  Send enquiry
                  <ArrowRight size={17} />
                </>
              )}
            </button>

            {/* ERROR MESSAGE */}
            {error && <p className="form-status error">{error}</p>}

            <small>
              Your details are used only to respond to this enquiry.
            </small>
          </form>
        </div>
      </section>

      {/* =========================
          CONTACT NOTE
      ========================== */}
      <section className="section soft">
        <div className="container contact-note">
          <p className="eyebrow">Before you contact us</p>

          <h2>Useful details make the first conversation more productive.</h2>

          <div>
            <span>01</span>
            <p>What are you installing, upgrading or fixing?</p>

            <span>02</span>
            <p>What kind of site or business is involved?</p>

            <span>03</span>
            <p>Is there an existing system we need to work with?</p>
          </div>
        </div>
      </section>

      {/* =========================
          CTA
      ========================== */}
      <CTA dark />

      {/* =========================
          SUCCESS POPUP
      ========================== */}
      {showSuccess && (
        <div className="success-overlay">
          <div className="success-popup">
            {/* CLOSE BUTTON */}
            <button
              type="button"
              className="success-close"
              onClick={() => setShowSuccess(false)}
              aria-label="Close"
            >
              ×
            </button>

            {/* SUCCESS ICON */}
            <div className="success-icon">✓</div>

            {/* TITLE */}
            <h3>Enquiry Sent Successfully!</h3>

            {/* MESSAGE */}
            <p>
              Thank you for contacting Silicon Systems & Securities. Our team
              will get in touch with you shortly.
            </p>

            {/* DONE BUTTON */}
            <button
              type="button"
              className="button button-dark"
              onClick={() => setShowSuccess(false)}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </>
  );
}
