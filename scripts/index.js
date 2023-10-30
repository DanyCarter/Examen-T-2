//window.addEventListener("load", iniciarSesion);

const PIN_Correcto = "1234";
let saldo = 1000;
let intentos = 3;

const depositarBtn = document.getElementById("depositar");
const retirarBtn = document.getElementById("retirar");
const transferirBtn = document.getElementById("transferir");
const cambiarContraBtn = document.getElementById("cambiarContra");
const salirBtn = document.getElementById("salir");

depositarBtn.addEventListener("click",depositar);
retirarBtn.addEventListener("click", retirar);
transferirBtn.addEventListener("click", transferir);
cambiarContraBtn.addEventListener("click", cambiarContra);
salirBtn.addEventListener("click",salir);

//  Funciones :

//Funcion para actualizar saldo
function saldoActualizadoTemplate(){
    saldo.innerText= `${saldo}`;
}

//Funcion para Iniciar sesion
function iniciarSesion(){
    let PIN = parseFloat(prompt("Introduzca el PIN: "));
    while(PIN_Correcto !== PIN && intentos > 1){
        alert(`El pin que has introducido es invalido, le quedan ${intentos}`);
    }

    if(PIN_Correcto === PIN){
        alert("El PIN que has introducido es valido");
        saldoActualizadoTemplate();
    }else {
        alert("PIN incorrecto, has agotado todos los intentos.")
        window.location.replace("")
    }
}

// Funcion para depositar.
function depositar(){
    const depositado = parseFloat(prompt("Inserte la cantidad que desesa depositar:"))

    if(isNaN(depositado) || depositado <= 0){
        alert("La cantidad que has introducido es invalida, por favor introduzca una valida");
    
    } else{
        alert(`Has depositado ${depositado}€`);
        saldo += depositado;
        saldoActualizadoTemplate();
    }
}

//