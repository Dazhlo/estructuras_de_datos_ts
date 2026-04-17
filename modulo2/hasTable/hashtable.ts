class TableHas<T> {
    private memoria: Array<T>
    constructor(tamaño: number = 50) {
        this.memoria = new Array(tamaño);
    }
    //convertir el string a un numero que es el indicie
    private generarHash(clave: string): number {
        let total = 0;
        for (let i = 0; i < clave.length; i++) {
            total += clave.charCodeAt(i);
        }
        return total % this.memoria.length;
    }


    set(clave: string, valor: T): void {
        const indice = this.generarHash(clave)
        this.memoria[indice] = valor;
    }

    get(clave: string): T {
        const indice = this.generarHash(clave);
        return this.memoria[indice];
    }




}

// Uso:
const usuarios = new TableHas<string>();
usuarios.set("user_123", "juan");
usuarios.set("user_999", "paquita");

// ¡Búsqueda inmediata sin bucles!
console.log(usuarios.get("user_999")); // Imprime "Ana Perez"