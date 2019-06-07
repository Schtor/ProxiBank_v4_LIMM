export class Client {

    // id: number;
    id: number;
    lastName: string;
    companyName: string;
    siretNumber: string;
    firstName: string;
    login: string;
    password: string;


    constructor( lastName?: string, firstName?: string,  companyName?: string, siretNumber?: string, login?: string, password?: string) {
        this.lastName = lastName || null;
        this.firstName = firstName || null;
        this.login = login || null;
        this.password = password || null;
        this.companyName = companyName || null;
        this.siretNumber = siretNumber || null;
    }

}

