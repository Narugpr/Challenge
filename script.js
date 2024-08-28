function encryptText() {
    let inputText = document.getElementById('inputText').value.toLowerCase();
    let encryptedText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById('outputMessage').innerText = encryptedText ? encryptedText : "Ningún mensaje fue encontrado";
}

function decryptText() {
    let inputText = document.getElementById('inputText').value.toLowerCase();
    let decryptedText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById('outputMessage').innerText = decryptedText ? decryptedText : "Ningún mensaje fue encontrado";
}

function copyToClipboard() {
    let outputMessage = document.getElementById('outputMessage').innerText;
    navigator.clipboard.writeText(outputMessage).then(() => {
        alert('Texto copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar', err);
    });
}
