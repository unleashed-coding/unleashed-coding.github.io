var temp = null;
function iniciarGame(){
    var url = window.location.search;
    var nivel = url.replace('?', "");
    var tempo = null;
  
    if(nivel == 1 ){
        tempo = 120;
    }
    if(nivel == 2 ){
        tempo = 60;
    }
    if(nivel == 3 ){
        tempo = 30;        
    }
    document.getElementById('c').innerHTML = tempo;
    var qBalao = 80;
    criaBalao(qBalao);

    document.getElementById('baloesVivos').innerHTML = qBalao;
    document.getElementById('baloesMortos').innerHTML = 0;

    contagem(tempo);
}

function contagem(segundos){
    segundos -=  1;
    if(segundos == -1){
        clearTimeout(temp);
        defeat();
        return false;
    }
    document.getElementById('c').innerHTML = segundos;
    temp = setTimeout("contagem("+segundos+")", 1000);
}

function criaBalao(qBalao){
    for(var x = 0; x < qBalao;x++){
        var balao = document.createElement("img");
        balao.src = 'img/balao_azul_pequeno.png';
        balao.style.margin = '12px';
        balao.id = 'b'+x;
        balao.onclick = function(){ estourar(this); };
        document.getElementById('cena').appendChild(balao);
    }
}

// tela de derrota
function defeat(){
    remove_eventos_baloes();
    alert('fim the game');
}

//substituir a imagem de balão normal..
function estourar(e){
    var balaoID = e.id;
        document.getElementById(balaoID).setAttribute("onclick", "");
        document.getElementById(balaoID).src = 'img/balao_azul_pequeno_estourado.png';
        estourado = balaoID;
        pontuacao(-1);
    
}


function pontuacao(acao){
    var baloesINT = document.getElementById('baloesVivos').innerHTML;
    var baloesOFF = document.getElementById('baloesMortos').innerHTML;
    baloesINT = parseInt(baloesINT);
    baloesOFF = parseInt(baloesOFF);
    baloesINT += acao;
    baloesOFF -= acao;

    document.getElementById('baloesVivos').innerHTML = baloesINT;
    document.getElementById('baloesMortos').innerHTML = baloesOFF;

    situacao(baloesINT);
}

function situacao(baloesINT){
    if(baloesINT == 0){
        var t = document.getElementById('c').innerHTML;
        var tB = document.getElementById('baloesMortos').innerHTML;
        alert('PÁRABENS VOCê CONSEGUIU ESTOURAR OS BALÕES!!!!!!! TEMPO QUE RESRTAVA: '+t+'s. Com um '  
        +'total de baloes estourados de: '+tB);
        pararJogo();
    }
}

function pararJogo(){
    clearTimeout(temp);
    document.getElementById('baloesVivos').innerHTML = 'FIM';
    document.getElementById('baloesMortos').innerHTML = 'FIM';
  
}
function remove_eventos_baloes() {
    var i = 1; 
    while(document.getElementById('b'+i)) {
        document.getElementById('b'+i).onclick = '';
        i++;
    }
}

function reiniciar(){
    window.location.href = 'index.html?';
}