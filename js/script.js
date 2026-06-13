// Typing Effect

const text = "Web Developer | Product Designer";

let i = 0;

function typingEffect() {

    if(i < text.length){

        document.querySelector("h2").innerHTML += text.charAt(i);

        i++;

        setTimeout(typingEffect,100);

    }
}

window.onload = typingEffect;