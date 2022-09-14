let qtd = 0
let sexo = 0
let masculino = 0
let feminino = 0
let outro = 0
let temperamento = 0
let calmo = 0
let nervoso = 0
let agressivo = 0
let mulher_nervosa = 0
let homem_nervoso = 0 
let outro_calmo = 0
let idoso_nervoso = 0
let jovem_calmo = 0

while (qtd <= 3){

    console.log('\n**PESQUISA**\n')

    let idade = parseInt(prompt('Digite sua idade: '))

    console.log('\n\t\tSexo')
    console.log('1\t\tmasculino\n2\t\tFeminino\n3\t\tOutro')

    sexo = parseInt(prompt('Comando: '))

    switch (sexo) {
        
        case 1:
             masculino = masculino++
        break;

        case 2:
             feminino = feminino++
        break;

        case 3:
             outro = outro++
        break;
            
        default:
            console.log('ERROR! Programa encerrado')
            console.exit()
        break;
    }

    console.log('\nComando\t\tTemperamento')
    console.log('1\t\tCalmo(a)\n2\t\tNervoso(a)\n3\t\tAgressivo(a)')

    temperamento = parseInt(prompt('Comando: '))
    
    switch(temperamento){
    
        case 1:
             calmo = calmo++
        break;

        case 2:
             nervoso = nervoso++
        break;

        case 3:
             agressivo = agressivo++
        break;
            
        default:
            console.log('Erro, Programa encerrado!')
            console.exit()
        break;
    }

    if (sexo == 2 && temperamento == 2){
        mulher_nervosa++
    }

    if(sexo == 1 && temperamento == 3){
        homem_nervoso++
    }

    if(sexo == 3 && temperamento == 1){
        outro_calmo++
    }

    if(idade > 40 && temperamento == 2){
        idoso_nervoso++
    }

    if(idade < 18 && temperamento == 1){
        jovem_calmo++
    }

    console.clear()
    qtd++

}

console.log(`Número de pessoas calmas: ${calma}`)
console.log(`Número de mulheres nervosas: ${mulher_nervosa}`)
console.log(`Número de outros calmos: ${outro_calmo}`)
console.log(`Número de pessoas nervosas acima de 40 anos: ${idoso_nervoso}`)
console.log(`Número de pessoas calmas com menos de 18 anos: ${jovem_calmo}`)