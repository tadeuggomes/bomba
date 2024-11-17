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

function tamanhoImagem(tamanhoImagem){

    const imagens = document.querySelectorAll(".image-container img");

    imagens.forEach(imagem => {
        imagem.addEventListener("mouseover", function() {
            imagem.style.transform = "scale(1.3)";  // Aumenta a imagem para 1.5x do tamanho original
        });

        // Adiciona evento mouseout para voltar ao tamanho original
        imagem.addEventListener("mouseout", function() {
            imagem.style.transform = "scale(1)";  // Volta ao tamanho normal
        });
    });
}
tamanhoImagem()
