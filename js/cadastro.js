const url = "https://viacep.com.br/ws/";
var cep, estado, cidade;
inicia = () => {
    cep = document.getElementById("cep");
    cep.addEventListener("change", pesquisa);
    estado = document.getElementById("estado");
    cidade = document.getElementById("cidade");
}
pesquisa = () => {
    let psq = cep.value.match("-");
    if (psq != null) cep.value = cep.value.replace("-", "");
    fetch(url + cep.value + "/json/").then(res => res.json()).then(res => {
        estado.value = res.uf;
        cidade.value = res.localidade;
        estado.removeAttribute("readonly");
        cidade.removeAttribute("readonly");
    });
}
window.addEventListener("load", inicia);