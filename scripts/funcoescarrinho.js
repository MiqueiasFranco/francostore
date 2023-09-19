for (const produto of produtos) {
    document.getElementById(`adicionar${produto.id}`).addEventListener("click", () => adicionarAoCarrinho(produto.id));
}

function atualizarquantidade(idProduto) {
    document.getElementById(`quantidade${idProduto}`).innerText = idquantidadeproduto[idProduto];
}

const idquantidadeproduto = lerLocalStorage('carrinho') ?? {};




function renderizarProdutoNoCarrinho() {
    const carrinhoid = document.getElementById('produtocarrinho');
    carrinhoid.innerHTML = ''
    for (const idProduto in idquantidadeproduto) {
        desenharProdutoNoCarrinho(idProduto)
    }

}

function desenharProdutoNoCarrinho(idProduto) {

    const elementoArticle = document.createElement('article');
    elementoArticle.classList.add('produto');
    const carrinhoid = document.getElementById('produtocarrinho');
    const produto = produtos.find((p) => p.id === idProduto);
    const produtoCarrinho = `
        <button onclick="removerDoCarrinho(${produto.id})" id="fechar-produto">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="black" class="bi bi-x-circle-fill"
            viewBox="0 0 16 16">
            <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
            </svg>
        </button>
        <img src="${produto.imagem}"
            alt="${produto.nome}">
        <div>
            <p>${produto.nome}</p>
            <p id="cor">${produto.marca}</p>
            <p id="preco">R$ ${produto.preco}</p>
            <button id="comprar">Comprar</button>
        </div>
        <div class="botoes-carrinho">
            <button id="decrementar${produto.id}">-</button>
            <p id="quantidade${produto.id}">${idquantidadeproduto[produto.id]}</p>
            <button id="incrementar${produto.id}">+</button>
        </div>`;
    elementoArticle.innerHTML = produtoCarrinho
    carrinhoid.appendChild(elementoArticle);
    document.getElementById(`decrementar${produto.id}`).addEventListener('click', () => decrementarproduto(produto.id));
    document.getElementById(`incrementar${produto.id}`).addEventListener('click', () => incrementarproduto(produto.id));
}


function incrementarproduto(idProduto) {
    idquantidadeproduto[idProduto]++
    salvarLocalStorage('carrinho', idquantidadeproduto)
    atualizarquantidade(idProduto)
    atualizarPrecoCarrinho()

}
function decrementarproduto(idProduto) {
    if (idquantidadeproduto[idProduto] === 1) {
        removerDoCarrinho(idProduto);
        return;
    }
    idquantidadeproduto[idProduto]--;
    salvarLocalStorage('carrinho', idquantidadeproduto)
    atualizarquantidade(idProduto);
    atualizarPrecoCarrinho()

}



function removerDoCarrinho(idProduto) {
    delete idquantidadeproduto[idProduto];
    salvarLocalStorage('carrinho', idquantidadeproduto)
    atualizarPrecoCarrinho()
    renderizarProdutoNoCarrinho(idProduto)

}

function adicionarAoCarrinho(idProduto) {
    if (idProduto in idquantidadeproduto) {
        atualizarPrecoCarrinho();
        incrementarproduto(idProduto);
        return;
    }
    idquantidadeproduto[idProduto] = 1
    salvarLocalStorage('carrinho', idquantidadeproduto)
    desenharProdutoNoCarrinho(idProduto);
    carrinhoOnOf();

}

function atualizarPrecoCarrinho() {
    const PrecoCarrinho = document.getElementById('precototal')
    let precototalcarrinho = 0
    for (const produtonocarrinho in idquantidadeproduto) {
        precototalcarrinho += produtos.find((p) => p.id === produtonocarrinho).preco * idquantidadeproduto[produtonocarrinho];
    }
    PrecoCarrinho.innerText = `Total: $${precototalcarrinho}`;
}

function salvarLocalStorage(chave, informacao) {
    localStorage.setItem(chave, JSON.stringify(informacao));
}

function lerLocalStorage(chave) {
    return JSON.parse(localStorage.getItem(chave));
}