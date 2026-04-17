class Stack<T> {
    private items: T[] = [];  //array para guardar los datos

    push(element: T): void {
        this.items.push(element)//apilar en la pila

    }
    //Quitar un dato de arriba de la pila
    pop(): T | undefined {
        return this.items.pop();
    }
    // Ver el utlimo dato de la pila sin quitarlo
    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }
    isEmpty(): boolean {
        if (this.items.length === 0) {
            return true
        }
        return false
    }

}

const historial = new Stack<string>();
historial.push("google.com");
historial.push("netflix.com");
historial.push("github.com"); // github es la última

//console.log(historial.pop()); // Saca "github.com"
//console.log(historial.peek()); // Ahora el tope es "youtube.com"
console.log(historial.peek())