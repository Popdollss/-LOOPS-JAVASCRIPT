const prompt = require('prompt-sync')()

let soma = 0
let n = 0

n = parseInt(prompt('Digite um número: '))

do{

    n = parseInt(prompt('Digite um número : '))
    
    if(n>0){
        soma = soma + n 
    }

}while(n!=0)

console.log(`A soma dos valores: ${soma}`)