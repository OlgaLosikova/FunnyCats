document.querySelectorAll('a[href^="#"').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    let href = link.getAttribute("href").substring(1);
    console.log(href);
    const scrollTarget = document.getElementById(href);
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    window.scrollBy({ top: elementPosition, behavior: "smooth" });
  });
});
