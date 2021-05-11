/* 
    Cometário Longo
*/

// Declaração
var variavel;

variavel = 'Texto';
variavel = 2;

console.log('Conteudo da Variavel', variavel);

// Condição

if (!false) {
    console.log('operador logico - not - ! - é verdadeiro');
} else {
    console.log('operador logico - not - ! - é falso');
}

if (false && true) {
    console.log('operador logico - ou - && - é verdadeiro');
} else {
    console.log('operador logico - ou - && - é falso');
}

if (false || true) {
    console.log('operador logico - ou - || - é verdadeiro');
} else {
    console.log('operador logico - ou - || - é falso');
}

var conteudo = (true) ? 'Ternário Verdadeiro' : 'Ternário falso'; 
console.log('Valor da variável', conteudo);

// Repetição
console.log('Repetição - Iniciando negativa');
for(i=-2; i<2; i++) {
    console.log('i - ', i);
}

console.log('Repetição - Decrementando');
for(i=6; i>3; i--) {
    console.log('i - ', i);
}

console.log('Repetição - De dois em dois');
for(i=2; i<10; i=i+2) {
    console.log('i - ', i);
}


// Estruturas
var obj;
obj = {
    'nome':'Antonio',
    'idade': 28
}

console.log('Estrutura', obj);