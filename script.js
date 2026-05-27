let over_menu = document.querySelector(".menu-overlay");
let hero = document.querySelector(".hero-one");
let menu_p = document.querySelector(".menu-p");
let flag = 1;
let textTimeout;
const ball = document.querySelector(".ball");

menu_p.addEventListener("click",()=>{
    if (flag){
        over_menu.style.top = "-57%";
        menu_p.textContent = "CLOSE"
        // over_menu.style.width = "220%";
        // over_menu.style.height = "205%";
        over_menu.style.left = "-60%";
        over_menu.style.transform = "rotate(25deg) translateY(200px)";
        textTimeout = setTimeout(() => {
            over_menu.classList.add("text-animate");
        }, 1500);
        flag = 0;
    }
    else{
        over_menu.style.top = "-205%";
        menu_p.textContent = "MENU"
        over_menu.style.left = "0%";
        over_menu.style.transform = "rotate(0deg)";
        over_menu.style.width = "220%";
        over_menu.style.height = "205%";
        clearTimeout(textTimeout);
        over_menu.classList.remove("text-animate");

        flag = 1;
    }
});

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", (e)=>{

    mouseX = e.clientX;
    mouseY = e.clientY;

});

function animate(){

    currentX += (mouseX - currentX) * 0.08;
    currentY += (mouseY - currentY) * 0.08;

    ball.style.left = currentX + "px";
    ball.style.top = currentY + "px";

    requestAnimationFrame(animate);
}

animate();

const boxes = document.querySelectorAll(".boxes");

boxes.forEach((box)=>{

    const image = box.querySelector("img");

    box.addEventListener("mouseenter", ()=>{

        image.style.filter = "blur(8px)";
        box.style.height = "845px";
        box.style.width = "895px";
        ball.style.width = "125px";
        ball.style.height = "50px";
        ball.style.borderRadius = "10px";
        ball.style.position = "fixed";
        ball.style.transform = "rotate(-20deg)";
        ball.style.color = "white";
        if (box.getElementsByClassName == ".boxes b1") {
             ball.style.textContent = "MATERA";
        }

    });

    box.addEventListener("mouseleave", ()=>{

        image.style.filter = "blur(0px)";
        box.style.height = "850px";
        box.style.width = "900px";
        ball.style.width = "40px";
        ball.style.height = "40px";
        ball.style.borderRadius = "50%";
        ball.style.transform = "translateX(0px)";
        ball.style.color = "#4361ee";

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

buttons.forEach((button, index) => {
  button.addEventListener("mouseenter", () => {
    ball.textContent = texts[index];
  });
});