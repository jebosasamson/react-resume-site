export function ExperienceSection({ experience }) {
  if (!experience?.length) return null;

  return (
    <section id="experience" className="content-section">
      <div className="section-badge">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect width="20" height="14" x="2" y="7" rx="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
        <span>Experience</span>
      </div>

      <h2 className="section-title">Work Experience</h2>

      <div className="experience-list" id="experience-list">
        {experience.map((exp, idx) => (
          <article key={idx} className="timeline-card">
            <div className="timeline-card-header">
              <div className="timeline-role-group">
                <h3 className="timeline-role">{exp.role}</h3>
                <div className="timeline-company">
                  <span>{exp.company}</span>
                  <span style={{ color: "var(--text-light)" }}>•</span>
                  <span style={{ color: "var(--text-muted)", fontSize: "0.8125rem" }}>
                    {exp.location}
                  </span>
                </div>
              </div>
              <div className="timeline-period-pill">{exp.period}</div>
            </div>

            <p className="timeline-desc">{exp.description}</p>

            {exp.skills && exp.skills.length > 0 && (
              <div className="skill-tags">
                {exp.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;
