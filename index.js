function alternarCor(alternarCor){

    const cores = ['red','green'];
    let indiceCor = 0;

    const elemento = document.getElementById(alternarCor);
    
    setInterval(function() {

      elemento.style.color = cores[indiceCor];
  
      indiceCor = (indiceCor + 1) % cores.length;
    }, 700);
}
  
alternarCor('alternarCor');

function alterarTamanho(alterarTamanho){

    const links = document.querySelectorAll("nav a");

        links.forEach(link => {
            link.addEventListener("mouseover", function() {
                link.style.fontSize = "22px";
            });

            link.addEventListener("mouseout", function() {
                link.style.fontSize = "15px"; 
            });
        });
}
alterarTamanho()

function alterarCor(alterarCor){
    
    const links = document.querySelectorAll("nav a");


    links.forEach(link => {
        link.addEventListener("mouseover", function() {
            link.style.color = "#b09f83";
        });

        link.addEventListener("mouseout", function() {
            link.style.color = "#ffffff"; 
        });
    });
}
alterarCor()

function tamanhoImagem(tamanhoImagem){

    const imagens = document.querySelectorAll(" img");

    imagens.forEach(imagem => {
        imagem.addEventListener("mouseover", function() {
            imagem.style.transform = "scale(1.3)";
        });

        
        imagem.addEventListener("mouseout", function() {
            imagem.style.transform = "scale(1)";  
        });
    });
}
tamanhoImagem()

function mudarCorBotao(botao, cor) {
    botao.style.backgroundColor = cor;
  }
  
  const botao1 = document.getElementById("botao1");
  const botao2 = document.getElementById("botao2");
   
  botao1.addEventListener("mouseover", function() {
    mudarCorBotao(botao1, "red");
  });
  
  botao1.addEventListener("mouseout", function() {
    mudarCorBotao(botao1, "#2a8b38"); 
  });
  
  botao2.addEventListener("mouseover", function() {
    mudarCorBotao(botao2, "red"); 
  });
  
  botao2.addEventListener("mouseout", function() {
    mudarCorBotao(botao2, "#2a8b38"); 
  });

mudarCorBotao()
