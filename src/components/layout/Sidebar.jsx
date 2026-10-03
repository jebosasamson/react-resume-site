import { SocialIcon } from "../ui/Icons";

export function Sidebar({ profile, onDownloadCV }) {
  if (!profile) return null;

  const phoneTel = profile.phone ? profile.phone.replace(/[^0-9+]/g, "") : "";
  const emailDisplay = profile.email ? `${profile.email.split("@")[0]}@...` : "";

  return (
    <aside className="profile-sidebar" id="profile-card">
      <div className="avatar-container">
        <img
          id="profile-avatar"
          src={profile.avatar}
          alt={`${profile.name} Portrait`}
          className="avatar-image"
        />
      </div>

      <div className="status-pill" id="profile-status">
        <span className="status-dot-pulse" aria-hidden="true" />
        <span id="status-text">{profile.statusText || "Available for work"}</span>
      </div>

      <h2 className="profile-name" id="profile-name">
        {profile.name}
      </h2>
      <p className="profile-role" id="profile-role">
        {profile.role}
      </p>

      {/* Social Media Links */}
      <div className="social-icons-row" id="social-links">
        {profile.socials?.map((social, idx) => (
          <a
            key={idx}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            className="social-btn"
            title={social.name}
            aria-label={social.name}
          >
            <SocialIcon name={social.icon || social.name} />
          </a>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="profile-actions">
        <button
          id="btn-download-cv"
          type="button"
          className="btn btn-secondary"
          title="Download or Print Resume"
          onClick={onDownloadCV}
        >
          <svg viewBox="0 0 24 24">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
          </svg>
          <span>Download CV</span>
        </button>

        <a href="#contact" className="btn btn-primary" title="Jump to Contact Section">
          <svg viewBox="0 0 24 24">
            <path d="m22 2-7 20-4-9-9-4Z" />
            <path d="M22 2 11 13" />
          </svg>
          <span>Contact Me</span>
        </a>
      </div>

      {/* Quick Metadata Details */}
      <div className="sidebar-meta-list">
        <div className="sidebar-meta-item">
          <span className="sidebar-meta-label">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Location
          </span>
          <span className="sidebar-meta-val" id="meta-location">
            {profile.location}
          </span>
        </div>

        <div className="sidebar-meta-item">
          <span className="sidebar-meta-label">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Email
          </span>
          <span className="sidebar-meta-val" id="meta-email">
            <a href={`mailto:${profile.email}`} title={profile.email}>
              {emailDisplay}
            </a>
          </span>
        </div>

        <div className="sidebar-meta-item">
          <span className="sidebar-meta-label">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Phone
          </span>
          <span className="sidebar-meta-val" id="meta-phone">
            <a href={`tel:${phoneTel}`}>{profile.phone}</a>
          </span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
