const CURRENT_YEAR = new Date().getFullYear();

export function Footer({ name }) {
  return (
    <footer className="site-footer">
      <div>
        <span>
          © <span id="footer-year">{CURRENT_YEAR}</span>{" "}
          <strong id="footer-name">{name || "Jebosa Samson"}</strong>. Built with modern craft.
        </span>
      </div>
      <div>
        <a href="#hero" className="footer-link">
          Back to Top ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;
