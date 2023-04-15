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

function checkSpellEncode() {
    let teste = document.querySelector(".alerta");
    const charactersFilter = new RegExp(/[^a-z ]/, 'g');

    if (charactersFilter.test(plainText)) {
        teste.innerHTML = "não pode";
        teste.style.display = "block";
    } else {
        teste.innerHTML = plainText;
        teste.style.display = "block";
        copyText();
    }
}

function copyText() {
    let teste = document.querySelector(".alerta");
    copyButton.addEventListener("click", () => {
        navigator.clipboard.writeText(teste.innerHTML);
        alert("texto copiado");
    })
}