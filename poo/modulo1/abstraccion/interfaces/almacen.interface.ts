export interface Almacen {
    guardar(id: string, contenido: any): Promise<void>;
    recuperar(id: string): Promise<any>;
}
