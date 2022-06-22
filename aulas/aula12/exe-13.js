var agora = new Date
var diasemana = agora.getDay()
    //console.log(`${diasemana}`)
    /*
    0 - domingo
    1 - segunda
    2 - terca
    3 - quarta
    5 - quinta
    6 - sabado
    */
switch (diasemana) {
    case 0:
        console.log(`Domingo`)
        break
    case 1:
        console.log(`Segunda`)
        break
    case 2:
        console.log('terça')
        break
    case 3:
        console.log(`quarta`)
        break
    case 4:
        console.log(`quinta`)
        break
    case 5:
        console.log(`sexta`)
        break
    case 6:
        console.log(`sabado`)
        break
    default:
        console.log(`dia invalido`)
        break

}