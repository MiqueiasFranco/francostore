
const produtos = [
    {
        id: 1,
        nome: 'Iphone XR',
        marca: 'Apple',
        preco: 3000,
    },
    {
        id: 2,
        nome: 'Iphone 11 plus',
        marca: 'Apple',
        preco: 3000,
    },
    {
        id: 3,
        nome: 'Iphone 12',
        marca: 'Apple',
        preco: 3000,
    },
    {
        id: 4,
        nome: 'Iphone 12 plus',
        marca: 'Apple',
        preco: 3000,

    },
    {
        id: 5,
        nome: 'Iphone 13',
        marca: 'Apple',
        preco: 3000,
    },
];

for (const produto of produtos) {
    const cardproduto = `<figure class="item" id="card-${produto.id}">
    <p>${produto.nome}</p>
    <p>${produto.marca}</p>
    <p>R$ ${produto.preco}</p>
    <a class="button">Comprar</a>
    </figure>`;
    document.getElementById('container').innerHTML += cardproduto;
}















