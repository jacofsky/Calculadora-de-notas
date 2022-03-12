// --------------------- VALIDACION INPUTS ---------------------

const inputMatematica = document.querySelector("#iptMatematica")
const inputLengua = document.querySelector("#iptLengua")
const inputEfsi = document.querySelector("#iptEFSI")

const validarCampo = (num) => {
    console.log(num)
    if (num > 10 || num < 1) {
        return true
    }
    return false
}

const imprimirError = (inpt) => {
    if (validarCampo(parseInt(inpt.value))) {
        inpt.setAttribute("class", "input-Invalid")
    } else {
        inpt.setAttribute("class", "input-Valid")
    }
}

inputMatematica.addEventListener("input", () => imprimirError(inputMatematica))
inputLengua.addEventListener("input", () => imprimirError(inputLengua))
inputEfsi.addEventListener("input", () => imprimirError(inputEfsi))

// --------------------- VALIDACION FORMULARIO ---------------------

const form = document.querySelector("#formNotas")

const validarForm = (e) => {
    e.preventDefault()
    if (validarCampo(parseInt(inputMatematica.value))) {
        alert("Dato invalido en: Matematica")

    } else if (validarCampo(parseInt(inputLengua.value))) {
        alert("Dato invalido en: Lengua")

    } else if (validarCampo(parseInt(inputEfsi.value))) {
        alert("Dato invalido en: EFSI")
        
    } else {
        const notas = new Notas(parseInt(inputMatematica.value), parseInt(inputLengua.value), parseInt(inputEfsi.value) )
        modificarHtml(notas)
        habilitarButtons(notas)
    }
    
}

form.addEventListener("submit", (e) => validarForm(e))

// --------------------- CAMBIOS EN EL DOM ---------------------

const spanMatematica = document.querySelector("#notaMatematica")
const spanLengua = document.querySelector("#notaLengua")
const spanEfsi = document.querySelector("#notaEfsi")
const spanPromedio = document.querySelector("#notaPromedio")
const gif = document.querySelector("#reaccionGif")


const modificarHtml = (notas) => {
    spanMatematica.innerHTML = notas.matematica
    spanLengua.innerHTML = notas.lengua
    spanEfsi.innerHTML = notas.efsi
    

    if (notas.notaMayor.includes("Matematica")) {
        spanMatematica.style.color = "blue"

    } else {
        spanMatematica.style.color = "black"
    }

    if (notas.notaMayor.includes("Lengua")) {
        spanLengua.style.color = "blue"

    } else {
        spanLengua.style.color = "black"
    }

    if (notas.notaMayor.includes("EFSI")) {
        spanEfsi.style.color = "blue"

    } else {
        spanEfsi.style.color = "black"
    }

    displayButtons.innerHTML = ''
    gif.setAttribute("src", "https://acegif.com/wp-content/uploads/2021/4fh5wi/bienvnds-15.gif")
    gif.setAttribute("alt", "Bienvenido!")
    

}


// --------------------- PROMEDIOS Y NOTA MAYOR ---------------------

const btnProm = document.querySelector("#btnCalcularPromedio")
const btnMateria = document.querySelector("#btnMateriaMayorNota")

const displayButtons = document.querySelector("#buttonsDisplay")


const habilitarButtons = (notas) => {
    btnProm.addEventListener("click", () => mostrarPromedio(notas))
    btnMateria.addEventListener("click", () => mostrarMaterias(notas))

    console.log(notas)
    btnProm.disabled = false
    btnMateria.disabled = false

    
}

const mostrarPromedio = (notas) => {
    displayButtons.innerHTML = `<p>Promedio: ${notas.promedio.toFixed(2)}</p>`

    if (notas.promedio >= 6) {
        displayButtons.style.color = "green"
        gif.setAttribute("src", "https://i.giphy.com/media/l4q7TIW8nEZYOJUf6/giphy.webp")
        gif.setAttribute("alt", "Buen trabajo!")

    } else {
        displayButtons.style.color = "red"
        gif.setAttribute("src", "https://i.giphy.com/l2Jeev6AvurRQMgEM.gif")
        gif.setAttribute("alt", "Sigue intentando!")
    }
}

const mostrarMaterias = (notas) => {
    displayButtons.style.color = "blue"
    displayButtons.innerHTML = `<ul>${notas.notaMayor.map(nota => `<li>${nota}</li>`).flat().join('')}</ul>`
}