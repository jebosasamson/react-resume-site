export function EducationSection({ education }) {
  if (!education?.length) return null;

  return (
    <section id="education" className="content-section">
      <div className="section-badge">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
        <span>Education</span>
      </div>

      <h2 className="section-title">Education & Credentials</h2>

      <div className="education-list" id="education-list">
        {education.map((edu, idx) => (
          <article key={idx} className="education-card">
            <div className="timeline-card-header" style={{ marginBottom: "10px" }}>
              <div className="timeline-role-group">
                <h3 className="timeline-role">{edu.degree}</h3>
                <div className="timeline-company">{edu.institution}</div>
              </div>
              <div className="timeline-period-pill">{edu.period}</div>
            </div>
            <p className="timeline-desc">{edu.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default EducationSection;
