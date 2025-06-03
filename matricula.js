document.addEventListener("DOMContentLoaded", () => {
  const btnMenu = document.querySelectorAll(".menu-icon")[4];
  const btnAvisos = document.querySelectorAll(".menu-icon")[0];
  const conteudo2 = document.querySelector(".conteudo2");
  const conteudo = document.querySelector(".conteudo");

  btnMenu.addEventListener("click", () => {
    conteudo2.style.display = "block";
    conteudo.style.display = "none";

    setActiveButton(btnMenu);
  });

  btnAvisos.addEventListener("click", () => {
    conteudo.style.display = "block";
    conteudo2.style.display = "none";
    
    setActiveButton(btnAvisos);
  });

  function setActiveButton(activeBtn) {
    document.querySelectorAll(".menu-icon").forEach((btn) => {
      btn.classList.remove("active");
    });
    activeBtn.classList.add("active");
  }
  setActiveButton(btnAvisos);
});

function ajustaAltura() {
  const alturaReal = window.innerHeight;
  document.documentElement.style.setProperty(
    "--altura-real",
    `${alturaReal}px`
  );
}
window.addEventListener("resize", ajustaAltura);
window.addEventListener("DOMContentLoaded", ajustaAltura);
