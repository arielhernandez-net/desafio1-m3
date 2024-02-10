//Ejercicio 2
    
    const form = document.getElementById('operaciones');
    const resultadoDiv = document.getElementById('resultado');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const numero1 = parseFloat(document.getElementById('numero1').value);
        const numero2 = parseFloat(document.getElementById('numero2').value);

        if (numero1 <= 0 || numero2 <= 0 || numero1 === numero2) {
            resultadoDiv.textContent = "Ingrese dos números diferentes y mayores a cero.";
        } else {
            const suma = numero1 + numero2;
            const resta = numero1 - numero2;
            const division = numero1 / numero2;
            const multiplicacion = numero1 * numero2;
            const modulo = numero1 % numero2;

            resultadoDiv.innerHTML = `
                <p class="bg-info">La suma de ${numero1} y ${numero2} es: ${suma}</p>
                <p>La resta de ${numero1} y ${numero2} es: ${resta}</p>
                <p>La división de ${numero1} entre ${numero2} es: ${division.toFixed(3)}</p>
                <p>La multiplicación de ${numero1} y ${numero2} es: ${multiplicacion}</p>
                <p>El módulo de ${numero1} entre ${numero2} es: ${modulo}</p>
            `;
        }
    });

// Ejercicio 3

    const temperaturaForm = document.getElementById('temperatura');
    const resultadoTemp = document.getElementById('resultadoTemperatura');

    temperaturaForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const celsius = parseFloat(document.getElementById('celsius').value);
        const kelvin = celsius + 273.15;
        const fahrenheit = (celsius * 9/5) + 32;

        resultadoTemp.innerHTML = `
            <p>${celsius} grados Celsius equivalen a ${kelvin.toFixed(2)} Kelvin.</p>
            <p>${celsius} grados Celsius equivalen a ${fahrenheit.toFixed(2)} Fahrenheit.</p>
        `;
    });

// Ejercicio 4

    const diasForm = document.getElementById('diasForm');
    const resultadoDia = document.getElementById('resultadoDias');

    diasForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const diasInput = document.getElementById('dias');
        const dias = parseInt(diasInput.value);
        const anios = Math.floor(dias / 365);
        const diasRestantes = dias % 365;
        const semanas = Math.floor(diasRestantes / 7);
        const diasFinales = diasRestantes % 7;

        let resultado = "";
        if (anios > 0) {
            resultado += `${anios} año${anios > 1 ? 's' : ''} `;
        }
        if (semanas > 0) {
            resultado += `${semanas} semana${semanas > 1 ? 's' : ''} `;
        }
        if (diasFinales > 0) {
            resultado += `${diasFinales} día${diasFinales > 1 ? 's' : ''}`;
        }

        resultadoDia.textContent = "El equivalente es: " + resultado;
    });

    //Ejercicio 5

    const numerosForm = document.getElementById('numeros');
    const resultadoNumero = document.getElementById('resultadoNumeros');

    numerosForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const numero1 = parseFloat(document.getElementById('numeroSuma1').value);
        const numero2 = parseFloat(document.getElementById('numeroSuma2').value);
        const numero3 = parseFloat(document.getElementById('numeroSuma3').value);
        const numero4 = parseFloat(document.getElementById('numeroSuma4').value);
        const numero5 = parseFloat(document.getElementById('numeroSuma5').value);
        const suma = numero1 + numero2 + numero3 + numero4 + numero5;
        const promedio = suma / 5;

        resultadoNumero.innerHTML = `
            <p>La suma de los números es: ${suma}</p>
            <p>El promedio de los números es: ${promedio}</p>
        `;
    });