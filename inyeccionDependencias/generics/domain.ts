interface Entity {
    id: string

}

interface IRepository<T extends Entity> {

    getAll(): Promise<T[]>;
    getById(id: string): Promise<T | null>;
    create(item: T): Promise<T>;
    delate(id: string): Promise<boolean>;
}


