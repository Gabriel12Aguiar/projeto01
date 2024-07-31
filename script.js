function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    // se tiver light mode, add img light
    img.setAttribute("src", "./assets/gb-light.jpeg")
  } else {
    // sem light mode, manter img normal
    img.setAttribute("src", "./assets/gb.jpeg")
  }
}
