const prompt = require('prompt-sync')();
console.log("A seguir, digite o nome do seu heroi e o nivel dele") 

let nomePesonagem = prompt("Escreva nome do seu personagem ");
let nivelPersonagem = prompt('Qual nivel ele está?');

if (nivelPersonagem<1000){
    nivelPersonagem = "Ferro"
    
} else if(nivelPersonagem=>1001 || nivelPersonagem<2000){
    nivelPersonagem = "Bronze"
}




console.log(`O heroi, tem o nome${nomePesonagem} e esta no nivel: ${nivelPersonagem}`)