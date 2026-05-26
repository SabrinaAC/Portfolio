const galerias = {
    "acai": [
        "./img/acai-1.jpg",
        "./img/acai-2.jpg",
        "./img/acai-3.jpg"
    ],
    "kickboxing": [
        "./img/Kickboxing.jpg",
        "./img/kickboxing-2.jpg",
        "./img/kickboxing-3.jpg"
    ],
    "login": [
        "./img/login-cadastro.jpg"
    ]
};

let imagensAtuais = [];
let indiceAtual = 0;

function abrirPopup(img) {
    const galeria = img.getAttribute("data-galeria");
    imagensAtuais = galerias[galeria] || [img.src];
    indiceAtual = 0;

    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");
    popupImg.src = imagensAtuais[indiceAtual];
    popup.style.display = "flex";
}

function fecharPopup() {
    document.getElementById("popup").style.display = "none";
}

function proximaImagem() {
    if (imagensAtuais.length > 1) {
        indiceAtual = (indiceAtual + 1) % imagensAtuais.length;
        document.getElementById("popup-img").src = imagensAtuais[indiceAtual];
    }
}

function imagemAnterior() {
    if (imagensAtuais.length > 1) {
        indiceAtual = (indiceAtual - 1 + imagensAtuais.length) % imagensAtuais.length;
        document.getElementById("popup-img").src = imagensAtuais[indiceAtual];
    }
}

// Fechar popup clicando fora da imagem
document.getElementById("popup").addEventListener("click", function (e) {
    if (e.target === this) fecharPopup();
});
