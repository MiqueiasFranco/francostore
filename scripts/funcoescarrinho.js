for (const produto of produtos) {
    document.getElementById(`adicionar${produto.id}`).addEventListener("click", () => adicionarAoCarrinho(produto.id));
}

function atualizarquantidade(idProduto) {
    document.getElementById(`quantidade${idProduto}`).innerText = idquantidadeproduto[idProduto];
}

function incrementarproduto(idProduto) {
    idquantidadeproduto[idProduto]++
    atualizarquantidade(idProduto)
    atualizarPrecoCarrinho()

}
function decrementarproduto(idProduto) {
    if (idquantidadeproduto[idProduto] === 1) {
        removerDoCarrinho(idProduto);
        return;
    }
    idquantidadeproduto[idProduto]--;
    atualizarquantidade(idProduto);
    atualizarPrecoCarrinho()
}



const idquantidadeproduto = {};

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



function removerDoCarrinho(idProduto) {
    delete idquantidadeproduto[idProduto];
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
