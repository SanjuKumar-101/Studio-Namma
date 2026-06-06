const introOverlay = document.querySelector(".intro-overlay");
const introVideo = document.querySelector(".intro-video");

if (introVideo) {
  introVideo.addEventListener("ended", () => {
    introOverlay.classList.add("fade-out");
    setTimeout(() => introOverlay.classList.add("hidden"), 800);
  });
  setTimeout(() => {
    if (!introOverlay.classList.contains("fade-out")) {
      introOverlay.classList.add("fade-out");
      setTimeout(() => introOverlay.classList.add("hidden"), 800);
    }
  }, 5000);
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
);

document
  .querySelectorAll("[data-reveal], [data-reveal-stagger]")
  .forEach((el) => revealObserver.observe(el));

const themeToggle = document.querySelector(".left-menu p:nth-child(2)");

themeToggle.addEventListener("click", () => {
  const html = document.documentElement;
  if (html.getAttribute("data-theme") === "light") {
    html.removeAttribute("data-theme");
    themeToggle.textContent = "LIGHT MODE";
  } else {
    html.setAttribute("data-theme", "light");
    themeToggle.textContent = "DARK MODE";
  }
});

let over_menu = document.querySelector(".menu-overlay");
let hero = document.querySelector(".hero-one");
let menu_p = document.querySelector(".menu-p");
let flag = 1;
let textTimeout;
const ball = document.querySelector(".ball");

menu_p.addEventListener("click", () => {
  if (flag) {
    over_menu.style.top = "-57%";
    menu_p.textContent = "CLOSE";
    // over_menu.style.width = "220%";
    // over_menu.style.height = "205%";
    over_menu.style.left = "-60%";
    over_menu.style.transform = "rotate(25deg) translateY(200px)";
    textTimeout = setTimeout(() => {
      over_menu.classList.add("text-animate");
    }, 1500);
    flag = 0;
  } else {
    over_menu.style.top = "-205%";
    menu_p.textContent = "MENU";
    over_menu.style.left = "0%";
    over_menu.style.transform = "rotate(0deg)";
    over_menu.style.width = "220%";
    over_menu.style.height = "205%";
    clearTimeout(textTimeout);
    over_menu.classList.remove("text-animate");

    flag = 1;
  }
});

const images = document.querySelectorAll(".home_intro_image");

const detail = document.querySelector(".intro-first");
const playground = document.querySelector(".intro-second");

let interval;

function showImage(word) {
  const randomImage = images[Math.floor(Math.random() * images.length)];

  const card = document.createElement("img");
  card.src = randomImage.src;
  card.classList.add("popup-card");

  const wordPosition = word.getBoundingClientRect();

  card.style.left = wordPosition.left + Math.random() * 200 - 100 + "px";
  card.style.top = wordPosition.top + Math.random() * 150 - 75 + "px";

  document.body.appendChild(card);

  setTimeout(() => {
    card.remove();
  }, 1000);
}

function startPop(word) {
  interval = setInterval(() => {
    showImage(word);
  }, 250);
}

function stopPop() {
  clearInterval(interval);
}

detail.addEventListener("mouseenter", () => {
  startPop(detail);
});

detail.addEventListener("mouseleave", stopPop);

playground.addEventListener("mouseenter", () => {
  startPop(playground);
});

playground.addEventListener("mouseleave", stopPop);

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  currentX += (mouseX - currentX) * 0.08;
  currentY += (mouseY - currentY) * 0.08;

  ball.style.left = currentX + "px";
  ball.style.top = currentY + "px";

  requestAnimationFrame(animate);
}

animate();

const boxes = document.querySelectorAll(".boxes");

boxes.forEach((box, index) => {
  const image = box.querySelector("img");

  box.addEventListener("mouseenter", () => {
    image.style.filter = "blur(8px)";
    box.style.height = "940px";
    box.style.width = "895px";
    ball.style.width = "125px";
    ball.style.height = "50px";
    ball.style.borderRadius = "10px";
    ball.style.position = "fixed";
    ball.style.transform = "translate(-50%, -50%) rotate(-20deg)";
    ball.style.color = "white";
  });

  box.addEventListener("mouseleave", () => {
    image.style.filter = "blur(0px)";
    box.style.height = "950px";
    box.style.width = "900px";
    ball.style.width = "40px";
    ball.style.height = "40px";
    ball.style.borderRadius = "50%";
    ball.style.transform = "translate(-50%, -50%)";
    ball.style.color = "";
  });
});

// const b1 = document.querySelector(".b1");
// const b2 = document.querySelector(".b2");
// const b3 = document.querySelector(".b3");
// const b4 = document.querySelector(".b4");

// b1.forEach(element => {
//     element.addEventListener("mouseenter",()=>{
//         ball.style.textContent = "MATERA";
//     })
// });

const buttons = document.querySelectorAll(".b1, .b2, .b3, .b4");

const texts = ["MATERA", "CHANCE", "SILVR", "INTRAMUROS"];

const h_boxes = document.querySelectorAll(".hb1, .hb2, .hb3, .hb4");

buttons.forEach((button, index) => {
  button.addEventListener("mouseenter", () => {
    ball.textContent = texts[index];
    h_boxes[index].style.visibility = "visible";
    h_boxes[index].style.opacity = "1"; // Optional: smooth fade in
  });
  button.addEventListener("mouseleave", () => {
    h_boxes[index].style.visibility = "hidden";
    h_boxes[index].style.opacity = "0";
  });
});

// const s_boxes = document.querySelectorAll(".sb1, .sb2, .sb3, .sb4, .sb5, .sb6, .sb7");

// s_boxes.forEach((s_box, index) => {
//     s_box.addEventListener("mouseenter", () => {
//         s_box.style.opacity = "0.3";
//     })
//     s_box.addEventListener("mouseleave", () => {
//         s_box.style.opacity = "1";
//     })
// })

const s_boxes = document.querySelectorAll(
  ".sb1, .sb2, .sb3, .sb4, .sb5, .sb6, .sb7",
);
const v_boxes = document.querySelectorAll(
  ".sbh1, .sbh2, .sbh3, .sbh4, .sbh5, .sbh6, .sbh7",
);
const ser_p = document.querySelectorAll(".p1, .p2, .p3, .p4, .p5, .p6, .p7");

s_boxes.forEach((s_box, index) => {
  s_box.addEventListener("mouseenter", () => {
    s_boxes.forEach((box) => {
      if (box !== s_box) {
        box.style.opacity = "0.3";
      }
    });
    v_boxes[index].classList.add("active");
    ser_p[index].classList.add("active");
  });

  s_box.addEventListener("mouseleave", () => {
    s_boxes.forEach((box) => {
      box.style.opacity = "1";
    });
    v_boxes[index].classList.remove("active");
    ser_p[index].classList.remove("active");
  });
});
