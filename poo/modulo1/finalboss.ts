

class Money {
    private constructor(
        private readonly amount: number,
        private readonly currency: string
    ) {
        this.amount = amount
        this.currency = currency
     }


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
       const total = obj1.amount + obj2.amount
       const cur = obj1.currency
          
            return new Money(total,cur) 
       
        } else {
            console.log('No se puede.')
        }

   
   

    
    }
   
    }

     
  
    // getMony(): Money {
    //     return this.forEach(f => console.log(f.getMony))
    // }
    
    // euro = new Money(10, 'EUR')

    // money.forEach(f => console.log(false.))



const MX =  Money.create(100,'mx') 
const USA=  Money.create(10,'mx') 
console.log(
   MX.sumar(MX,USA)

)


