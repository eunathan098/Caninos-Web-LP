function abrirContainer(){
    let container = document.getElementById("container");

    container.style.display = "block";
}

function enviarMsg(){
    let botao = document.getElementById("enviar");
    prompt("O que você achou da Landding Page?");
    alert("Obrigado pelo feedback ;)")
}