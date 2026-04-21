class cuentaBancaria {

    private _saldo: number;
    constructor(saldoInicial: number) {
        this._saldo = saldoInicial;
    }


    get saldo(): number {
        return this._saldo
    }

    set depositar(cantidad: number) {
        if (cantidad > 0) {
            this._saldo += cantidad;
        }


    }

}

const cuenta = new cuentaBancaria(100);

console.log(cuenta.saldo);
cuenta.depositar = 50;
console.log(cuenta.saldo);