import { useEffect, useRef } from "react";

export function CursorSpotlight() {
  const spotlightRef = useRef(null);

  useEffect(() => {
    // Only run if fine pointer (mouse/trackpad, not mobile touch)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const spotlight = spotlightRef.current;
    if (!spotlight) return;

    let mouseX = -600;
    let mouseY = -600;
    let currentX = -600;
    let currentY = -600;
    let isMoving = false;
    let animationFrameId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isMoving) {
        isMoving = true;
        spotlight.style.opacity = "1";
      }
    };

    const handleMouseLeave = () => {
      spotlight.style.opacity = "0";
      isMoving = false;
    };

    const render = () => {
      currentX += (mouseX - currentX) * 0.18;
      currentY += (mouseY - currentY) * 0.18;
      spotlight.style.transform = `translate(${currentX}px, ${currentY}px)`;
      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    animationFrameId = requestAnimationFrame(render);

    // Card hover spotlights
    const handleCardMouseMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };

    const handleCardMouseLeave = (e) => {
      const card = e.currentTarget;
      card.style.setProperty("--mouse-x", `-500px`);
      card.style.setProperty("--mouse-y", `-500px`);
    };

    const selector =
      ".stat-card, .timeline-card, .project-card, .education-card, .tool-card, .profile-sidebar, .contact-container, .testimonial-card";
    const cards = document.querySelectorAll(selector);

    cards.forEach((card) => {
      card.addEventListener("mousemove", handleCardMouseMove);
      card.addEventListener("mouseleave", handleCardMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);

      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleCardMouseMove);
        card.removeEventListener("mouseleave", handleCardMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="bg-ambient-layer" aria-hidden="true" />
      <div className="cursor-spotlight" ref={spotlightRef} aria-hidden="true" />
    </>
  );
}

export default CursorSpotlight;
