// 1. Obtener los elementos del HTML
let formulario = document.getElementById("formulario");
let mensaje = document.getElementById("mensaje");
let historial = document.getElementById("historial");
let titularTexto = document.getElementById("titular");
let saldoFinalTexto = document.getElementById("saldoFinal");
let totalDepositadoTexto = document.getElementById("totalDepositado");
let totalRetiradoTexto = document.getElementById("totalRetirado");
let operacionesTexto = document.getElementById("operaciones");

// 2. Escuchar el envío del formulario
formulario.addEventListener("submit", procesarFormulario);

// 3. Función para procesar las operaciones bancarias
function procesarFormulario(evento) {

    // Evitar que el formulario recargue la página
    evento.preventDefault();

    // Validar que el titular esté registrado
    // Validar que el saldo inicial sea un número válido y mayor o igual a cero



    // Declarar las variables para almacenar:
    // - El saldo disponible.
    // - El total depositado.
    // - El total retirado.
    // - La cantidad de operaciones realizadas.

    // Obtener el texto con las operaciones pendientes
    // Separar cada operación utilizando indexOf(";") y slice()
    // No utilizar arreglos para almacenar las operaciones.

    // Recorrer las operaciones utilizando el ciclo do...while
    do {

        // Obtener el número de la operación utilizando parseInt()


        // Obtener el monto de la operación:
        // Buscar los dos puntos (:) con indexOf()
        // Extraer el monto con slice()
        // Convertir el monto a número utilizando parseFloat()


        // Consultar saldo:
        // Mostrar el saldo disponible.


        // Realizar depósito:
        // Validar que el monto sea mayor que cero.
        // Sumar el monto al saldo disponible.
        // Actualizar el total depositado.


        // Realizar retiro:
        // Validar que el monto sea mayor que cero.
        // Verificar que exista saldo suficiente.
        // Restar el monto del saldo disponible.
        // Actualizar el total retirado.


        // Salir:
        // Finalizar el procesamiento de las operaciones.


        // Opción inválida:
        // Mostrar un mensaje indicando que la operación no existe.


        // Agregar el resultado de cada operación al historial.

    } while (opcion !== 4 && quedanOperaciones);


    // 4. Mostrar el resumen final de la cuenta bancaria:
    // - Nombre del titular.
    // - Saldo final.
    // - Total depositado.
    // - Total retirado.
    // - Cantidad de operaciones realizadas.


    // Actualizar los elementos del HTML utilizando textContent.
}