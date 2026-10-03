export function TestimonialsSection({ testimonials }) {
  if (!testimonials?.length) return null;

  return (
    <section id="testimonials" className="content-section">
      <div className="section-badge">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        <span>Testimonials</span>
      </div>

      <h2 className="section-title">What Clients Say</h2>

      <div className="testimonials-grid" id="testimonials-grid">
        {testimonials.map((t, idx) => (
          <div key={idx} className="testimonial-card">
            <p className="testimonial-quote">“{t.quote}”</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar-fallback">
                {t.author.charAt(0)}
              </div>
              <div>
                <div className="testimonial-name">{t.author}</div>
                <div className="testimonial-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
