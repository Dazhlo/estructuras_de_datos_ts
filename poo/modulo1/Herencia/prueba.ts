abstract class Empleado {
    // Usando "Parameter Properties" para ahorrar código
    constructor(
        protected nombre: string,
        protected salarioBase: number
    ) { }

    abstract calcularSalario(dias: number): number;

    obtenerDetalles(dias: number): string {
        return `Empleado: ${this.nombre} | Salario Total: ${this.calcularSalario(dias)}`;
    }
}

class Desarrollador extends Empleado {
    constructor(
        nombre: string,
        salarioBase: number,
        private lenguaje: string // Atributo propio
    ) {
        super(nombre, salarioBase);
    }

    calcularSalario(dias: number): number {
        const bonoFijo = 500;
        return (this.salarioBase * dias) + bonoFijo;
    }
}

class Gerente extends Empleado {
    constructor(
        nombre: string,
        salarioBase: number,
        private equipoSize: number
    ) {
        super(nombre, salarioBase);
    }

    calcularSalario(dias: number): number {
        const bonoPorEquipo = 100 * this.equipoSize;
        return (this.salarioBase * dias) + bonoPorEquipo;
    }
}

// Prueba
const nomina: Empleado[] = [
    new Desarrollador("Juan", 100, "Java"),
    new Gerente("Pepe", 100, 5)
];

nomina.forEach(emp => console.log(emp.obtenerDetalles(7)));
