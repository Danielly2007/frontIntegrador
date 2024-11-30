// Obtém os elementos necessários
const modal = document.getElementById("myModal");
const lapis = [...document.querySelectorAll(".lapis1")]; // Botão para abrir o modal
const fechar = document.getElementById("fechar"); // Botão para fechar o modal
const closeSpan = document.getElementsByClassName("close")[0]; // O "X" do modal
const loadImageBtn = document.getElementById('loadImageBtn');
const imagePlaceholder = document.getElementById('imagePlaceholder');
const imageStatus = document.getElementById('imageStatus');
const imageInput = document.getElementById('imageInput');
const fileName = document.getElementById('fileName');

// Função para abrir o modal
lapis.forEach((e)=>{
    e.addEventListener("click",()=>{
        modal.classList.toggle("active");
        console.log(modal)
    })
    
})

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

// Função para enviar o formulário
document.getElementById('myForm').onsubmit = function(event) {
    event.preventDefault(); // Evitar o envio do formulário para o servidor
  
    const name = document.getElementById('name').value;
    const preco = document.getElementById('preco').value;
    const marca = document.getElementById('marca').value;
  
    // Simulando o envio dos dados
    console.log(`Nome: ${name}`);
    console.log(`Preço: ${preco}`);
    console.log(`Marca: ${marca}`);
};

// Função para carregar a imagem
loadImageBtn.onclick = function() {
    // URL da imagem (pode ser qualquer imagem online ou local)
    const imageUrl = '';  // Exemplo de URL de uma imagem
  
    // Definir o atributo src para a URL da imagem
    imagePlaceholder.src = imageUrl;
  
    // Exibir a imagem e esconder o texto de status
    imagePlaceholder.style.display = 'block';
    imageStatus.style.display = 'none';
  };

  // Exemplo com Express.js no backend

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Endpoint para receber os dados
app.put('/http://localhost:8080/perfumaria/10', (req, res) => {
  const dados = req.body; // Recebe os dados do frontend
  console.log(dados); // Salvar no banco de dados aqui
  res.status(200).json({ mensagem: 'Dados salvos com sucesso' });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});






