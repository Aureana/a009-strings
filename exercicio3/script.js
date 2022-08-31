const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`
console.log(frase)


let novaFrase = frase.replaceAll("verde","rosa").replaceAll("azul","laranja")
console.log(novaFrase)

/*b) Crie uma nova string a partir da primeira, 
trocando **verde** por **rosa**, e **azul** por **laranja**;
 */
const stringVerde = novaFrase.includes("verde")
console.log("Contem verde?:", stringVerde) //false

//c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.

const stringLaranja = novaFrase.includes("laranja")
console.log("Contem laranja?:",stringLaranja) //true

//c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.

const nomeMinusculo = `Jorge tem uma casa verde e com portão azul, com os dizeres:`
const nomeMaiusculo = "BOAS VINDAS, mas não deixe o gato sair".toLocaleUpperCase()
console.log("nome em letra maiuscula:  " + nomeMinusculo + " " + nomeMaiusculo+" . ")