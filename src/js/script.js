// // Declarações e variáveis 
// // var, let e const 
// var x=10; 
// console.log(x);
// var x=20;
// console.log(x)

// // var pode redeclarar e acessar fora do escopo
// // let não pode redeclarar e não consegue acessar fora do escopo

// if(true){
//     let nome="Fiap"
//     console.log(nome)
// }

// //const
// //{
//   //  const taxaJuros = 0.85;
//    // taxaJuros = 0.50;
//    // console.log(taxaJuros);
// //}

// var exemplo1="Ola dev";
// console.log(exemplo1);

// let exemplo2="Ola dev let";
// console.log(exemplo2);

// const exemplo3="Ola dev const";
// console.log(typeof exemplo3);

// // numero sem nada texto com """"
// let exemplo4=20;
// console.log(typeof exemplo4)

// let exemplo5=true;
// console.log(typeof exemplo5);

// let exemplo6={nome:"Fiap"};
// console.log(typeof exemplo6)

// let exemplo7=["Java", "Python"," C"]
// console.log(exemplo7)

// let exemplo8; //indefinido
// console.log(exemplo8)

// let exemplo9=null;
// console.log(exemplo9) // variavel vazia
// //() = metodo {} = objeto [] = array 

// // Operadores aritimeticos 
// const valor1=20;
// const valor2=10;

// console.log(valor1 + valor2 );
// console.log(valor1 / valor2 );
// console.log(valor1 - valor2 );
// console.log(valor1 * valor2 );

// // operadores lógicos 
// // < menor > maior = atribuir == comparar ==- =! diferente
// //  && e || ou 

// console.log(valor1<valor2);
// console.log(valor1>valor2);
// console.log(valor1 > 10 && valor2 != 20);
// console.log(valor2 < 5 || valor1 > 50);

// // operadores de comparação 
// console.log(valor1 < valor2);
// console.log(valor1 <= valor2);
// console.log(valor1 > valor2);
// console.log(valor1 >= valor2);
// console.log(valor1 != valor2);
// console.log(valor1 == valor2); // compara
// console.log(valor1 === valor2); // compara e olha o tipo da variavel 
// console.log("O valor é", valor2);

// exercicio 1 
const p = 20; //preço do produto 
const v = 10; // preço do desconto 
const precoFinal = p - v; 
console.log("O preço final com desconto é: ", precoFinal)

// exercicio 2 

const usuarioLogado=1;
const Token=100;
const transacaoAutorizada= usuarioLogado === 1 && token >=10;
console.log("Transação autorizada com sucesso", transacaoAutorizada);