// Make planets focusable with keyboard
document.querySelectorAll(".planet").forEach((planet) => {
  planet.setAttribute("tabindex", "0");
  planet.addEventListener("focus", () => planet.classList.add("focused"));
  planet.addEventListener("blur", () => planet.classList.remove("focused"));
});

// Example: Reading a CSS variable
// const earth = document.querySelector('.earth');
// const styles = getComputedStyle(earth);
// console.log('Earth distance:', styles.getPropertyValue('--distance'));
