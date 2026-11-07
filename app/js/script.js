const dark = document.getElementById("dark");
const light = document.getElementById("light");

// Detect the system's preference color scheme 
const systemTheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
);

// Function to apply the selected theme 
function applyTheme(theme){
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);

    dark.checked = theme === "dark";
    light.checked = theme === "light";
}

function changeTheme(theme){
    applyTheme(theme);

    localStorage.setItem("theme", theme);
}

//Dark mode radio button event listener
dark.addEventListener("click", () => {
 if (dark.checked) {
     changeTheme("dark");
 }
});

//Light mode radio button event listener
light.addEventListener("click", () => {
 if (light.checked) {
     changeTheme("light");
 }
});

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark" || savedTheme === "light") {
  // Respect the user's previous selection
  applyTheme(savedTheme);
} else {
  // Use the system preference for first-time visitors
  applyTheme(systemTheme.matches ? "dark" : "light");
}

// Detect system changes automatically
systemTheme.addEventListener("change", function (event) {
  // Only follow system if user hasn't chosen manually
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme !== "dark" && savedTheme !== "light") {
    applyTheme(event.matches ? "dark" : "light");
  }
});
