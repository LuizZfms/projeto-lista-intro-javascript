// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
 const altura = prompt("escolhe o valor de altura")
 const largura = prompt("Escolha o valor de largura")
 const area = (altura * largura)
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = prompt("Qual o ano em que estamos?")
  let anoNascimento = prompt("Qual o ano de seu nascimento?")
  const idadeUsuario = (anoAtual - anoNascimento)
  console.log(idadeUsuario)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = (peso/(altura *altura))
  const resultado = imc
  return resultado 
 calculaIMC(80, 1.75)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
const nome = prompt("Qual seu nome?")
let idade = prompt("Quantos anos voce tem?") 
let email = prompt("Qual seu email mais ativo?")
 console.log(`meu nome é ${nome}, tenho ${idade} anos e meu e-mail é ${email}.` )
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let corFavoritaUm = prompt("Digite uma de suas cores favoritas")
  let corFavoritaDois= prompt("Digite outra cor favorita")
 let corFavoritaTres = prompt("Digite sua terceira cor favorita agora")
 const topTresCores = [corFavoritaUm, corFavoritaDois, corFavoritaTres]
console.log(topTresCores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const calculoDePrejuizo = (custo/valorIngresso)
  return calculoDePrejuizo
  calculaIngressosEspetaculo(5000, 25)
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  let tamanho = (string1.length === string2.length)
  return tamanho  
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(time) {
 time : ["galo", "vasco", "palmeiras"] 
 return time[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(fruta) {
fruta : ["maçã", "banana", "uva", "pêra"]
return fruta[3]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(numeros) {
  numeros : [1, 2, 3, 4, 5]
 numeros.shift()
 numeros.pop()
 numeros.push(1)
 numeros.unshift(5)
 return numeros 
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
 let igual = string1.toUpperCase() === string2.toUpperCase()
 return igual  

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = prompt("Qual o ano atual?")
  const anoDeNascimento = prompt( "Qual o ano de seu nascimento?")
  const anoEmissao = prompt( "Qual o ano da emissão do seu RG?")
  if ( anoAtual - anoDeNascimento <= 20) {
    const precisaRenovar = anoAtual - anoEmissao >= 5
    console.log(Boolean (precisaRenovar))
  } else if 
   (anoAtual - anoDeNascimento > 20 &&
    anoAtual - anoDeNascimento <=50)
    {
  const precisaRenovar = anoAtual - anoEmissao >= 10 
 console.log(Boolean(precisaRenovar))
} else if (anoAtual - anoDeNascimento > 50) {
  const precisaRenovar = anoAtual - anoEmissao >15
  console.log(Boolean(precisaRenovar))

}
  }

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  let condicao = (ano %4 === 0 && ano %100 != 0) || (ano %400 === 0)
  return condicao

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
 const idade = prompt("tem mais de 18 anos?")
 const estudo = prompt("tem ensino médio completo?")
 const disponivel = prompt("tem disponibilidade de horarios?")
 const maiorIdade = idade === "sim"
 console.log(maiorIdade && estudo === disponivel)

}