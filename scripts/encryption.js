let normalText = document.getElementById("text-area");
let plainText;

const letters = ["e", "i", "a", "o", "u"];
const encodedLetter = ["enter", "imes", "ai", "ober", "ufat"];

let encryptButton = document.querySelector(".encryption-button");
let decryptButton = document.querySelector(".decryption-button");
let copyButton = document.querySelector(".copy-button");

encryptButton.addEventListener("click", () => {
    plainText = normalText.value;
    encrypt();
});

decryptButton.addEventListener("click", () => {
    plainText = normalText.value;
    decrypt();
})

function encrypt() {
    for (let i = 0; i < letters.length; i++) {
        const letterPattern = new RegExp(letters[i], 'g');
        plainText = plainText.replace(letterPattern, encodedLetter[i]);
    }
    checkSpellEncode();
}

function decrypt() {
    for (let i = 0; i < encodedLetter.length; i++) {
        const codePattern = new RegExp(encodedLetter[i], 'g');
        plainText = plainText.replace(codePattern, letters[i]);
    }
    checkSpellEncode();

}

// CRIAR UMA FUNÇÃO QUE IMPEÇA O USO DE PALAVRAS SEM VOGAIS 
// TENTAR FAZER O OUTPUT SER VISUALMENTE IDENTICO AO INPUT 
// CRIAR UMA FUNÇÃO QUE PERMITA APENAS CARACTERES UTF-8
// CRIAR UMA FUNÇÃO QUE VERIFICA SE O TEXTO CONTÉM APENAS ESPAÇOS OU ENTERS

const textOutput = document.querySelector(".main__output-text");

function checkSpellEncode() {
    const error = document.querySelector(".invalid-character");
    const result = document.querySelector(".main__decryption-area");

    const warning = document.querySelector(".main__output-warning");

    const charactersFilter = new RegExp(/[^a-z /\n/]/, 'g');

    if (charactersFilter.test(plainText)) {
        warning.style.display = "none";
        result.style.display = "none";
        error.style.display = "flex";
    } else if (plainText === "") {
        result.style.display = "none";
        error.style.display = "none";
        warning.style.display = "flex";
    } else {
        warning.style.display = "none";
        error.style.display = "none";
        result.style.display = "flex";
        textOutput.innerHTML = plainText;
        copyText();
    }
    window.scrollBy({
        top: 1000000,
        behavior: 'smooth'
    });

    result.scrollBy({
        top: 1000000,
        behavior: 'smooth'
    })

    copyButton.innerHTML = "Copiar";
}

function copyText() {
    copyButton.addEventListener("click", () => {
        copyButton.innerHTML = "Texto copiado!";
        navigator.clipboard.writeText(textOutput.innerHTML);

    })
}