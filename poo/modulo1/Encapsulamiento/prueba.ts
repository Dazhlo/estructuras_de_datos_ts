class Termostato {

    private _temperatura: number;

    constructor(tempInicial: number) {

        this._temperatura = tempInicial
    }

    get temperatura(): number {
        return this._temperatura
    }

    set temperatura(nuevaTemp: number) {
        if (nuevaTemp >= 10 && nuevaTemp <= 30) {
            this._temperatura += nuevaTemp;
        } else {
            console.log('temepratura.no valiua')

        }


    }



}

const cuartoClima = new Termostato(6);
cuartoClima.temperatura = 40
console.log(cuartoClima.temperatura);

