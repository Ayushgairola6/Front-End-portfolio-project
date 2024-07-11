let openmenu = () => {
  let sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "block";
  // sidebar.style.transform = "translateX(0px)";
};
let closemenu = () => {
  let closebtn = document.querySelector(".sidebar");
  closebtn.style.display = "none";
};
let tl = gsap.timeline();

tl.from("#logo", {
  y: "-20px",
  duration: 0.7,
  delay: 0.2,
  opacity: 0,
});
tl.from("#navlinks a", {
  y: "-20px",
  duration: 0.7,
  delay: 0.2,
  opacity: 0,
  stagger: 0.4,
  ease: "power2.out",
});
tl.from("#front ", {
  x: "-15vw",
  duration: 0.7,
  opacity: 0,
  // delay: 0.7,
});
tl.from("#dev", {
  x: "15vw",
  duration: 0.7,
  opacity: 0,
  // delay: 0.8,
});
tl.from("#based", {
  y: "-15vw",
  duration: 0.7,
  opacity: 0,
  // delay: 1.5,
});
tl.from("#rando", {
  y: "25vw",
  // x: "-15vw",
  duration: 0.7,
  opacity: 0,
  // delay: 1.5,
});

gsap.from(".elements #elem1", {
  transform: "translateX(160%)",
  delay: 0.5,
  duration: 1,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#chaltafirta",
    scroller: "body",
    markers: false,
    start: "top 220%",
    end: "top -100",
    scrub: 5,
  },
});

gsap.from(".elements #elem3", {
  transform: "translateX(160%)",
  delay: 0.5,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: "#chaltafirta",
    scroller: "body",
    markers: false,
    start: "top 220%",
    end: "top -100",
    scrub: 5,
  },
});

gsap.from(".elements #elem2", {
  transform: "translateX(200%)",
  delay: 0.5,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: "#chaltafirta",
    scroller: "body",
    markers: false,
    start: "top 220%",
    end: "top -100",
    scrub: 5,
  },
});

// MAKING THE GOLA MOVE WITH OUR CURSOR

let Gola = document.getElementById("gola");

window.addEventListener("mousemove", function (dets) {
  // console.log(dets.clientX, dets.clientY);
  gsap.to("#gola", {
    x: dets.clientX,
    y: dets.clientY,
    delay: 0,
    duration: 1,
    ease: "power4.out",
  });
  // Gola.style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`;
});

document.querySelectorAll(".elem").forEach(function (elem) {
  let rotate = 0;
  let diffRot = 0;
  elem.addEventListener("mousemove", function (dets) {
    let ourY = dets.clientY - elem.getBoundingClientRect().top;
    diffRot = dets.clientX - rotate;
    rotate = dets.clientX;
    console.log(elem.querySelector("img"));
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power1.in,
      top: ourY,
      left: dets.clientX,

      rotate: gsap.utils.clamp(-20, 20, diffRot),
    });
  });
});

document.querySelectorAll(".elem").forEach(function (elem) {
  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power1,
    });
  });
});

gsap.to("#chal", {
  transform: "translateX(-200%)",
  repeat: -1,
  duration: 4,
  ease: "none",
});
