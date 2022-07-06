// 1 - Lista de imagens (li img) e a imagem principal.
//   1.1 Como selecionar uma lista de itens?
//   1.2 Como selecionar um item?

// 2 - Clique em um dos itens da lista.
//   2.1 Como adicionar um evento de click a uma lista de itens?

// 3 - Precisamos do url do item clicado.
//   3.1 Como pegar o url de um elemento?

// 4 - Precisamos alterar o url da imagem principal.
//   4.1 Como alterar o url de um elemento?


const imagens = document.querySelectorAll('#galeria li img');

function galeriaTrocar(event) {
  const principal = document.querySelector("#imagem-principal");
  const clicada = event.currentTarget;
  principal.src = clicada.src;
  // Segunda forma de fazer com get e set Attribute
  // principal.setAttribute('src', clicada.getAttribute('src'));
  principal.alt = clicada.alt;
  console.log(clicada.src);
}

function galeriaClique(imagem) {
  imagem.addEventListener('click', galeriaTrocar);
}

imagens.forEach(galeriaClique);




