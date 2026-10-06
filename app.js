// limpia patente
function cleanPatent(patentTxt) {
    return patentTxt.trim().toUpperCase();
}
// valida la patente
function validatePatent(patentTxt) {
    var lengthQuantity = patentTxt.length;
    if (lengthQuantity >= 6 &&  lengthQuantity <= 7) {
        return true;
    }
    else return false;
}
// solicita la velocidad del vehículo
function askVelocity() {
    var velocityInput = prompt("Ingrese la velocidad del vehículo (km/h): ");
    var velocityNumber = Number(velocityInput);

    while (isNaN(velocityNumber) || velocityNumber < 0) {
        velocityInput = prompt("Velocidad inválida. Ingrese un número válido para la velocidad del vehículo (km/h): ");
        velocityNumber = Number(velocityInput);
    }

    return velocityNumber;
}

// solicita el número de patente
function askPatent() {
    var patentInput = prompt("Ingrese el número de patente del vehículo (6/7 caracteres): ");
    patentInput = cleanPatent(patentInput);

    while (!validatePatent(patentInput)) {
        patentInput = prompt("Número de patente inválido. Ingrese un número de patente válido de 6/7 caracteres: ");
        patentInput = cleanPatent(patentInput);
    }

    return patentInput;
}

// calcula el monto de la multa según la velocidad
function calculateTrafficFine(velocity) {
    var fineLimit = 110;

    if (velocity < fineLimit) {
        return 0;
    } 
    else if (velocity < fineLimit + 20) {
        return 5000;
    } 
    else {
        return 10000;
    }
}

/// input de la patente
var patentInput = askPatent();
alert("Número de patente válido: " + patentInput);


/// input de la velocidad
var velocityIntegrity = askVelocity();
alert("Velocidad ingresada correctamente: " + velocityIntegrity + " km/h");

/// reporte de infracción de tránsito
console.log(`Reporte de infracción de tránsito: \nNúmero de patente: ${patentInput} \nVelocidad: ${velocityIntegrity} km/h \nMonto de la multa: $${calculateTrafficFine(velocityIntegrity)}`);