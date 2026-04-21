import { Almacen } from "../interfaces/almacen.interface";

export class ProcesadorDatos {

    constructor(private readonly storage: Almacen) { }

    async ejecutar(data: any) {
        await this.storage.guardar('123', data);
    }
}


