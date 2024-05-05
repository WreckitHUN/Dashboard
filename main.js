const root = document.documentElement;
root.className = "light";

const nav = document.querySelector(".nav");
const line = document.querySelector(".lineIcon");

const searchIcon = document.querySelector(".searchIcon");
const searchBar = document.querySelector(".searchBar");

const setTheme = () => {
    const root = document.documentElement;
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
}

line.addEventListener("click", () => {
    nav.classList.toggle("open");
})

searchIcon.addEventListener("click", (event) => {
    searchBar.classList.add("open");
    searchBar.focus();
})

document.addEventListener('click', function(event) {
    let isClickInside1 = nav.contains(event.target);
    let isClickInside2 = line.contains(event.target);
    let isClickInside3 = searchIcon.contains(event.target);
    let isClickInside4 = searchBar.contains(event.target);
    let center = document.querySelector(".center");

    if (!isClickInside3 && !isClickInside4){
        searchBar.classList.remove("open");
        searchBar.value = "";
    }

    if (!isClickInside1 && !isClickInside2) {
        nav.classList.remove("open");
        center.classList.remove("lower-opacity");
    } else {
        center.classList.add("lower-opacity");
    }
});



