const prompt = require('prompt-sync') ()

let idade = 0
let jovem = 0
let velho = 0 

while(idade >= 0){

    idade = parseInt(prompt('Digite sua idade: '))

    if (idade < 21) {
        jovem++
    } else if (idade>50) {
        velho++
    }

}

console.log(`Foram inseridos ${jovem} jovens`)
console.log(`Foram inseridos ${velho} idosos`)