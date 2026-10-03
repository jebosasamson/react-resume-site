export function ToolIcon({ name, className = "" }) {
  switch (name.toLowerCase()) {
    case "python":
      return (
        <svg viewBox="0 0 24 24" className={className} width="24" height="24">
          <path
            d="M11.914 0C5.833 0 6.207 2.637 6.207 2.637l.007 2.73h5.81v.82H3.858S0 5.744 0 11.854c0 6.112 3.36 5.897 3.36 5.897h2.008v-2.82s-.11-3.36 3.303-3.36h5.688s3.195.053 3.195-3.092V3.092S17.994 0 11.914 0zm-3.38 1.838a1.077 1.077 0 1 1 0 2.155 1.077 1.077 0 0 1 0-2.155z"
            fill="#3776AB"
          />
          <path
            d="M12.086 24c6.081 0 5.707-2.637 5.707-2.637l-.007-2.73h-5.81v-.82h8.164S24 18.256 24 12.146c0-6.112-3.36-5.897-3.36-5.897h-2.008v2.82s.11 3.36-3.303 3.36H9.641s-3.195-.053-3.195 3.092v5.385S6.006 24 12.086 24zm3.38-1.838a1.077 1.077 0 1 1 0-2.155 1.077 1.077 0 0 1 0 2.155z"
            fill="#FFD43B"
          />
        </svg>
      );
    case "django":
      return (
        <svg viewBox="0 0 24 24" className={className} width="24" height="24">
          <rect width="24" height="24" rx="4" fill="#092E20" />
          <text x="4" y="16.5" fill="#44B78B" fontFamily="sans-serif" fontWeight="900" fontSize="13">dj</text>
        </svg>
      );
    case "javascript":
    case "js":
      return (
        <svg viewBox="0 0 24 24" className={className} width="24" height="24">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path d="M12.5 17.5c.5.8 1.2 1.3 2.3 1.3 1.2 0 1.9-.6 1.9-1.5 0-1-.8-1.4-2.1-1.9l-.7-.3c-2-.8-3.3-1.9-3.3-4.1 0-2.1 1.6-3.7 4.1-3.7 1.8 0 3.1.6 4 2.2l-1.9 1.2c-.5-.8-1.1-1.2-2.1-1.2-1 0-1.6.6-1.6 1.3 0 .9.7 1.3 1.8 1.8l.7.3c2.3 1 3.6 2 3.6 4.3 0 2.5-1.9 3.9-4.5 3.9-2.5 0-4.1-1.2-4.9-2.8l2.7-1.5zm-6.2.2c.4.6.8 1.1 1.7 1.1.9 0 1.5-.4 1.5-1.9V7.5h2.6v9.4c0 2.8-1.6 4.1-4 4.1-2.2 0-3.5-1.1-4.2-2.6l2.4-1.1z" fill="#000000" />
        </svg>
      );
    case "html":
    case "html5":
    case "html/css":
      return (
        <svg viewBox="0 0 24 24" className={className} width="24" height="24">
          <path d="M3 2l1.6 18.2L12 22l7.4-1.8L21 2H3zm14.7 5.5H8.7l.2 2.3h8.6l-.6 6.7-4.9 1.4-4.9-1.4-.3-3.6h2.2l.2 1.8 2.8.8 2.8-.8.3-3.3H6.1L5.5 5.2h12.5l-.3 2.3z" fill="#E34F26" />
        </svg>
      );
    case "photoshop":
      return (
        <svg viewBox="0 0 24 24" className={className} width="24" height="24">
          <rect width="24" height="24" rx="4" fill="#001E36" />
          <text x="3.5" y="16.5" fill="#31A8FF" fontFamily="sans-serif" fontWeight="900" fontSize="12">Ps</text>
        </svg>
      );
    case "canva":
      return (
        <svg viewBox="0 0 24 24" className={className} width="24" height="24">
          <circle cx="12" cy="12" r="12" fill="#00C4CC" />
          <text x="6.5" y="17" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="bold" fontSize="14" fontStyle="italic">C</text>
        </svg>
      );
    case "excel":
    case "data analysis":
      return (
        <svg viewBox="0 0 24 24" className={className} width="24" height="24">
          <rect width="24" height="24" rx="4" fill="#107C41" />
          <text x="6.5" y="17" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="bold" fontSize="14">X</text>
        </svg>
      );
    case "vscode":
      return (
        <svg viewBox="0 0 24 24" className={className} width="24" height="24" fill="none">
          <path d="M17.5 2.5 7.2 10.3 3.5 7.5l-2 1.2v6.6l2 1.2 3.7-2.8 10.3 7.8 5-2.5V5l-5-2.5zm1 14.7L11.7 12l6.8-5.2v10.4z" fill="#007ACC" />
        </svg>
      );
    case "git":
      return (
        <svg viewBox="0 0 24 24" className={className} width="24" height="24" fill="#F05032">
          <path d="M23.6 11.2 12.8.4a1.7 1.7 0 0 0-2.4 0L8.2 2.6l3 3a2 2 0 0 1 2.5 2.6l2.9 2.9a2 2 0 1 1-1.2 1.2l-2.7-2.7v6.3a2 2 0 1 1-1.7 0V9.4a2 2 0 0 1-1-2.6l-3-3L.4 8.5a1.7 1.7 0 0 0 0 2.4l10.8 10.8a1.7 1.7 0 0 0 2.4 0l10-10a1.7 1.7 0 0 0 0-2.5z" />
        </svg>
      );
    case "figma":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} width="24" height="24">
          <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z" fill="#0ACF83" />
          <path d="M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" fill="#A259FF" />
          <path d="M4 4c0-2.2 1.8-4 4-4h4v8H8C5.8 8 4 6.2 4 4z" fill="#F24E1E" />
          <path d="M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z" fill="#FF7262" />
          <path d="M20 12c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" fill="#1ABCFE" />
        </svg>
      );
    case "framer":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} width="24" height="24">
          <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
        </svg>
      );
    case "react":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="1.8" className={className} width="24" height="24">
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="2" fill="#06B6D4" />
        </svg>
      );
    case "tailwind":
      return (
        <svg viewBox="0 0 24 24" fill="#38BDF8" className={className} width="24" height="24">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} width="24" height="24">
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}

