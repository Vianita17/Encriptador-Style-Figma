let text_in = document.querySelector("#textarea_in");
let text_out = document.querySelector("#textarea_out");
let en = document.querySelector("#encriptar");
let des = document.querySelector("#desencriptar");
let cop = document.querySelector("#copiar");
let condition = document.querySelector("#condicion");
let presentation_initial = document.getElementById("initial");
let presentation_final = document.getElementById("final");


function encrypt() { //Primera forma de hacer una forma condicional pero mas compacta
    const text = text_in.value.trim();
    // Validar si el texto contiene solo letras minúsculas y espacios
    if (/^[a-z\s]+$/.test(text)) {
        if (text === "" || text.replace(/\s+/g, "") === "") {
            // Mostrar mensaje inicial si el texto está vacío o solo contiene espacios
            condition_texto_inicial
            condition_initial();
        } else {
            // Encriptar el texto
            condition_initial();
            condition_texto_inicial();
            let encryption = text
                .replaceAll("e", "enter")
                .replaceAll("i", "imes")
                .replaceAll("a", "ai")
                .replaceAll("o", "ober")
                .replaceAll("u", "ufat");
            // Mostrar el texto encriptado
            condition_final();
            text_out.innerHTML = encryption;
        }
    } else {
        // Mostrar mensaje de error si el texto contiene caracteres no permitidos
        condition_texto_adv();
        condition_initial();
    }
}


function desencrypt() { //Segunda forma de hacer una forma mas condicional
    const text = text_in.value.trim(); // Eliminando espacios innecesarios
    if (text !== "") {
        condition_initial();
        condition_texto_inicial();
        for (let i = 0; i < text.length; i++) {// for para recorrer el texto que entre a la logica
            if (((text[i] < 'a') || (text[i] > 'z')) && (text[i] !== ' ')) { // Validar si el texto contiene solo letras minúsculas y espacios
                condition_texto_adv();
                condition_initial();
                return;
            } else if ((text.length === 1 && text === " ") || text.replace(/ /g, "") === "") { // Si no trae nada el text
                condition_initial();
                condition_texto_inicial();
                return;
            }
        }
        // Encriptar el texto
        let desencryption = text
            .replaceAll("ai", "a")
            .replaceAll("enter", "e")
            .replaceAll("imes", "i")
            .replaceAll("ober", "o")
            .replaceAll("ufat", "u");

        condition_final();
        text_out.innerHTML = desencryption;//Devolviendo el texto incriptado
    }
}

function copy() { //Cong. botono copiar
    let copys = text_out.value;
    navigator.clipboard.writeText(copys);
}
function condition_initial(){//Condiciones iniciales del mesanje donde aparece el encriptado
    presentation_initial.style.display = "flex";
    presentation_final.style.display = "none";
}
function condition_final(){//Condiciones para mostrar encriptado
    presentation_initial.style.display = "none";
    presentation_final.style.display = "flex";
}
function condition_texto_inicial(){ //Cong. del mensaje de advertencia normal
    condition.style.color = "#495057";
    condition.style.fontSize = "1.2rem";
    condition.style.fontWeight = "normal"
}
function condition_texto_adv(){//Cong. del mensaje de advertencia cuando no correctamente el texto
    //solo se resalta el rojo
    condition.style.color = "#FF204E";
    condition.style.fontSize = "2rem";
    condition.style.fontWeight = "borlder"
}

// MAIN

//Manera con los Inputs en FORM

en.addEventListener('click', encrypt);
des.addEventListener('click', desencrypt);
cop.addEventListener('click', copy);

//Manera si en vez de imput son button en el HTML en un FORM

/*en.addEventListener('click', function(event) {
    event.preventDefault(); // Previene el envío del formulario
    encrypt(); // Llama a la función de encriptar
});

des.addEventListener('click', function(event) {
    event.preventDefault(); // Previene el envío del formulario
    desencrypt(); // Llama a la función de desencriptar
});

cop.addEventListener('click', function(event) {
    event.preventDefault(); // Previene el envío del formulario
    copy(); // Llama a la función de copiar
});*/

