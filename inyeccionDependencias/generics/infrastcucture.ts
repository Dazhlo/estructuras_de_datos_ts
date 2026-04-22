
class MemoryRepository<T extends Entity> implements IRepository<T> {
    protected items: T[] = []

    async getAll(): Promise<T[]> {
        return this.items
    }

    async getById(id: string): Promise<T | null> {

        return this.items.find(item => item.id === id) || null;
    }

    async create(item: T): Promise<T> {
        this.items.push()
        return item
    }
    async delate(id: string): Promise<boolean> {
        const index = this.items.findIndex(item => item.id === id);
        if (index === -1) return false;
        this.items.slice(index, 1)
        return true;
    }
}

interface User extends Entity { name: string; }
interface Product extends Entity { price: number; }

// Creamos repositorios específicos sin escribir ni una línea de lógica extra
const userRepository = new MemoryRepository<User>();
const productRepository = new MemoryRepository<Product>();

//productRepository.create({ id: "101", price: 50 });
console.log(

    userRepository.create({ id: "1", name: "yo" })

)
console.log(productRepository.create({ id: "101", price: 50 }))