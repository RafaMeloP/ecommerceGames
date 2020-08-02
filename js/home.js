var imgs=[],slider,botao,imgAtual=1,tempoTroca=0;
function preCarregamento(){
    var s=1;
    for(var i=0;i<3;i++){
        imgs[i]=new Image();
        imgs[i].src=`img/s${s}.png`;
        s++;
    }
}
function carregaImagem(img){
    slider.style.backgroundImage=`url('${imgs[img].src}')`;
}
function troca(dir){
    imgAtual+=dir;
    if(imgAtual>3) imgAtual=1;
    else if(imgAtual<1) imgAtual=3;
    carregaImagem(imgAtual-1);
}
function inicia(){
    botao=document.querySelectorAll(".seta");
    for(var i=0;i<botao.length;i++){
        botao[i].addEventListener("click",(event)=>{
            var direcao=event.target.innerHTML;
            if(direcao == "&lt;") troca(-1);
            else if(direcao== "&gt;") troca(1);
        });
    }
    slider=document.getElementById("slider");
    preCarregamento();
    carregaImagem(imgAtual);
}
window.addEventListener("load", inicia);