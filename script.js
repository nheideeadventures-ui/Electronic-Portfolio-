/* ========================= */
/* ✨ WELCOME TEXT TYPING */
/* ========================= */

const welcome = document.getElementById("welcomeText");

if (welcome) {

const text = "Welcome to my 3rd & 4th Quarter E-Portfolio";
let i = 0;

function typeWriter(){
    if(i < text.length){
        welcome.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 60);
    }
}

welcome.innerHTML = "";
typeWriter();

}



/* ========================= */
/* 🌌 LOFI FLOATING STARS */
/* ========================= */

function createStar(){

const star = document.createElement("div");

star.innerHTML = "✦";

star.style.position = "fixed";
star.style.left = Math.random() * window.innerWidth + "px";
star.style.top = window.innerHeight + "px";
star.style.fontSize = Math.random() * 10 + 8 + "px";
star.style.opacity = "0.3";
star.style.pointerEvents = "none";

document.body.appendChild(star);

let pos = window.innerHeight;

const float = setInterval(()=>{

pos -= 1.5;
star.style.top = pos + "px";

if(pos < -50){
star.remove();
clearInterval(float);
}

},30);

}

setInterval(createStar,1800);



/* ========================= */
/* 🌸 CUTE CURSOR SPARKLES */
/* ========================= */

const cuteSparkles = ["🌸","✨","💙","🫧"];

let sparkleCooldown = 0;

document.addEventListener("mousemove",(e)=>{

if(sparkleCooldown > 0){
sparkleCooldown--;
return;
}

sparkleCooldown = 8;

const sparkle = document.createElement("div");

sparkle.innerHTML = cuteSparkles[Math.floor(Math.random()*cuteSparkles.length)];

sparkle.style.position = "absolute";
sparkle.style.left = e.pageX + "px";
sparkle.style.top = e.pageY + "px";
sparkle.style.fontSize = "14px";
sparkle.style.pointerEvents = "none";
sparkle.style.opacity = "0.9";
sparkle.style.transition = "all 0.8s ease";

document.body.appendChild(sparkle);

setTimeout(()=>{
sparkle.style.transform = "translateY(-15px)";
sparkle.style.opacity = "0";
},50);

setTimeout(()=>{
sparkle.remove();
},800);

});



/* ========================= */
/* 🔘 BUTTON CLICK POP */
/* ========================= */

const buttons = document.querySelectorAll("a");

buttons.forEach(btn => {

btn.addEventListener("click", ()=>{

btn.style.transform = "scale(1.12)";

setTimeout(()=>{
btn.style.transform = "scale(1)";
},200);

});

});

/* ========================= */
/* ☁️ LOFI CLOUD GENERATOR – FULL SKY ON LOAD */
/* ========================= */

function createCloud(initial = true) {
  const cloud = document.createElement("div");
  cloud.className = "cloud";

  // -------------------------
  // RANDOM PLACEMENT & SIZE
  // -------------------------

  // random vertical position (10% - 90% of screen height)
  cloud.style.top = Math.random() * 80 + 10 + "%";

  // random size (scale 0.5 - 1.2)
  const scale = Math.random() * 0.7 + 0.5;
  cloud.style.transform = "scale(" + scale + ")";

  // random horizontal position
  if (initial) {
    // For initial load: anywhere across the screen
    cloud.style.left = Math.random() * window.innerWidth + "px";
  } else {
    // For respawn: start off-screen left
    cloud.style.left = -Math.random() * 200 - 100 + "px";
  }

  // -------------------------
  // RANDOM SPEED
  // -------------------------
  const duration = Math.random() * 70 + 50; // 50s - 120s
  cloud.style.animationDuration = duration + "s";

  document.body.appendChild(cloud);

  // -------------------------
  // REMOVE & RESPAWN CLOUD
  // -------------------------
  setTimeout(() => {
    cloud.remove();
    createCloud(false); // respawn starting off-screen left
  }, duration * 1000);
}

// -------------------------
// SPAWN CLOUDS ON PAGE LOAD
// -------------------------
const initialClouds = 25; // how many clouds to fill the sky immediately
for (let i = 0; i < initialClouds; i++) {
  createCloud(true);
}

