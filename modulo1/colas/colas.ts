
class Queue<T> {
    private items: T[] = [];

    // Operación: Entrar a la fila (O(1) amortizado en arrays de JS)
    enqueue(element: T): void {
        this.items.push(element);
    }
    // Operación: Atender al primero y sacarlo de la fila
    dequeue(): T | undefined {
        return this.items.shift();
    }

    front(): T | undefined {
        return this.items[0]
    }
}



const filaSuper = new Queue<string>();
filaSuper.enqueue("Ana");
filaSuper.enqueue("Carlos");
filaSuper.enqueue("Beatriz");

console.log(filaSuper.dequeue()); // Sale "Ana"
console.log(filaSuper.front()); // Ahora el primero es "Carlos"