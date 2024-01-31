function encryptText() {
    const inputText = document.getElementById("inputText").value;
    const outputText = document.getElementById("outputText");
    
    // Realiza la encriptación según las reglas especificadas
    const encryptedText = inputText.replace(/e/g, "enter")
                                   .replace(/i/g, "imes")
                                   .replace(/a/g, "ai")
                                   .replace(/o/g, "ober")
                                   .replace(/u/g, "ufat");

    outputText.value = encryptedText;

    // Borra el contenido del área de texto original después de encriptar
    document.getElementById("inputText").value = "";
}

function decryptText() {
    const inputText = document.getElementById("outputText").value;
    const outputText = document.getElementById("inputText");
    
    // Realiza la desencriptación inversa de las reglas especificadas
    const decryptedText = inputText.replace(/enter/g, "e")
                                   .replace(/imes/g, "i")
                                   .replace(/ai/g, "a")
                                   .replace(/ober/g, "o")
                                   .replace(/ufat/g, "u");

    outputText.value = decryptedText;

    // Borra el contenido del área de texto encriptado después de desencriptar
    document.getElementById("outputText").value = "";
}

function copyToClipboard() {
    const outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");

    const copyMessage = document.getElementById("copyMessage");
    copyMessage.textContent = "Texto copiado al portapapeles";

    setTimeout(() => {
        copyMessage.textContent = "";
    }, 2000);
}

function clearText() {
    document.getElementById("inputText").value = "";
    document.getElementById("outputText").value = "";
}