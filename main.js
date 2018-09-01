//Selecting DOM elements
const btn = document.querySelector("#cta");
const btn2 = document.querySelector("#cta2");

//Starts svg animation
btn.addEventListener("click", () => {
  //following code is from animeJS
  const morphing = anime({
    targets: ".polymorph",
    points: [
      { value: "215,110 0,110 0,0 47.7,0 67,76" },
      { value: "215,110 0,110 0,0 0,0 67,76" }
    ],
    easing: "easeInOutCirc",
    duration: 2000,
    loop: false
  });
  //removes button from layout
  btn.style.display = "none";
  anime({
    targets: "#blip",
    opacity: 1,
    duration: 2200,
    translateY: 150
  });
  // This reverts the animation when Go Back button is clicked.
  btn2.addEventListener("click", () => {
    const promise = morphing.finished.then(() => {
      const morphing = anime({
        targets: ".polymorph",
        points: [
          { value: "215,110 0,110 0,0 47.7,0 67,76" },
          { value: "215,110 0,110 0,0 47.7,0 215,0" }
        ],
        easing: "easeInOutExpo",
        duration: 2000,
        loop: false
      });
      //returns button to layout.
      btn.style.display = "unset";
      anime({
        targets: "#blip",
        opacity: 0,
        duration: 1900,
        easing: "easeInOutExpo",
        translateY: -800
      });
    });
  });
});
