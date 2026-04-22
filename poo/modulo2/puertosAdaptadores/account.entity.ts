interface AccountRepository {
    crear(): void;
    //  depositar(): void;
    // retirar(): void;
}

class Account {

    constructor(
        public readonly id: string,
        public readonly Money: Money,
        public readonly userId: string //simulacuon de id de cliente

    ) { }

    crear(): void {

    }

}

