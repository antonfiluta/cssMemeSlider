const memeUlC = document.getElementById("memeUl");
const memeTextC = document.getElementById("textUl");
const BW11 = document.getElementById("BW1");
const BW12 = document.getElementById("BW2");
const BW13 = document.getElementById("BW3");
const BW14 = document.getElementById("BW4");

const but1 = document.getElementById("b1");
const but2 = document.getElementById("b2");
const but3 = document.getElementById("b3");
const but4 = document.getElementById("b4");

function slider(n) {
   if (window.innerWidth < 700) {
    let marginI = -94 * n + "vw";
    let marginT = -26 * n + "vw";
    memeUlC.style.marginLeft = marginI;
    memeTextC.style.marginLeft = marginT;
   } else {
    let marginI = -94 * n + "vw";
    let marginT = -21 * n + "vw";
    memeUlC.style.marginLeft = marginI;
    memeTextC.style.marginLeft = marginT;
   }
}

function MO1() {
    but1.style.backgroundColor = "yellow";
     but1.style.borderColor = "yellow"
}

function MOut1() {
    but1.style.backgroundColor = "white"; 
    but1.style.borderColor = "white"
}

function MO2() {
    but2.style.backgroundColor = "yellow";
     but2.style.borderColor = "yellow"
}

function MOut2() {
    but2.style.backgroundColor = "white"; 
    but2.style.borderColor = "white"
}

function MO3() {
    but3.style.backgroundColor = "yellow";
     but3.style.borderColor = "yellow"
}

function MOut3() {
    but3.style.backgroundColor = "white"; 
    but3.style.borderColor = "white"
}

function MO4() {
    but4.style.backgroundColor = "yellow";
     but4.style.borderColor = "yellow"
}

function MOut4() {
    but4.style.backgroundColor = "white"; 
    but4.style.borderColor = "white"
}

BW11.addEventListener("mouseover", MO1);
BW11.addEventListener("mouseout", MOut1);
BW12.addEventListener("mouseover", MO2);
BW12.addEventListener("mouseout", MOut2);
BW13.addEventListener("mouseover", MO3);
BW13.addEventListener("mouseout", MOut3);
BW14.addEventListener("mouseover", MO4);
BW14.addEventListener("mouseout", MOut4);

BW11.addEventListener("click", () => {
    BW11.removeEventListener("mouseover", MO1);
    BW11.removeEventListener("mouseout", MOut1);
    but1.style.backgroundColor = "transparent"; 
    but1.style.borderColor = "white";
BW12.addEventListener("mouseover", MO2);
BW12.addEventListener("mouseout", MOut2);
BW13.addEventListener("mouseover", MO3);
BW13.addEventListener("mouseout", MOut3);
BW14.addEventListener("mouseover", MO4);
BW14.addEventListener("mouseout", MOut4);

but2.style.backgroundColor = "white"; 
but3.style.backgroundColor = "white"; 
but4.style.backgroundColor = "white"; 
});

BW12.addEventListener("click", () => {
    BW12.removeEventListener("mouseover", MO2);
    BW12.removeEventListener("mouseout", MOut2);
    but2.style.backgroundColor = "transparent"; 
    but2.style.borderColor = "white";
BW11.addEventListener("mouseover", MO1);
BW11.addEventListener("mouseout", MOut1);
BW13.addEventListener("mouseover", MO3);
BW13.addEventListener("mouseout", MOut3);
BW14.addEventListener("mouseover", MO4);
BW14.addEventListener("mouseout", MOut4);

but1.style.backgroundColor = "white"; 
but3.style.backgroundColor = "white"; 
but4.style.backgroundColor = "white"; 
});

BW13.addEventListener("click", () => {
    BW13.removeEventListener("mouseover", MO3);
    BW13.removeEventListener("mouseout", MOut3);
    but3.style.backgroundColor = "transparent"; 
    but3.style.borderColor = "white";
    BW11.addEventListener("mouseover", MO1);
    BW11.addEventListener("mouseout", MOut1);
    BW12.addEventListener("mouseover", MO2);
    BW12.addEventListener("mouseout", MOut2);
    BW14.addEventListener("mouseover", MO4);
    BW14.addEventListener("mouseout", MOut4);

but2.style.backgroundColor = "white"; 
but1.style.backgroundColor = "white"; 
but4.style.backgroundColor = "white"; 
});

BW14.addEventListener("click", () => {
    BW14.removeEventListener("mouseover", MO4);
    BW14.removeEventListener("mouseout", MOut4);
    but4.style.backgroundColor = "transparent"; 
    but4.style.borderColor = "white";
    BW11.addEventListener("mouseover", MO1);
    BW11.addEventListener("mouseout", MOut1);
    BW12.addEventListener("mouseover", MO2);
    BW12.addEventListener("mouseout", MOut2);
    BW13.addEventListener("mouseover", MO3);
    BW13.addEventListener("mouseout", MOut3);

    but2.style.backgroundColor = "white"; 
but3.style.backgroundColor = "white"; 
but1.style.backgroundColor = "white"; 
});
