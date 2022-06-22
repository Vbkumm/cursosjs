var idade = 60
console.log(`Voce tem ${idade}`)
if (idade < 16) {
    console.log(`Voce não vota`)
} else {
    //if (idade >=16 && idade >=18)
    //if (idade < 18) else seria maior q 18 menores q 16 ja cairiam no primeiro if
    if (idade < 18 || idade > 65) { // (|| = ou) (&& = e)
        console.log(`Voce pode votar`)
    } else {
        console.log(`Voce é obrigado a votar`)
    }

}