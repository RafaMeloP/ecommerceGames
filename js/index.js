var logo, home, jogos, sobre,cadastro, iframe;
trocaPagina = (pagina) => {
    switch (pagina) {
        case "home": iframe.innerHTML = "<iframe src='pags/home.html' frameborder='0'></iframe>"; break;
        case "jogos": iframe.innerHTML = "<iframe src='pags/jogos.html' frameborder='0'></iframe>"; break;
        case "sobre": iframe.innerHTML = "<iframe src='pags/sobre.html' frameborder='0'></iframe>"; break;
        case "cadastro": iframe.innerHTML = "<iframe src='pags/cadastro.html' frameborder='0'></iframe>"; break;
    }
}
inicia = () => {
    logo = document.getElementById("logo");
    logo.addEventListener("click", () => {
        trocaPagina("home");
    });
    home = document.getElementById("home");
    home.addEventListener("click", () => {
        trocaPagina("home");
    });
    jogos = document.getElementById("jogos");
    jogos.addEventListener("click", () => {
        trocaPagina("jogos");
    });
    sobre = document.getElementById("sobre");
    sobre.addEventListener("click", () => {
        trocaPagina("sobre");
    });
    cadastro=document.getElementById("cadastro");
    cadastro.addEventListener("click",()=>{
        trocaPagina("cadastro");
    });
    iframe = document.getElementById("cont");
}
window.addEventListener("load", inicia);