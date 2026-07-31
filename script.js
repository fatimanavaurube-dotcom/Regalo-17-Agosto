const unlockDate = new Date("August 17, 2026 00:00:00").getTime();

const countdown = document.getElementById("countdown");
const videoSection = document.getElementById("videoSection");
const letterSection = document.getElementById("letterSection");
const video = document.getElementById("specialVideo");

const bell = new Audio("campanas.mp3");

const messages = [
"Todo tiene su momento.",
"Gracias por formar parte de una etapa importante.",
"Siempre desearé cosas buenas para ti.",
"Las personas dejan recuerdos que valen mucho.",
"Espero que este detalle te saque una sonrisa.",
"A veces un pequeño gesto dice más que muchas palabras.",
"Gracias por los momentos compartidos.",
"La vida sigue escribiendo nuevas historias.",
"Que nunca te falten motivos para sonreír.",
"Disfruta este regalo, fue hecho con cariño."
];

setInterval(() => {
    const now = new Date().getTime();
    const distance = unlockDate - now;

    if (distance <= 0) {
        countdown.innerHTML = "🎉 ¡Ya puedes abrir tu regalo!";
        videoSection.style.display = "block";
        return;
    }

    const days = Math.floor(distance / (1000*60*60*24));
    const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((distance%(1000*60*60))/(1000*60));
    const seconds = Math.floor((distance%(1000*60))/1000);

    countdown.innerHTML =
    `${days} días ${hours} horas ${minutes} minutos ${seconds} segundos`;
},1000);

const messageBox = document.getElementById("message-box");

document.querySelector(".gift-box").addEventListener("click", () => {
    const random =
        messages[Math.floor(Math.random() * messages.length)];

    messageBox.innerHTML = "✨ " + random;
});

function createStar() {

    const star = document.createElement("div");

    star.innerHTML = "⭐";

    star.style.position = "fixed";
    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.top = Math.random() * window.innerHeight + "px";
    star.style.fontSize = (18 + Math.random() * 18) + "px";
    star.style.cursor = "pointer";
    star.style.userSelect = "none";

    star.onclick = () => {

        const random =
            messages[Math.floor(Math.random() * messages.length)];

        messageBox.innerHTML = "✨ " + random;

        star.remove();

        createStar();

    };

    document.body.appendChild(star);

}

for (let i = 0; i < 25; i++) {

    createStar();

}
video.addEventListener("ended", () => {

    bell.play();

    setTimeout(() => {

        letterSection.style.display = "block";

        letterSection.scrollIntoView({
            behavior: "smooth"
        });

    }, 2000);

});

for(let i=0;i<5;i++){

    setInterval(()=>{

        const shooting=document.createElement("div");

        shooting.innerHTML="🌠";

        shooting.style.position="fixed";
        shooting.style.left=Math.random()*window.innerWidth+"px";
        shooting.style.top=Math.random()*200+"px";
        shooting.style.fontSize="28px";
        shooting.style.transition="all 2s linear";
        shooting.style.pointerEvents="none";

        document.body.appendChild(shooting);

        setTimeout(()=>{
            shooting.style.transform="translate(-400px,300px)";
            shooting.style.opacity="0";
        },100);

        setTimeout(()=>{
            shooting.remove();
        },2200);

    },3000+i*800);

}