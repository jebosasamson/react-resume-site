import { useState, useEffect } from "react";
import { NavIcon } from "../ui/Icons";

export function FloatingNav({ items }) {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sectionIds = items.map((item) => item.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0
      }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, [items]);

  return (
    <nav className="floating-nav-dock" aria-label="Main Navigation">
      {items.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`nav-dock-item ${isActive ? "active" : ""}`}
            data-nav={item.id}
            aria-label={item.label}
          >
            <NavIcon name={item.icon || item.id} />
            <span className="nav-tooltip">{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
}

export default FloatingNav;
