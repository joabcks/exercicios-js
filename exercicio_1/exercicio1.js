// 1 - Crie uma função (livro) que possui 3 parâmetros: nome, ano e autor.
// 2 - No corpo da função:
//  2.1 - Transforme o nome para letra maiúscula: toUpperCase()
//  2.2 - Calcule o total de anos desde o lançamento do livro: 2050 - ano
//  2.3 - Crie uma variável com a frase: nome + ' por ' + autor;
//  2.4 - Coloque os 3 valores acima em um objeto.
// 3 - Retorne (return) o objeto definido.
// 4 - Execute a função com os seguintes argumentos:
//     'O Senhor dos Anéis', 1954, 'J. R. R. Tolkien'
// 5 - Guarde o retorno da função executada em uma variável.
// 6 - Log a frase final da função executada no console.


// Resolução de forma discritiva

function livro(nome, ano, autor) {
  const nomeMaior = nome.toUpperCase();
  const totalAnos = 2022 - ano;
  const frase = nome + ' por ' + autor;
  const objeto = {
    nome: nomeMaior,
    totalAnos,
    frase,
  };
  return objeto;
}
const livroRetorno = livro('O Senhor dos Anéis', 1954, 'J. R. R. Tolkien');
console.log(livroRetorno.frase);


// Resolução de forma otimizada

function livro(nome, ano, autor) {
  const objeto = {
    nome: nome.toUpperCase(),
    totalAnos:  2022 - ano,
    frase: nome + ' por ' + autor,
  };
  return objeto;
}
const livroRetorno1 = livro('O Senhor dos Anéis', 1954, 'J. R. R. Tolkien');
console.log(livroRetorno1.frase);

// Resolução de forma otimizada

function livro(nome, ano, autor) {
 
  return {
    nome: nome.toUpperCase(),
    totalAnos:  2022 - ano,
    frase: nome + ' por ' + autor,
  };
}
const livroRetorno2 = livro('O Senhor dos Anéis', 1954, 'J. R. R. Tolkien');
console.log(livroRetorno2.frase);