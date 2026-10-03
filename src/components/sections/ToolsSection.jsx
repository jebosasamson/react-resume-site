import { ToolIcon } from "../ui/Icons";

export function ToolsSection({ tools }) {
  if (!tools?.length) return null;

  return (
    <section id="tools" className="content-section">
      <div className="section-badge">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
        <span>Tools & Stack</span>
      </div>

      <h2 className="section-title">Favorite Design & Tech Stack</h2>

      <div className="tools-grid" id="tools-grid">
        {tools.map((tool, idx) => (
          <div key={idx} className="tool-card">
            <div className="tool-icon-wrapper">
              <ToolIcon name={tool.icon || tool.name} />
            </div>
            <div>
              <h4 className="tool-name">{tool.name}</h4>
              <span className="tool-category">{tool.category}</span>
            </div>
            <span className="tool-level-pill">{tool.level || "Proficient"}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ToolsSection;
