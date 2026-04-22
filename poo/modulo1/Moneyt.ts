export class Money {
  private constructor(
    private readonly amount: number,
    private readonly currency: string
  ) {
    // 1. Validación de integridad en el nacimiento
    if (amount < 0) throw new Error('Money amount cannot be negative');
  }

  public static create(amount: number, currency: string): Money {
    return new Money(amount, currency.toUpperCase());
  }

  // El objeto suma OTRO a SÍ MISMO
  public add(other: Money): Money {
    if (this.currency !== other.currency) {
      throw new Error(`Cannot add ${other.currency} to ${this.currency}`);
    }

    // 2. Inmutabilidad: Retornamos una nueva instancia
    return new Money(this.amount + other.amount, this.currency);
  }

  public equals(other: Money): boolean {
    return this.amount === other.amount && this.currency === other.currency;
  }
}

const MX = Money.create(100, 'mx')
const USA = Money.create(100, 'mx')

console.log(MX, USA)

USA.add(MX)
console.log(USA)