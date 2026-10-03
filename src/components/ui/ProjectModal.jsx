import { useEffect } from "react";

export function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      id="project-modal"
      className="modal-overlay open"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="modal-card">
        <button
          id="modal-close-btn"
          className="modal-close-btn"
          aria-label="Close modal"
          onClick={onClose}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        <img
          id="modal-image"
          src={project.image}
          alt={project.title}
          className="modal-thumb"
        />

        <div className="modal-content">
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <span
              id="modal-category"
              className="project-category-badge modal-badge"
            >
              {project.categoryLabel || project.category}
            </span>
            <span
              id="modal-pages"
              className="project-pages-badge modal-badge"
            >
              {project.pagesBadge || "Case Study"}
            </span>
          </div>

          <h3 id="modal-title" className="section-title" style={{ marginBottom: "4px" }}>
            {project.title}
          </h3>

          <p id="modal-desc" className="timeline-desc">
            {project.description}
          </p>

          <div className="skill-tags" id="modal-tags">
            {project.tags?.map((tag, idx) => (
              <span key={idx} className="skill-tag">
                {tag}
              </span>
            ))}
          </div>

          <div style={{ display: "flex", gap: "12px", marginTop: "12px", flexWrap: "wrap" }}>
            {project.demoUrl && (
              <a
                id="modal-demo-btn"
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                <span>Live Preview</span>
                <svg viewBox="0 0 24 24">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            )}
            <button
              id="modal-dismiss-btn"
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              <span>Close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
