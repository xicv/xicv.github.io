(() => {
  const region = document.querySelector("[data-capture-region]");
  const label = document.querySelector("[data-region-label]");
  const ratio = document.querySelector("[data-ratio]");
  const buttons = [...document.querySelectorAll("[data-region]")];
  if (!region || !label || !ratio || buttons.length === 0) return;

  const update = (choice) => {
    region.className = `capture-region ${choice} active`;
    const name = choice[0].toUpperCase() + choice.slice(1);
    label.textContent = choice === "full" ? "Full display" : `${name} ${ratio.value}`;
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
