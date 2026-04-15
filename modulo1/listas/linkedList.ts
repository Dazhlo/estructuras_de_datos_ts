// nodo

class ListNode<T>{
    
    value : T;

    next: ListNode<T> | null; //apuntamos al siguinte nodo

    constructor( value:T){ //inicializamos en el contructor
    this.value = value;
    this.next = null;
    }
}

class LinkedList<T>{
 head: ListNode<T> | null; //primer nodo

constructor(){
    this.head = null;  //Inicializamos head
}

prepend(value : T) : void{
const newNode = new ListNode(value);  
newNode.next = this.head;  // el nuevo nodo apunta al ultimo 
this.head = newNode;     // ahora es el nuevo nodo
}


find(value:T):boolean{
let current = this.head;
while (current !== null){
    if(current.value == value) return true;
    current = current.next;
}
return false;

}

}


const miLista = new LinkedList<number>();
miLista.prepend(10); // Lista: 10 -> null
miLista.prepend(20); // Lista: 20 -> 10 -> null
console.log(miLista.find(10)); // true


//. npx tsx listas/linkedList.ts comando para correr el codigo