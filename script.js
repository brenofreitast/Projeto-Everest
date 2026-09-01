console.log("Olá, mundo!");
const sections = document.querySelectorAll("section");
let current = 0;

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowUp" && current < sections.length - 1) {
        current++;
        sections[current].scrollIntoView({ behavior: "smooth" });
    }
    if (e.key === "ArrowDown" && current > 0) {
        current--;
        sections[current].scrollIntoView({ behavior: "smooth" });
    }
});

document.addEventListener("wheel", function (e) {
    if (e.deltaY < 0 && current < sections.length - 1) {
        current++;
        sections[current].scrollIntoView({ behavior: "smooth" });
    } else if (e.deltaY > 0 && current > 0) {
        current--;
        sections[current].scrollIntoView({ behavior: "smooth" });
    }
});