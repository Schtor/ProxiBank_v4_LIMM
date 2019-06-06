export class Client {

    idClient: number;
    lastName: string;
    firstName: string;
    login: string;
    password: string;

    constructor(lastName?: string, firstName?: string, login?: string, password?: string) {
        this.lastName = lastName || null;
        this.firstName = firstName || null;
        this.login = login || null;
        this.password = password || null;
    }

}

