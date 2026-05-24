let over_menu = document.querySelector(".menu-overlay");
let hero = document.querySelector(".hero-one");
let menu_p = document.querySelector(".menu-p");
let flag = 1;
let textTimeout; // Variable to hold our animation timer

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

const ball = document.querySelector(".ball");

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

    });

    box.addEventListener("mouseleave", ()=>{

        image.style.filter = "blur(0px)";
        box.style.height = "850px";
        box.style.width = "900px";

    });

});

