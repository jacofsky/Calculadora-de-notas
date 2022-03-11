class Notas {
    constructor(matematica, lengua, efsi) {
        
        this.matematica = matematica
        this.lengua = lengua
        this.efsi = efsi
        this.promedio = this.calcularPromedio()
        this.notaMayor = this.calcularMayorNota()
    
    }

    calcularPromedio() {
        return (parseInt(this.matematica) + parseInt(this.lengua) + parseInt(this.efsi)) / 3
    }

    calcularMayorNota() {

        const notas = [this.matematica, this.lengua,this.efsi]
        let notaMayor = 0
        let notaIndice = []

        
        console.log(Math.max(...notas))

        for (let i = 0; i < notas.length; i++) {


            if (notaMayor < notas[i]) {
                notaMayor = notas[i]
            }

        }

        for (let i = 0; i < notas.length; i++) {
            
            if (notaMayor === notas[i]) {
                notaIndice.push(i)
            }

        }

        return notaIndice
    }

}