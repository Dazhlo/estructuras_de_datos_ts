
abstract class Vehiculo {

    constructor(public marca: string) {

    }

    abstract mover(): void

    describir(): void {
        console.log("marca del vehiculo: " + this.marca)
    }
}

class Coche extends Vehiculo {
    mover(): void {
        console.log(this.marca, "conduciendo...")
    }
}
const miCoche = new Coche("Toyota");
miCoche.describir();
miCoche.mover();     