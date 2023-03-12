// lear
// Insure

window.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelector(".links");
  const linksBtn = document.querySelector(".links-btn");

  linksBtn.addEventListener("click", () => {
    links.classList.toggle("active");
    console.log(linksBtn.src);
    linksBtn.src =
      linksBtn.src.slice(linksBtn.src.length - 5, linksBtn.src.length - 4) ==
      "r"
        ? "images/icon-close.svg"
        : "images/icon-hamburger.svg";
  });
});
