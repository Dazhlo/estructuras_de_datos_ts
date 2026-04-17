class TableHash<T> {
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
const usuario = new Map<string, string>();
usuario.set("user_123", "Ana Perez");
usuario.set("user_999", "Carlos Gómez");

usuario.get("user_123");



console.log(usuario)