export function SocialIcon({ name, className = "" }) {
  switch (name.toLowerCase()) {
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37z" />
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
        </svg>
      );
    case "twitter":
    case "twitter / x":
    case "x":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "dribbble":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm6.92 6.09a8.1 8.1 0 0 1 1.48 4.67 8.84 8.84 0 0 0-5.83-.81 18.27 18.27 0 0 0-.67-1.46c2.47-1 4.54-2.12 5.02-2.4zM12 3.65a8.28 8.28 0 0 1 5.42 2c-.44.25-2.45 1.34-4.86 2.31A33.24 33.24 0 0 0 9.8 4.22a8.55 8.55 0 0 1 2.2-.57zM8.19 4.88a30.82 30.82 0 0 1 2.7 3.65c-3.52 1.07-7.2.91-7.2.91a8.3 8.3 0 0 1 4.5-4.56zM3.66 11.1c.14 0 3.39.11 6.84-.91.24.52.48 1.06.7 1.6-4.57 1.44-8.87 5.75-8.87 5.75A8.34 8.34 0 0 1 3.66 11.1zm8.34 9.25a8.34 8.34 0 0 1-5.17-1.81s3.78-3.84 8.25-5.32c1.23 3.32 1.76 6.16 1.83 6.57a8.33 8.33 0 0 1-4.91.56zm6.38-2.16c-.08-.43-.59-3.14-1.78-6.36 1.75.22 3.33.84 3.73 1.01a8.37 8.37 0 0 1-1.95 5.35z" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}

export function NavIcon({ name, className = "" }) {
  switch (name) {
    case "home":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );
    case "experience":
    case "briefcase":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect width="20" height="14" x="2" y="7" rx="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      );
    case "projects":
    case "folder":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="m3 11 18-5v12L3 14v-3z" />
          <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
        </svg>
      );
    case "education":
    case "academic":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      );
    case "tools":
    case "cpu":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    case "contact":
    case "mail":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}
