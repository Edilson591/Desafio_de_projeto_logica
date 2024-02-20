

const hero = {
    name:"Machine",
    level:10000
}

const levels = [
    {level: [0, 1000 ], name:"Ferro"},
    {level: [1001, 2000 ], name:"Bronze"},
    {level: [2001, 5000 ], name:"Platina"},
    {level: [6001, 7000 ], name:"Ouro"},
    {level: [7001, 8000 ], name:"Platina"},
    {level: [8001, 9000 ], name:"Ascendente"},
    {level: [9001, 10000 ], name:"Imortal"}
]


function getLevels(hero, levels) {
    for(let level of levels) {
        if(hero.level >= level.level[0] && hero.level <= level.level[1]){
            return level.name
        }
    }
    
    return "Radiante"
}

const getTools = getLevels(hero,levels)

console.log(`O Héroi de ${hero.name} está no nivel ${heroLevel}`)





