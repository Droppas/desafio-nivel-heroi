let heroi = {
    nome: "Luquinhas",
    xp: 1030,
};

function main(){
    imprimir();
    heroi.nome = "Fernando";
    heroi.xp = 20030;
    imprimir();
    heroi.nome = "Lara Croft";
    heroi.xp = 7600;
    imprimir();
    
}

function nivelxp(xp){
    if (xp <= 1000) {
        return "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        return "Bronze";
    } else if (xp >= 2001 && xp <= 6000) {
        return "Prata";
    } else if (xp >= 6001 && xp <= 7000) {
        return "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        return "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        return "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        return "Imortal";
    } else if (xp >= 10001) {
        return "Radiante";
    }
}

function imprimir(){
    let nivel = nivelxp(heroi.xp);
    console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivel}`);

}

main();
