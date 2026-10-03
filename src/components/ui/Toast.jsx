export function Toast({ message, isError = false, isVisible = false }) {
  return (
    <div
      id="toast"
      className={`toast-notification ${isVisible ? "show" : ""}`}
      role="status"
      aria-live="polite"
    >
      <span
        className="toast-dot"
        style={{ backgroundColor: isError ? "#ef4444" : "var(--accent-primary)" }}
      />
      <span id="toast-message">{message}</span>
    </div>
  );
}

export default Toast;
