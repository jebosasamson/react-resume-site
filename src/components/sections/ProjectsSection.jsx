import { useState, useMemo } from "react";

export function ProjectsSection({ projects, onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = useMemo(() => {
    const cats = new Set(projects.map((p) => p.category));
    return ["all", ...Array.from(cats)];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeFilter.toLowerCase() === "all") return projects;
    return projects.filter(
      (p) => p.category.toLowerCase() === activeFilter.toLowerCase()
    );
  }, [projects, activeFilter]);

  return (
    <section id="projects" className="content-section">
      <div className="section-badge">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m3 11 18-5v12L3 14v-3z" />
          <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
        </svg>
        <span>Projects</span>
      </div>

      <div className="projects-header-row">
        <h2 className="section-title" style={{ marginBottom: 0 }}>
          Featured Work
        </h2>
        <div className="project-filters" id="project-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-btn ${activeFilter.toLowerCase() === cat.toLowerCase() ? "active" : ""}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-grid" id="projects-grid">
        {filteredProjects.map((proj) => (
          <article
            key={proj.id}
            className="project-card"
            data-project-id={proj.id}
            onClick={() => onSelectProject(proj)}
          >
            <div className="project-thumb-container">
              <img
                src={proj.image}
                alt={proj.title}
                className="project-thumb"
                loading="lazy"
              />
              <div className="project-badges">
                <span className="project-category-badge">
                  {proj.categoryLabel || proj.category}
                </span>
                <span className="project-pages-badge">
                  {proj.pagesBadge || "Case Study"}
                </span>
              </div>
            </div>

            <div className="project-body">
              <div className="project-title-row">
                <div>
                  <h3 className="project-title">{proj.title}</h3>
                  <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
                    {proj.subtitle}
                  </p>
                </div>
                <div className="project-arrow-icon" aria-label="Open project preview">
                  <svg viewBox="0 0 24 24">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
              </div>

              <p className="project-desc">{proj.description}</p>

              <div className="skill-tags">
                {proj.tags?.map((tag, idx) => (
                  <span key={idx} className="skill-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
