window.addEventListener("load", iniciarSesion);

const PIN_Correcto = "1234";
let saldo = 1000;
let intentos = 3;

const depositarBtn = document.getElementById("depositar");
const retirarBtn = document.getElementById("retirar");
const transferirBtn = document.getElementById("transferir");
const cambiarContraBtn = document.getElementById("cambiarContra");
const salirBtn = document.getElementById("salir");
const saldoTemplate = document.getElementById("result");

depositarBtn.addEventListener("click",depositar);
retirarBtn.addEventListener("click", retirar);
transferirBtn.addEventListener("click", transferir);
cambiarContraBtn.addEventListener("click", cambiarContra);
salirBtn.addEventListener("click",salir);

//  Funciones :

//Funcion para actualizar saldo
function saldoActualizadoTemplate(){
    saldoTemplate.innerText = `${saldo}`
}

//Funcion para Iniciar sesion
/* function iniciarSesion(){
    let PIN = parseFloat(prompt("Introduzca el PIN: "));
    while(PIN_Correcto !== PIN && intentos > 1){
        intentos--;
        alert(`El pin que has introducido es invalido, le quedan ${intentos} intentos, introduzca de nuevo el PIN`);
        return;
    }

    if(PIN_Correcto === PIN){
        alert("El PIN que has introducido es valido");
        saldoActualizadoTemplate();
    }else {
        alert("PIN incorrecto, has agotado todos los intentos.");
        window.location.replace("");
    }
} */

//Funcion para iniciar sesion.
function iniciarSesion(){
    let PIN = prompt("Introduzca el PIN:");

    while(PIN_Correcto !== PIN && intentos > 1){
        intentos--;
        alert(`Pin incorrecto, le quedan ${intentos} intentos`);
        prompt("Introduzca de nuevo el PIN: ")
        return;       
    }

    if(PIN === PIN_Correcto){
        alert("El PIN que has introducido es valido");
        saldoActualizadoTemplate();
    } else {
        alert("PIN incorrecto, has agotado todos los intentos...")
        window.location.replace("/templates/bankBan.html");
    }

}






// Funcion para depositar.
function depositar(){
    const depositado = parseFloat(prompt("Inserte la cantidad que desesa depositar:"));

    if(isNaN(depositado) || depositado <= 0){
        alert("La cantidad que has introducido es invalida, por favor introduzca una valida");
    
    } else{
        alert(`Has depositado ${depositado}€`);
        saldo += depositado;
        saldoActualizadoTemplate();
    }
}


// Funcion para retirar.
function retirar(){
    const retirado = parseFloat(prompt("Introduzca la cantidad que desea retirar: "));

    if(isNaN(retirado) || retirado <= 0 || retirado > saldo){
        alert("La cantidad que has introducido es invalida, por favor introduzca una nueva:");
        return;

    }else {
        alert(`Has retirado ${retirado}€`);
        saldo -= retirado;
        saldoActualizadoTemplate();
    }
}
//Funcion para validar IBAN
 function validarIBAN(IBAN){
let expresionRegular=/^(ES\d{22})$/;
expresionRegular.test(IBAN);
}
 

// Funcion para transferir
function transferir(){
    const transferido = parseFloat(prompt("Introduce la cantidad que deseas transferir"));

    if(isNaN(transferido) || transferido <= 0 || transferido > saldo) {
        alert("La cantidad que has introducuido es invalida, introduce una nueva")
    } else {
        const numeroCuenta = prompt("Introduzca un numero de cuenta:");
        if(!validarIBAN(IBAN) == numeroCuenta ){
            alert("El numero de cuenta que has introducido no es valido, introduzca uno nuevo:")
            return;
        } else {
            alert(`Has transferido ${transferido}€`)
            saldo -= transferido;
            saldoActualizadoTemplate();
        }

    }
}

//Funcion para salir
function salir(){
    alert("Has salido de la aplicacion...")
    window.location.replace("/templates/exit.html");
}