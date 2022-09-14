const prompt = require('prompt-sync')()

let media = 0
let n = 0
let qtd = 0


n = parseInt(prompt('Digite um número : '))

do{

    n = parseInt(prompt('Digite um número: '))
    
    if(n%3==0){
        media = media + n 
        qtd++
    }

} while(n!=0)

console.log(`A media dos valores foi: ${media/qtd}`)