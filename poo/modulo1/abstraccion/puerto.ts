
interface Transmisor {

    enviar(datos: string): void;

}
abstract class operacionBase {

    log(mensaje: string) {
        console.log('logsss' + mensaje);

    }

    abstract ejecutar(): number;
}

interface Almacen {
    guardar(id: string, contenido: any): Promise<void>;
    recuperar(id: string): Promise<any>;
}

class AlmacenLocal implements Almacen {
    async guardar(id: string, contenido: any) {
        console.log("Guardando físicamente en disco...");
    }
    async recuperar(id: string) { return "Datos del disco"; }
}

class AlmacenRemoto implements Almacen {
    async guardar(id: string, contenido: any) {
        console.log("Enviando datos por red...");
    }
    async recuperar(id: string) { return "Datos de la red"; }
}