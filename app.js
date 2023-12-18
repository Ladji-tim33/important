
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
};

let buttonClick = document.getElementById("buttonPage1")
const ring = () => {
  const audio = new Audio();
  audio.src = "./Magic.jpg.mp3";
  audio.play();
}

buttonClick.addEventListener("click", () => {
  console.log("yes");
  
  // ring()
})

