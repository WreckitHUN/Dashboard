const root = document.documentElement;
root.className = "light";

const setTheme = () => {
    const root = document.documentElement;
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
}

const nav = document.querySelector(".nav");
const line = document.querySelector(".lineIcon");

line.addEventListener("click", () => {
    nav.classList.toggle("open");
})

document.addEventListener('click', function(event) {
    let isClickInside1 = nav.contains(event.target);
    let isClickInside2 = line.contains(event.target);
    let center = document.querySelector(".center");

    if (!isClickInside1 && !isClickInside2) {
        nav.classList.remove("open");
        center.classList.remove("lower-opacity");
    } else {
        center.classList.add("lower-opacity");
    }
});

