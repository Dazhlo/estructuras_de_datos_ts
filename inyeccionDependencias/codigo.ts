interface Logger {
    log(massage: string): void
}

class consoleLogger implements Logger {
    log(massage: string) {
        console.log('mensaje de log de consola' + massage)
    }
}

class FileLogger implements Logger {
    log(massage: string) {
        console.log('File log' + massage)
    }
}

class AppService {
    constructor(private logger: Logger) { }
    run() {
        this.logger.log("ejecutando logs")
    }

}


const devApp = new AppService(new consoleLogger());
devApp.run();


const prodApp = new AppService(new FileLogger());
prodApp.run();