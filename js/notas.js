class Notas {
    constructor(matematica, lengua, efsi) {
        
        this.matematica = matematica
        this.lengua = lengua
        this.efsi = efsi
        this.promedio = this.calcularPromedio()
        this.notaMayor = this.calcularMayorNota()
    
    }

    calcularPromedio() {
        return (this.matematica + this.lengua + this.efsi) / 3
    }

    calcularMayorNota() {

        const notas = [this.matematica, this.lengua,this.efsi]
        const notasNombre = ["Matematica", "Lengua", "EFSI"]
        let notaMayor = 0
        let notaIndice = []

        for (let i = 0; i < notas.length; i++) {


            if (notaMayor < notas[i]) {
                notaMayor = notas[i]
            }

        }

        for (let i = 0; i < notas.length; i++) {
            
            if (notaMayor === notas[i]) {
                notaIndice.push(notasNombre[i])
            }

        }


        return notaIndice
    }

}