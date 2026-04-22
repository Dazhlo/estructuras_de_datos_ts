interface EntityP {
    id?: string
}

interface Prepository<T> extends EntityP {

    getAll(): Promise<T[]>;
    getById(id: string): Promise<T | null>;
    //saveSafe(item: T): Promise<T>;
    create(item: T): Promise<T>;



}