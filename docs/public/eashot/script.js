(() => {
  const isZh = document.documentElement.lang === "zh-CN";
  const alt = document.documentElement.dataset.alt || "";
  const pref = localStorage.getItem("eashot-lang");

  // Language routing: a stored preference always wins; otherwise a
  // Simplified-Chinese browser visiting the English site is pointed at the
  // zh pages. Never forced the other way — the zh pages stay reachable.
  if (pref === "zh" && !isZh && alt) { location.href = alt; return; }
  if (pref === "en" && isZh && alt) { location.href = alt; return; }
  if (!pref) {
    const nav = (navigator.language || "en").toLowerCase();
    if (nav.startsWith("zh") && !isZh && alt) {
      localStorage.setItem("eashot-lang", "zh");
      location.href = alt;
      return;
    }
  }

  // remember explicit toggle clicks (the switch navigates anyway)
  document.querySelectorAll("[data-lang-switch]").forEach((a) => {
    a.addEventListener("click", () => {
      localStorage.setItem("eashot-lang", a.dataset.langSwitch);
    });
  });

  // localized region-lab demo
  const region = document.querySelector("[data-capture-region]");
  const label = document.querySelector("[data-region-label]");
  const ratio = document.querySelector("[data-ratio]");
  const buttons = [...document.querySelectorAll("[data-region]")];
  if (!region || !label || !ratio || buttons.length === 0) return;

  const names = isZh
    ? { left: "左侧", right: "右侧", top: "顶部", bottom: "底部", full: "全屏" }
    : { left: "Left", right: "Right", top: "Top", bottom: "Bottom", full: "Full display" };

  const update = (choice) => {
    region.className = `capture-region ${choice} active`;
    label.textContent = choice === "full" ? names.full : `${names[choice]} ${ratio.value}`;
    ratio.disabled = choice === "full";
    buttons.forEach((button) => {
      const selected = button.dataset.region === choice;
      button.classList.toggle("selected", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
  };

  buttons.forEach((button) => button.addEventListener("click", () => update(button.dataset.region)));
  ratio.addEventListener("change", () => {
    const selected = buttons.find((button) => button.classList.contains("selected"));
    update(selected?.dataset.region ?? "right");
  });
  update(buttons.find((button) => button.classList.contains("selected"))?.dataset.region ?? "right");
})();
