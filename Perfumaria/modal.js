// Obtém os elementos necessários
const modal = document.getElementById("myModal");
const lapis = [...document.querySelectorAll(".lapis1")]; // Botão para abrir o modal
const fechar = document.getElementById("fechar"); // Botão para fechar o modal
const closeSpan = document.getElementsByClassName("close")[0]; // O "X" do modal

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

// ---------------------------- adicionar ------------------------


const form = document.getElementById('produtoForm');
const produtosList = document.getElementById('produtosList');

// Adicionar novo perfume
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const imagemUrl = document.getElementById('imagemUrl').value;

    const produto = { nome, imagemUrl };

    try {
        // Envia a requisição POST para adicionar um novo perfume
        const response = await fetch('http://localhost:8080/perfumaria/perfume', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(produto)
        });

        if (response.ok) {
            await listarProdutos(); // Atualiza a lista após adicionar
            form.reset(); // Limpa o formulário
        } else {
            alert('Erro ao adicionar perfume');
        }
    } catch (error) {
        console.error('Erro:', error);
    }
});

// Função para listar todos os perfumes
async function listarProdutos() {
    try {
        const response = await fetch('http://localhost:8080/perfumaria/perfume');
        const produtos = await response.json();

        produtosList.innerHTML = ''; // Limpa a lista existente

        // Adiciona cada perfume na lista
        produtos.forEach(produto => {
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>${produto.nome}</strong><br>
                <img src="${produto.imagemUrl}" alt="${produto.nome}" width="100"><br>
                <button onclick="deletarProduto(${produto.id})">Deletar</button>
            `;
            produtosList.appendChild(li);
        });
    } catch (error) {
        console.error('Erro:', error);
    }
}

// Função para deletar um perfume
async function deletarProduto(id) {
    if (confirm('Tem certeza que deseja deletar este perfume?')) {
        try {
            const response = await fetch(`http://localhost:8080/perfumaria/${id}/`, {
                method: 'DELETE'
            });

            if (response.ok) {
                await listarProdutos(); // Atualiza a lista após deletar
            } else {
                alert('Erro ao deletar perfume');
            }
        } catch (error) {
            console.error('Erro:', error);
        }
    }
}

// Carrega os perfumes ao iniciar a página
listarProdutos();


