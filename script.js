var letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
var numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var arreglo_id = []

for (let i = 0; i < letras.length; i++) {
    arreglo_id.push(letras[i] + numeros[i])
}

var status_number = true
var status_letter = false

let t = document.querySelectorAll(".boton")
for (let g = 0; g < t.length; g++) {
    t[g].addEventListener("click", h => {
        let id = h.target.getAttribute('id')

        if (status_number && posicion < arreglo_id.length) {
            verificarNumeros(id)
        }

        else {
            if (status_letter) {
                verificarLetras(id)
            }

        }

    });
}

var posicion = 0
var letters_value = ""
var numbers_value = ""

function verificarNumeros(id) {
    if (id == arreglo_id[posicion] && status_number) {

        if (posicion == 0) {
            numbers_value = numbers_value + numeros[posicion]
        }
        else {
            numbers_value = numbers_value + ' | ' + numeros[posicion]
        }

        numbers = document.getElementById('number')
        numbers.value = numbers_value
        posicion += 1
        if (posicion >= arreglo_id.length) {
            status_number = false
            status_letter = true
            swal("Buen Trabajo!", "Continue con las Letras", "success");
        }

    }
    else {
        swal("Error!", "No es el numero siguiente", "warning");
    }

}

var pos_letras = 0
function verificarLetras(id) {

    if (id == arreglo_id[pos_letras]) {

        if (pos_letras == 0) {
            letters_value = letters_value + letras[pos_letras]
        }
        else {
            letters_value = letters_value + ' | ' + letras[pos_letras]
        }

        letters = document.getElementById('letter')
        letters.value = letters_value
        pos_letras += 1

        if (pos_letras >= arreglo_id.length) {
            status_letter = false
            swal("Buen Trabajo!", "Juego Concluido", "success");
        }
    }

    else {
        swal("Error!", "No es la letra Siguiente", "warning");
    }

}

function clean() {
  document.getElementById('number')
document.getElementById('letter')
    letters.value = ''
    numbers.value = ''

    posicion = 0
    pos_letras = 0
    letters_value = ""
    numbers_value = ""
    status_number = true
    status_letter = false

}
