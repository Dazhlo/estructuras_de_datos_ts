interface PaymentGateway { // Corregido el nombre
    processPayment(amount: number): boolean;
}

class MercadoPago implements PaymentGateway {
    processPayment(amount: number): boolean {
        console.log(`${amount} pagado con MercadoPago`);
        return true;
    }
}

class Tarjeta implements PaymentGateway {
    processPayment(amount: number): boolean {
        console.log(`${amount} pagado con tarjeta local`);
        return true;
    }
}

class Paypal implements PaymentGateway {
    processPayment(amount: number): boolean {
        console.log(`${amount} pagado con PayPal`);
        return true;
    }
}

class AppServicePago {
    // Definimos la dependencia como privada y de solo lectura (readonly)
    constructor(private readonly paymentGateway: PaymentGateway) { }

    run(total: number) {
        const success = this.paymentGateway.processPayment(total);
        if (success) {
            console.log("Proceso terminado con éxito.");
        }
    }
}

const metodo = "mercado";
let gateway: PaymentGateway;

if (metodo === "mercado") {
    gateway = new MercadoPago();
} else {
    gateway = new Tarjeta();
}

const PagoApp = new AppServicePago(gateway);
PagoApp.run(150);