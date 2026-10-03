import { useState } from "react";

export function ContactSection({ profile, onShowToast }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Frontend Development",
    budget: "$1k - $3k",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const phoneTel = profile?.phone ? profile.phone.replace(/[^0-9+]/g, "") : "";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      onShowToast("Please enter your name.", true);
      return;
    }

    if (!formData.email.trim() || !validateEmail(formData.email)) {
      onShowToast("Please provide a valid email address.", true);
      return;
    }

    if (!formData.message.trim()) {
      onShowToast("Please enter a short message about your project.", true);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onShowToast(`Thank you, ${formData.name.trim()}! I will respond within 24 hours.`, false);

      setFormData({
        name: "",
        email: "",
        service: "Frontend Development",
        budget: "$1k - $3k",
        message: ""
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 4000);
    }, 600);
  };

  return (
    <section id="contact" className="content-section">
      <div className="section-badge">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
        <span>Contact</span>
      </div>

      <div className="contact-container">
        <h2 className="section-title" style={{ marginBottom: "24px" }}>
          Let's Get in Touch!
        </h2>

        <div className="contact-info-cards">
          <div className="contact-info-card">
            <span className="contact-info-label">Contact No</span>
            <span className="contact-info-val" id="contact-card-phone">
              <a href={`tel:${phoneTel}`}>{profile?.phone}</a>
            </span>
          </div>
          <div className="contact-info-card">
            <span className="contact-info-label">Email Address</span>
            <span className="contact-info-val" id="contact-card-email">
              <a href={`mailto:${profile?.email}`}>{profile?.email}</a>
            </span>
          </div>
          <div className="contact-info-card">
            <span className="contact-info-label">Location</span>
            <span className="contact-info-val" id="contact-card-address">
              {profile?.address || profile?.location}
            </span>
          </div>
        </div>

        {/* Interactive Contact Form */}
        <form id="contact-form" className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row-2col">
            <div className="form-group">
              <label htmlFor="form-name" className="form-label">
                Your Name *
              </label>
              <input
                type="text"
                id="form-name"
                name="name"
                className="form-input"
                placeholder="e.g. Sarah Jenkins"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="form-email" className="form-label">
                Your Email *
              </label>
              <input
                type="email"
                id="form-email"
                name="email"
                className="form-input"
                placeholder="e.g. sarah@company.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row-2col">
            <div className="form-group">
              <label htmlFor="form-service" className="form-label">
                Service Interested In
              </label>
              <select
                id="form-service"
                name="service"
                className="form-select"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="Frontend Development">Frontend Development (HTML, CSS, JS, React)</option>
                <option value="Full-Stack Web App">Full-Stack Web Application (Python & Django)</option>
                <option value="UI/UX Prototyping">UI/UX Design & Prototyping</option>
                <option value="Graphic Design & Branding">Graphic Design, Logos & Digital Ads</option>
                <option value="Data Analysis">Data Entry, Cleaning & Excel Analysis</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="form-budget" className="form-label">
                Project Budget
              </label>
              <select
                id="form-budget"
                name="budget"
                className="form-select"
                value={formData.budget}
                onChange={handleChange}
              >
                <option value="<$1,000">Under $1,000</option>
                <option value="$1k - $3k">$1,000 - $3,000</option>
                <option value="$3k - $5k">$3,000 - $5,000</option>
                <option value="$5k+">$5,000+</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="form-message" className="form-label">
              Project Message *
            </label>
            <textarea
              id="form-message"
              name="message"
              className="form-textarea"
              placeholder="Tell me a bit about your product goals, timeline, and deliverables..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary form-submit-btn"
            disabled={isSubmitting || isSubmitted}
          >
            <span>{isSubmitted ? "Message Sent!" : isSubmitting ? "Sending..." : "Send Message"}</span>
            <svg viewBox="0 0 24 24">
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
