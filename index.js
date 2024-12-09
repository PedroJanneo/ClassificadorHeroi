const prompt = require('prompt-sync')();
console.log("A seguir, digite o nome do seu heroi e o nivel dele") 

let nomePesonagem = prompt("Escreva nome do seu personagem: ");
let nivelPersonagem = prompt('Qual nivel ele está? ');

if (nivelPersonagem <=1000){
    nivelPersonagem = "Ferro"
} else if(nivelPersonagem>1001 && nivelPersonagem<=2000){
    nivelPersonagem = "Bronze"
} else if (nivelPersonagem >2001 && nivelPersonagem<=5000){
    nivelPersonagem = 'Prata'
} else if (nivelPersonagem >5001 && nivelPersonagem<=7000){
    nivelPersonagem = 'Ouro'
} else if (nivelPersonagem >7001 && nivelPersonagem<=8000){
    nivelPersonagem = "Platina"
} else if (nivelPersonagem > 8001 && nivelPersonagem <=9000){
    nivelPersonagem = "Ascendente"
} else if (nivelPersonagem >9001 && nivelPersonagem<=10000){
    nivelPersonagem = "Imortal"
} else {
    nivelPersonagem = "Radiante"
}





console.log(`O heroi, tem o nome ${nomePesonagem} e esta no nivel de ${nivelPersonagem}`)