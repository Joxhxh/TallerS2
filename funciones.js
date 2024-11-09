function Obtenervalores() {
    let fechaInput = document.getElementById("idedad").value;
    let fechaSeleccionada = new Date(fechaInput);
    let ahora = new Date();

    let tiempoPasado = ahora - fechaSeleccionada;

    let dias = Math.floor(tiempoPasado / (1000 * 60 * 60 * 24));
    let horas = Math.floor((tiempoPasado % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos = Math.floor((tiempoPasado % (1000 * 60 * 60)) / (1000 * 60));

    let cedula = document.getElementById("idcedula").value;

    document.getElementById("spanedad").innerText = 
        "Han pasado " + dias + " días, " + horas + " horas y " + minutos + " minutos.";

    document.getElementById("spancedula").textContent = cedula;
}