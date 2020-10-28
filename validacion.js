
var dinero = 5000
var textoRetiro = document.getElementById('textoRetiro')
var textoSaldo = document.getElementById('textoSaldo')

// Retirar

function retirar (){

    var ingresado = Number (document.getElementById('Input').value)

    if (ingresado > dinero && ingresado < 9000){
        textoRetiro.innerHTML = ('Lo sentimos, usted solo dispone de ' + dinero + ' pesos en su cuenta')
        console.log(dinero);

    } else if (ingresado <= dinero && ingresado > 0){
        textoRetiro.innerHTML = ('Usted ha retirado ' + ingresado + ' pesos, tenga buen día');
        dinero = (dinero - ingresado)
        console.log(dinero);

    } else if (ingresado > 7000){
        textoRetiro.innerHTML = ('La cantidad máxima a retirar son 7000 pesos');
        console.log(dinero);

    } else{
        textoRetiro.innerHTML = ('Por favor ingrese una cantidad válida');

    }
}

// Ver el saldo

function verSaldo (){
    textoSaldo.innerHTML = ('Usted tiene ' + dinero + ' pesos en su cuenta');
}



// Base de lógica
// if (ingresado < dinero){
//     console.log('Lo sentimos, su cuenta solo dispone de ' + dinero + ' pesos');
// } else if (ingresado >= dinero){
//     console.log('Usted ha retirado ' + ingresado + ' pesos, tenga buen día');
// } else if (ingresado > 9000){
//     console.log('La cantidad máxima a retirar son 9000 pesos');
// }else if (ingresado === NaN){
//     console.log('Por favor ingrese una cantidad válida');
// }


// Depositar

// if (ingresado === NaN){
//     console.log('Por favor ingrese una cantidad válida');
// }

