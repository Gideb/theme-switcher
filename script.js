const themes = [
  { name: "dark", message: "You dark Freak -- This dark enough?😈" },
  { name: "light", message: "You shinning angel -- Keep blinding us😇" },
  { name: "forest", message: "You big forest -- Seen enough trees?🌲" },
  { name: "sunny", message: "You little sun god -- Had enough skin burn?🌞" },
];

const themeBtn = document.getElementById("theme-switcher-button");
const themeDropdown = document.getElementById("theme-dropdown");
const themeMessage = document.getElementById("theme-message");

themeBtn.addEventListener("click", () => {
  const isOpen = !themeDropdown.hasAttribute("hidden");

  if (isOpen) {
    themeDropdown.setAttribute("hidden", null);
    themeBtn.setAttribute("aria-expanded", false);
  } else {
    themeDropdown.removeAttribute("hidden");
    themeBtn.setAttribute("aria-expanded", true);
  }

  document.querySelectorAll(".theme-option").forEach((theme) => {
    theme.addEventListener("click", () => {
      const selectedTheme = theme.textContent.toLowerCase();

      document.body.classList.forEach((themename) => {
        if (themename.startsWith("theme-")) {
          document.body.classList.remove(themename);
        }
      });

      document.body.classList.add(`theme-${selectedTheme}`);

      const themeData = themes.find((t) => t.name === selectedTheme);

      if (themeData) {
        themeMessage.textContent = themeData.message;
      }

      themeDropdown.setAttribute("hidden", null);
      themeBtn.setAttribute("aria-expanded", false);

      if (selectedTheme == "dark") {
        document.body.style.background = "#000";
        document.body.style.color = "#fff";
      }
      if (selectedTheme == "light") {
        document.body.style.background = "#fff";
        document.body.style.color = "#000";
      }
      if (selectedTheme == "forest") {
        document.body.style.background = "#0a2905";
        document.body.style.color = "#fff";
      }
      if (selectedTheme == "sunny") {
        document.body.style.background = "#ec1";
        document.body.style.color = "#000";
      }
    });
  });
});
