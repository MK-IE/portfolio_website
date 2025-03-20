const card = document.querySelector(".card");
const container = document.querySelector(".card-container");
const cardImage = document.querySelector(".card-image");

let isMouseOver = false;
let rotateX = 0;
let rotateY = 0;

function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function updateCardTransform() {
  const transformString = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  card.style.transform = transformString;
}

function animate() {
  if (!isMouseOver) {
    rotateX = lerp(rotateX, 0, 0.05);
    rotateY = lerp(rotateY, 0, 0.05);
  }

  updateCardTransform();
  requestAnimationFrame(animate);
}

function isValidDeviceMotionData(event) {
  const rotationRate = event.rotationRate;
  if (
    rotationRate &&
    typeof rotationRate.alpha === "number" &&
    typeof rotationRate.beta === "number"
  ) {
    return true;
  }
  return false;
}

let isDeviceMotionSupported = false;
if (window.DeviceMotionEvent) {
  window.addEventListener("devicemotion", (event) => {
    if (!isValidDeviceMotionData(event)) {
      isDeviceMotionSupported = false;
      return;
    }

    isDeviceMotionSupported = true;

    const rotationRate = event.rotationRate;
    if (rotationRate) {
      rotateX = clamp(rotationRate.alpha, -150, 150);
      rotateY = clamp(rotationRate.beta, -150, 150);
    }
  });
} else {
  isDeviceMotionSupported = false;
}

if (!isDeviceMotionSupported) {
  container.addEventListener("mousemove", (e) => {
    if (!isMouseOver) return;

    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    rotateY = clamp(mouseX / 10, -15, 15);
    rotateX = clamp(-mouseY / 10, -15, 15);
  });

  container.addEventListener("mouseenter", () => {
    isMouseOver = true;
    card.style.transition = "none";
  });

  container.addEventListener("mouseleave", () => {
    isMouseOver = false;
    card.style.transition = "transform 0.6s";
  });
}

// Particle settings (same as before)
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#2ecc71" },
    shape: { type: "circle" },
    opacity: {
      value: 0.5,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: true, speed: 2, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#2ecc71",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: true, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});

animate();

function animatedIcon() {
  const faviconAnimation = ["🖥️", "🏃", "🏋️"];

  if (!document.querySelector("head link[rel='icon']"))
    document.querySelector("head").innerHTML =
      document.querySelector("head").innerHTML + `<linkrel="icon"href=""/>`;

  document
    .querySelector("head link[rel='icon']")
    .setAttribute(
      "href",
      `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${faviconAnimation[0]}</text></svg>`
    );
  let animCount = 0;
  function animFoo() {
    if (animCount >= faviconAnimation.length) {
      animCount = 0;
    }
    document
      .querySelector("head link[rel='icon']")
      .setAttribute(
        "href",
        `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${faviconAnimation[animCount]}</text></svg>`
      );
    animCount++;
  }

  setInterval(() => {
    animFoo();
  }, 2000);
}

animatedIcon();
