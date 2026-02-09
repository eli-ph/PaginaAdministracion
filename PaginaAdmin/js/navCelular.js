(function(){
    const toggle = document.getElementById("nav");
  const links = document.getElementById("navLinks");

  toggle.addEventListener("click", () => {
    links.classList.toggle("active");
  });
})();