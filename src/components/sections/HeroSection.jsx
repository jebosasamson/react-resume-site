import { useState, useEffect, useRef, useMemo } from "react";

export function HeroSection({ profile, stats }) {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [counts, setCounts] = useState(() => stats.map(() => 0));
  const statsContainerRef = useRef(null);

  const roles = useMemo(() => {
    return profile?.highlightRoles?.length
      ? profile.highlightRoles
      : [profile?.role || "UI/UX & Product Designer"];
  }, [profile]);

  // Typewriter effect
  useEffect(() => {
    let timeoutId;
    const currentWord = roles[roleIndex] || "";
    const baseSpeed = 75;

    if (!isDeleting) {
      if (displayText.length < currentWord.length) {
        const nextChar = currentWord.slice(0, displayText.length + 1);
        const delta = baseSpeed + (Math.random() * 30 - 15);
        timeoutId = setTimeout(() => {
          setDisplayText(nextChar);
        }, Math.max(35, delta));
      } else {
        // Pausing after fully typed
        const pauseTime = roles.length > 1 ? 2400 : 3500;
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      if (displayText.length > 0) {
        const prevChar = currentWord.slice(0, displayText.length - 1);
        timeoutId = setTimeout(() => {
          setDisplayText(prevChar);
        }, 35);
      } else {
        // Brief pause before next word starts typing
        timeoutId = setTimeout(() => {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 400);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isDeleting, roleIndex, roles]);

  // Animated metric counters on scroll
  useEffect(() => {
    const container = statsContainerRef.current;
    if (!container || !stats?.length) return;

    let hasAnimated = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            const duration = 1500;
            const startTime = performance.now();

            function update(now) {
              const progress = Math.min((now - startTime) / duration, 1);
              const easeProgress = 1 - Math.pow(1 - progress, 3);

              setCounts(
                stats.map((s) => Math.floor(easeProgress * s.value))
              );

              if (progress < 1) {
                requestAnimationFrame(update);
              } else {
                setCounts(stats.map((s) => s.value));
              }
            }

            requestAnimationFrame(update);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [stats]);

  return (
    <section id="hero" className="hero-section">
      <div className="section-badge" id="hero-badge">
        <span>👋</span>
        <span>{profile?.sayHelloBadge ? profile.sayHelloBadge.replace("👋", "").trim() : "Say Hello"}</span>
      </div>

      <h1 className="hero-heading">
        I’m <span id="hero-name">{profile?.name}</span>,<br />
        <span className="highlight-accent" id="hero-role-highlight">
          <span className="typewriter-text">{displayText}</span>
          <span className="typewriter-cursor" aria-hidden="true">|</span>
        </span>
        <br />
        <span id="hero-based">{profile?.basedIn || `Based in ${profile?.location}.`}</span>
      </h1>

      <p className="hero-bio" id="hero-bio">
        {profile?.bio}
      </p>

      {/* Dynamic Metric Counters */}
      <div className="stats-grid" id="stats-container" ref={statsContainerRef}>
        {stats?.map((stat, idx) => (
          <div key={idx} className="stat-card">
            <div className="stat-number">
              <span className="counter-value">{counts[idx] ?? 0}</span>
              <span className="stat-suffix">{stat.suffix || "+"}</span>
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
