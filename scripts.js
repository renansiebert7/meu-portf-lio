document.querySelector(".button-sobre-mim").addEventListener("click", function () {
    document.querySelector(".sobre-mim").scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".button-projetos").addEventListener("click", function () {
    document.querySelector(".title-projects").scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".button-habilidades").addEventListener("click", function () {
    document.querySelector(".skills").scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".button-certificados").addEventListener("click", function () {
    document.querySelector(".titulo3").scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".contact").addEventListener("click", function () {
    document.querySelector("footer").scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".projeto").addEventListener("click", function () {
    document.querySelector(".title-projects").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("btnCurriculo").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "assets/Currículo Renan Carlo Siebert.pdf"
    link.download = "Curriculo-Renan.pdf";
    link.click();
});

const btnTopo = document.querySelector(".topo")
const footer = document.querySelector(".contact-links");

window.addEventListener("scroll", function () {

    if (window.scrollY > 200) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }

    const footerRect = footer.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const btnHeight = btnTopo.offsetHeight;

    if (footerRect.top < windowHeight) {
        btnTopo.style.bottom = `${windowHeight - footerRect.top + btnHeight + 30}px`;
    } else {
        btnTopo.style.bottom = "20px";
    }
});

btnTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});