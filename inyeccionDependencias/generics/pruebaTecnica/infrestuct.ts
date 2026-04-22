


class StorageService<T extends EntityP> implements Prepository<T> {

    constructor(private repository: Prepository<T>) { }

    async create(item: T): Promise<T> {
        return this.saveSafe(item)
    }

    async getAll(): Promise<T[]> {
        return await this.repository.getAll();
    }
    async getById(id: string): Promise<T | null> {
        return await this.repository.getById(id)
    }
    async saveSafe(item: T): Promise<T> {

        const exite = await this.repository.getById(item.id.toString());
        if (exite) {
            throw new Error('el id ya existe');
        }
        return await this.repository.create(item)
    }

}

interface Producto extends EntityP { name: string, price: number }
