// 1 - Crie um botão com nome de Adicionar.
// 2 - Adicione uma função (somar) ao clique desse botão
// 3 - Só adicione a função se o botão existir na tela.
// 4 - Crie uma div com o texto 0 dentro dela: <div>0</div>
// 5 - Na função do botão, pegue o total que estiver dentro da div e adicione + 1.
// 6 - Mude o valor da div para o novo total.
// 7 - Mude o valor apenas se o total for menor que 10.
// 8 - Quando não for mais possível adicionar, mostre uma mensagem no console.




// 1- primeiro selecionamos o botão
const botao = document.querySelector('button');


// 3- selecionamos a div que queremos manipular 
function somar() {

  const div = document.querySelector('div');
  const total = Number(div.innerText) + 1;

  if (total < 10) {
    div.innerText = total;
  } else {
    console.log('Não é possivel adiconar mais');
    alert('Não é possivel adiconar mais');
  }
}

// 2- Segundo passo verificamos se o botão existe com uma condicional --if-- 
//    Se o botão existe, então executamos a função
if (botao) {
  botao.addEventListener('click', somar);
}