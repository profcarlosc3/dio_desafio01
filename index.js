let nome = "Carlos";
let XP = 9000;
let classificacao;

if (XP < 1000){
    classificacao = "Ferro";
} else if (XP < 2000){
    classificacao = "Bronze";
} else if (XP < 5000){
    classificacao = "Prata";
} else if (XP < 7000){
    classificacao = "Ouro";
} else if (XP < 8000){
    classificacao = "Platina";
} else if (XP < 9000){
    classificacao = "Ascendente";
}else if (XP < 10000){
    classificacao = "Imortal";
}else{
    classificacao = "Radiante";
}

console.log("O nome do herói é " + nome + ", sua classificação é: " + classificacao);
