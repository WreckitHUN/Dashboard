const root = document.documentElement;
root.className = "light";

const setTheme = () => {
    const root = document.documentElement;
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
}

const nav = document.querySelector(".nav");
const arrow = document.querySelector(".arrow");

arrow.addEventListener("click", () => {
    arrow.classList.toggle("open");
    nav.classList.toggle("open");
})
  
  