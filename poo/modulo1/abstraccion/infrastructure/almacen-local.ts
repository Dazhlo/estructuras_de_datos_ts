import { Almacen } from "../interfaces/almacen.interface";


export class AlmacenLocal implements Almacen {
    async guardar(id: string, contenido: any) { /* ... */ }
    async recuperar(id: string) { /* ... */ }
}
