//clase padre

class Persona {
    protected nombre: string
    constructor(nombre: string) {
        this.nombre = nombre;
    }


    presentarse(): void {
        console.log(this.nombre)

    }
}

class Empleados extends Persona {
    private sueldo: number;
    constructor(nombre: string, sueldo: number) {
        super(nombre)
        this.sueldo = sueldo;
    }

    presentarse(): void {
        super.presentarse();
        console.log(`y gano ${this.sueldo}`);
    }
}
const emp = new Empleados("Juanito", 10);
emp.presentarse();