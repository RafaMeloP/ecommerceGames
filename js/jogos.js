const jogos = [
    {
        id: 0,
        nome: "The Last of Us II",
        quantidade: 0,
        img: "https://encurtador.com.br/cfhO9"
    },
    {
        id: 1,
        nome: "God of War IV",
        quantidade: 0,
        img: "https://encurtador.com.br/amnR2"
    },
    {
        id: 2,
        nome: "Resident Evil 3",
        quantidade: 0,
        img: "https://encurtador.com.br/yzELP"
    },
    {
        id: 3,
        nome: "Ghost of Tsushima",
        quantidade: 0,
        img: "https://encurtador.com.br/cxMP6"
    },
    {
        id: 4,
        nome: "Halo Infinite",
        quantidade: 0,
        img: "https://encurtador.com.br/dfRT9"
    },
    {
        id: 5,
        nome: "Doom Eternal",
        quantidade: 0,
        img: "https://encurtador.com.br/bknS1"
    },
    {
        id: 7,
        nome: "Doom Eternal",
        quantidade: 0,
        img: "https://encurtador.com.br/bknS1"
    },
    {
        id: 8,
        nome: "Doom Eternal",
        quantidade: 0,
        img: "https://encurtador.com.br/bknS1"
    },
    {
        id: 9,
        nome: "Doom Eternal",
        quantidade: 0,
        img: "https://encurtador.com.br/bknS1"
    },
    {
        id: 6,
        nome: "Cyberpunk 2077",
        quantidade: 0,
        img: "https://encurtador.com.br/BEGH7"
    }
];
var conteudo, link;
var carrinhoNav, carrinho, modal, sairModal, excluir;
inicia = () => {
    conteudo = document.getElementById("container");
    jogos.map(item => {
        conteudo.innerHTML += `
            <div id="card">
                <div id="overlay">
                    <div id="carrinho">
                        <a key="${item.id}" href="#" class="linkCarrinho"> 
                            <button>Adicionar ao carrinho</button>
                        </a>
                    </div>
                </div>
                <div id="titulo">
                    ${item.nome}
                </div>
                <div id="img">
                    <img src="${item.img}" style="width:100%; height:44vh;" alt="${item.nome}">
                </div>
            </div>
        `;
    });
    modal = document.getElementById("modal");
    carrinhoNav = document.getElementById("carrinhoNav");
    carrinhoNav.addEventListener("click", () => {
        modal.removeAttribute("class", "hidden");
    });
    sairModal = document.getElementById("sair");
    sairModal.addEventListener("click", () => {
        let qtde = 0;
        document.getElementById("carrinhoNav").innerHTML = `
                <img src="../img/carrinho.png" alt="carrinho">
            `;
        jogos.map(item => {
            qtde += item.quantidade;
        });
        if (qtde > 0) {
            document.getElementById("carrinhoNav").innerHTML = `
                <img src="../img/carrinho.png" alt="carrinho">
                <div id="num">${qtde}</div>
            `;
        }
        modal.setAttribute("class", "hidden");
    });
    link = document.querySelectorAll(".linkCarrinho");
    for (var i = 0; i < link.length; i++) {
        link[i].addEventListener("click", function () {
            let item = this.getAttribute("key");
            jogos.map(jogo => {
                if (jogo.id == item) {
                    jogo.quantidade++;
                }
            });
            carregaCarrinho();
            let qtde = 0;
            jogos.map(item => {
                qtde += item.quantidade;
            });
            document.getElementById("carrinhoNav").innerHTML = `
                <img src="../img/carrinho.png" alt="carrinho">
                <div id="num">${qtde}</div>
            `;
        });
    }
    carrinho = document.getElementById("itens");
}
carregaCarrinho = () => {
    for (var i = 0; i < jogos.length; i++) {
        carrinho.innerHTML = "";
        jogos.map(item => {
            if (item.quantidade > 0) {
                carrinho.innerHTML += `
                    <div id="item">
                        <div id="nome">
                            <h5><strong>${item.nome}</strong></h5>
                        </div>
                        <div id="quantidade">
                            (${item.quantidade})
                            <img src="../img/del.png" id="${item.id}" class="excluir">
                        </div>
                    </div>
                `;
            }
        });
    }
    if (carrinho.innerHTML == "") carrinho.innerHTML = "<h4>Sem itens no carrinho</h4>";
    excluir = document.querySelectorAll(".excluir");
    for (var i = 0; i < excluir.length; i++) {
        excluir[i].addEventListener("click", function () {
            let item = this.getAttribute("id");
            jogos.map(jogo => {
                if (jogo.id == item) jogo.quantidade = 0;
            });
            carregaCarrinho();
        });
    }
}
window.addEventListener("load", inicia);