// Obtém os elementos necessários
const modal = document.getElementById("myModal");
const lapis = document.getElementById("lapis"); // Botão para abrir o modal
const fechar = document.getElementById("fechar"); // Botão para fechar o modal
const closeSpan = document.getElementsByClassName("close")[0]; // O "X" do modal

// Função para abrir o modal
lapis.onclick = function() {
    modal.classList.add("active"); // Adiciona a classe "active", tornando o modal visível
}

// Função para fechar o modal
fechar.onclick = function() {
    modal.classList.remove("active"); // Remove a classe "active", ocultando o modal
}

closeSpan.onclick = function() {
    modal.classList.remove("active"); // Remove a classe "active" quando o usuário clicar no "X"
}

// Fecha o modal quando o usuário clica fora dele
window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove("active"); // Remove a classe "active" quando o usuário clicar fora do modal
    }
}



