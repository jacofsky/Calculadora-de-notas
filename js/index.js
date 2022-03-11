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
    if (validarCampo(inpt.value)) {
        inpt.setAttribute("class", "input-Invalid")
    } else {
        inpt.setAttribute("class", "input-Valid")
    }
}

inputMatematica.addEventListener("change", () => imprimirError(inputMatematica))
inputLengua.addEventListener("change", () => imprimirError(inputLengua))
inputEfsi.addEventListener("change", () => imprimirError(inputEfsi))

// --------------------- VALIDACION FORMULARIO ---------------------

const form = document.querySelector("#formNotas")

const validarForm = (e) => {
    e.preventDefault()
    if (validarCampo(inputMatematica.value)) {
        alert("Dato invalido en: Matematica")

    } else if (validarCampo(inputLengua.value)) {
        alert("Dato invalido en: Lengua")

    } else if (validarCampo(inputEfsi.value)) {
        alert("Dato invalido en: EFSI")
        
    } else {
        const notas = new Notas(inputMatematica.value, inputLengua.value, inputEfsi.value )
        console.log(notas)
        modificarHtml(notas)
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
    spanPromedio.innerHTML = notas.promedio

    if (notas.promedio >= 6) {
        spanPromedio.style.color = "green"
        gif.setAttribute("src", "https://i.giphy.com/media/l4q7TIW8nEZYOJUf6/giphy.webp")
        gif.setAttribute("alt", "Buen trabajo!")

    } else {
        spanPromedio.style.color = "red"
        gif.setAttribute("src", "https://i.giphy.com/l2Jeev6AvurRQMgEM.gif")
        gif.setAttribute("alt", "Sigue intentando!")
    }

    console.log(notas.notaMayor.includes(1))

    if (notas.notaMayor.includes(0)) {
        spanMatematica.style.color = "blue"

    } else {
        spanMatematica.style.color = "black"
    }

    if (notas.notaMayor.includes(1)) {
        spanLengua.style.color = "blue"

    } else {
        spanLengua.style.color = "black"
    }

    if (notas.notaMayor.includes(2)) {
        spanEfsi.style.color = "blue"

    } else {
        spanEfsi.style.color = "black"
    }
    

}
