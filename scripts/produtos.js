
const produtos = [
    {
        id: '1',
        nome: 'Iphone XR',
        marca: 'Apple',
        preco: 3000,
        imagem: 'https://exitocol.vtexassets.com/arquivos/ids/4815447-800-auto?width=800&height=auto&aspect=true',
    },
    {
        id: '2',
        nome: 'Iphone 11 plus',
        marca: 'Apple',
        preco: 3500,
        imagem: 'https://www.thekase.com/on/demandware.static/-/Sites-tk-product/default/dwf266d1c2/38960428/132183_medium.png',
    },
    {
        id: '3',
        nome: 'Iphone 12',
        marca: 'Apple',
        preco: 4000,
        imagem: 'https://ipartner.com.ua/image/cache/catalog/imgmainru2_191/clearapple-iphone-11-128-gb-red-krasnij-680x630.jpeg',
    },
    {
        id: '4',
        nome: 'Iphone 12 plus',
        marca: 'Apple',
        preco: 4500,
        imagem: 'https://firstmarkt.es/wp-content/uploads/2021/10/iphone-13-pro-max-grafito-3.png',

    },
    {
        id: '5',
        nome: 'Iphone 13',
        marca: 'Apple',
        preco: 5000,
        imagem: 'https://th.bing.com/th/id/OIP.q9DCMoF6e-pG-y0Hq_9mMQHaHa?pid=ImgDet&rs=1',
    },
];


for (const produto of produtos) {
    const cardproduto = `<figure class="item" id="card-${produto.id}">
    <p>${produto.nome}</p>
    <p >${produto.marca}</p>
    <p>R$ ${produto.preco}</p>
    <a id="adicionar${produto.id}" class="button">Adicionar</a>
    </figure>`;
    document.getElementById('container').innerHTML += cardproduto;

}

for (const produto of produtos) {
    document.getElementById(`adicionar${produto.id}`).addEventListener("click", () => adicionarAoCarrinho(produto.id));
}

function atualizarquantidade(idProduto) {
    document.getElementById(`quantidade${idProduto}`).innerText = idquantidadeproduto[idProduto];
}

function incrementarproduto(idProduto) {
    if (idProduto in idquantidadeproduto) {
        idquantidadeproduto[idProduto]++
        atualizarquantidade(idProduto)
    }
}
function decrementarproduto(idProduto) {
    if (idProduto in idquantidadeproduto) {
        idquantidadeproduto[idProduto]--;
        atualizarquantidade(idProduto);
    }
}

const idquantidadeproduto = {};



function adicionarAoCarrinho(idProduto) {
    if (idProduto in idquantidadeproduto) {
        incrementarproduto(idProduto)
        return
    }
    idquantidadeproduto[idProduto] = 1

    const elementoArticle = document.createElement('article');
    elementoArticle.classList.add('produto');
    const carrinhoid = document.getElementById('carrinho');
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

    carrinhoOnOf();
}











