// El Reto: Validador de Paréntesis
// Imagina que te doy un string que solo contiene estos caracteres: (, ), {, }, [ y ]. Tu tarea es escribir una función que determine si la secuencia es válida.
// Es válida si:

// Los paréntesis abiertos se cierran con el mismo tipo de paréntesis.

// Los paréntesis abiertos se cierran en el orden correcto.

// Ejemplo válido: "{[()]}" o "()[]{}"
// Ejemplo inválido: "{[(])}" o "((()"


class Pila<T> {
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

function esValido(s: string): boolean {
    const pila = new Pila<string>();

    // 2. Mapa de parejas.
    const parejas: Record<string, string> = {
        ')': '(',
        '}': '{',
        ']': '['
    };


    for (let char of s) {
        if (parejas[char]) {
            const ultimoAbierto = pila.pop();
            if (ultimoAbierto !== parejas[char]) {
                return false;
            }
        } else {
            pila.push(char);
        }
    }

    return pila.isEmpty();
}


console.log(esValido("{[()]}")); // true
console.log(esValido("()[]{}")); // true
console.log(esValido("{[(])}")); // false
console.log(esValido("((()"));   // false
const cierre = new Pila<string>();
console.log(esValido('s'))