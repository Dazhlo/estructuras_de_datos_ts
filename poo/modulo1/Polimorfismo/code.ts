interface Forma {
    calcularArea(): number
}

class Circulo implements Forma {
    constructor(private radio: number) { }

    calcularArea(): number {
        return Math.PI + this.radio ** 2;
    }

}

class Rectangulo implements Forma {
    constructor(private ancho: number, private alto: number) { }
    calcularArea(): number {
        return this.ancho * this.alto;
    }

}

const formas: Forma[] = [new Circulo(5), new Rectangulo(4, 6)];
formas.forEach(f => console.log(f.calcularArea()));