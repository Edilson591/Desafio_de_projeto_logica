let name = "machine"
let i = 10000
const nivel = {fe:"ferro",br:"Bronze",pr:"Prata", ou:"Ouro", pl:"Platina", as:"Ascendente", im:"Imortal", ra:"Radiante"}

    if(i <= 1000) {
        console.log(`O Héroi de ${name} está no nivel ${nivel.fe}`)
    }else if(i >= 1001 && i <= 2000){
        console.log(`O Héroi de ${name} está no nivel ${nivel.br}`)
    }else if(i >= 2001 && i <= 5000){
        console.log(`O Héroi de ${name} está no nivel ${nivel.pr}`)
    }else if(i >= 6001 && i <= 7000){
        console.log(`O Héroi de ${name} está no nivel ${nivel.ou}`)
    }else if(i >= 7001 && i <= 8000){
        console.log(`O Héroi de ${name} está no nivel ${nivel.pl}`)
    }else if(i >= 8001 && i <= 9000){
        console.log(`O Héroi de ${name} está no nivel ${nivel.as}`)
    }else if(i >= 9001 && i <= 10000){
        console.log(`O Héroi de ${name} está no nivel ${nivel.im}`)
    }else{
        console.log(`O Héroi de ${name} está no nivel ${nivel.ra}`)
    } 




