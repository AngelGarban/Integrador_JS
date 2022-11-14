//Se define al comprador como un objeto
let comprador = new Object();

function TotalAPagar() {
    //Definición de variables para el calculo
    //Valor base del ticket sin descuento, definida como constante
    const VALOR_TICKET = 200;

    //Cantidad de tickets ya definidos por su valor numerico
    let cantidadTickets = document.getElementById("cantidadTickets").value;

    //Categoria seleccionada para la aplicación del descuento
    let categoria = document.getElementById("categoriaSelect");

    //Se define el descuento como un multiplicador y por defecto es inicializado sin descuento
    let descuentoCategoria = 1;

    // se aplican los descuentos según categoría
    if (categoria.value == 0) {
        descuentoCategoria = 1;
    }
    if (categoria.value == 1) {
        descuentoCategoria = 1 - 0.8;
    }
    if (categoria.value == 2) {
        descuentoCategoria = 1 - 0.5;
    }
    if (categoria.value == 3) {
        descuentoCategoria = 1 - 0.15;
    }

    //Se calcula el valor total de los tickets
    let valorTickets = VALOR_TICKET * descuentoCategoria * cantidadTickets;

    //Se ejecuta la función para limpiar los erroes
    QuitarClaseError();

    //Se le definen los atributos al comprador
    comprador = {
        nombre: document.getElementById("nombreComprador").value,
        apellido: document.getElementById("apellidoComprador").value,
        email: document.getElementById("emailComprador").value,
    };

    //VALIDACIONES DE DATOS INTRODUCIDOS
    let cumpleValidar = true;

    //Validar el nombre del comprador
    cumpleValidar = ValidarNombreApellido(
        comprador.nombre,
        nombreComprador,
        "Por favor escribe tu nombre"
    );
    console.log(cumpleValidar);
    if (cumpleValidar == false) {
        return;
    }

    //Validar el apellido del comprador
    cumpleValidar = ValidarNombreApellido(
        comprador.apellido,
        apellidoComprador,
        "Por favor escribe tu apellido"
    );

    if (cumpleValidar == false) {
        return;
    }

    //Validar el correo electrónico del comprador
    cumpleValidar = ValidarEmail(comprador.email, emailComprador);

    if (cumpleValidar == false) {
        return;
    }

    //Imprimiendo el resumen de los tickets
    if (cantidadTickets > 1) {
        // Inserto el valor en el HTML
        totalPago.innerHTML =
            "Total a pagar: $" +
            Math.round(valorTickets) +
            "<br>A nombre de " +
            comprador.nombre +
            " " +
            comprador.apellido +
            " por " +
            cantidadTickets +
            " tickets";
    } else {
        // Inserto el valor en el HTML
        totalPago.innerHTML =
            "Total a pagar: $" +
            Math.round(valorTickets) +
            "<br>A nombre de " +
            comprador.nombre +
            " " +
            comprador.apellido +
            " por " +
            cantidadTickets +
            " ticket";
    }
}

// Función para validar el nombre o el apellido; sirve para validaciones de menos de 2 letras
function ValidarNombreApellido(nombre, idnombre, string) {
    let validacion = true;
    if (nombre < 2) {
        alert(string);
        idnombre.classList.add("is-invalid");
        idnombre.focus();
        validacion = false;
        return validacion;
    }
    return validacion;
}

// Función para validar el email
function ValidarEmail(email, idEmail) {
    let validacion = true;
    var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
    if (!expresion.test(email)) {
        alert("Por favor, escribí un correo electrónico válido.");
        idEmail.classList.add("is-invalid");
        idEmail.focus();
        validacion = false;
        return validacion;
    }
    return validacion;
}

// Función para quitar el estilo de error a los elementos del form
function QuitarClaseError() {
    let x = document.querySelectorAll(".form-control, .form-select");
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove("is-invalid");
    }
}

// Función para el botón Borrar para que borre el valor
function LimpiarFormulario() {
    QuitarClaseError();
    totalPago.innerHTML = "Total a pagar: $";
}
