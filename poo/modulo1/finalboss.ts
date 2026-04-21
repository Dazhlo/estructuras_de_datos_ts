

class Money {
    private constructor(
        private readonly amount: number,
        private readonly currency: string
    ) { }


    public static create(amount: number, currency: string) {
        return new Money(amount, currency)
    }

    public validateSuma(obj1: Money, obj2: Money): boolean {
        if (obj1.currency === obj2.currency) {
            return true
        } else {
            return false
        }
    }

    public sumar(obj1: Money, obj2: Money) {
        if (
            this.validateSuma(obj1, obj2)
        ) {
            //  this.currency = obj1 + obj2;
            return new Money(this.amount, this.currency)
            //  const total = obj1.amount + obj2.amount;
            //  console.log()
        } else {
            console.log('No se puede.')
        }
    }
    // getMony(): Money {
    //     return this.forEach(f => console.log(f.getMony))
    // }

    // euro = new Money(10, 'EUR')

    // money.forEach(f => console.log(false.))


}


