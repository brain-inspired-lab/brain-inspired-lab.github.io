{
  const storageKey = "dark-mode";
  const root = document.documentElement;

  const getPreferredMode = () => {
    const saved = window.localStorage.getItem(storageKey);
    if (saved === "true" || saved === "false") {
      return saved;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "true" : "false";
  };

  const applyMode = (value) => {
    const normalized = value === "true" ? "true" : "false";
    root.dataset.dark = normalized;

    document.querySelectorAll("header.background, footer.background").forEach((el) => {
      el.dataset.dark = normalized;
    });

    const darkToggle = document.querySelector(".dark-toggle");
    if (darkToggle) {
      darkToggle.checked = normalized === "true";
    }
  };

  applyMode(getPreferredMode());

  document.addEventListener("DOMContentLoaded", () => {
    applyMode(getPreferredMode());
  });

  window.onDarkToggleChange = (event) => {
    const value = String(event.target.checked);
    window.localStorage.setItem(storageKey, value);
    applyMode(value);
  };
}
