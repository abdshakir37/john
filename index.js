let mouseCursor = document.querySelector("#mouse");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

function navAnimate() {
  let tl = gsap.timeline();

  tl.from("#nav", {
    y: -10,
    opacity: 0,

    duration: 1.5,
    ease: Expo.easeInOut,
  });

  tl.from("#herofooter", {
    y: -10,
    opacity: 0,
    duration: 1,
    ease: Expo.easeInOut,
  });
}

navAnimate();
