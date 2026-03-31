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

// // exercicio 1 
// const p = 20; //preço do produto 
// const v = 10; // preço do desconto 
// const precoFinal = p - v; 
// console.log("O preço final com desconto é: ", precoFinal)

// // exercicio 2 

// const usuarioLogado=1;
// const Token=100;
// const transacaoAutorizada= usuarioLogado === 1 && Token >=10;
// console.log("Transação autorizada com sucesso", transacaoAutorizada);

// ESTRUTURA CONDICIONAL 

// if
if(true){
  console.log("é verdadeiro")
}

//if else

let nome = "Fiap"

  if(nome=="Fiap"){
    console.log("Nome verdadeiro")
  }else{
    console.log("Nome falso")
  }

  // if encadeado ou aninhado 

  let idade = 99;
  if(idade<= 13){
    console.log("É uma criança")
  } else if(idade>13 && idade <= 18){
    console.log("É um adolescente")
  }else if (idade>18 && idade <=59){
    console.log("É um adulto")
  } else{
    console.log("É um idoso")
  }

  // switch case 

  let times="Flamengo"; 
  switch(times){
    case "Santos": 
      console.log("Um time idoso")
      break; 
    case "São Paulo": 
      console.log*"Time afeminado"
      break; 
    case "Palmeiras":
      console.log("Time gigante")
    case "Corinthians": 
      console.log("Time das galinhas")
      break;
    case "Flamengo":
      console.log("Time do cheirinho")
      break;
    default: 
      console.log("Time pior que a seleção brasileira")
  }

  //condição ternaria ( ? = if e : = else)

  let salario =100; 
  let resultado = salario ==100 ? "Salario certo" : "Salario errado"
  console.log(resultado)

  let usuario="Fiap";
  let userLogado= usuario === "Fiap" ? "Logado com sucesso" : "Usuario inválido"
  console.log(userLogado)

  function verificarParImpar(numero){
    return numero % 2 === 0 ? "Par" : 'Impar';
  }
  console.log(verificarParImpar(17))