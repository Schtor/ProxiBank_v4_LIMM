import { zip } from 'rxjs/operators';

export class Client {

    id: number;
    lastName: string;
    firstName: string;
    companyName: string;
    siretNumber: string;
    phone: string;
    email: string;
    addressClient: string;
    zipCodeClient: string;
    cityClient: string;
    accountList: Account[] = [];

    constructor(lastName?: string, firstName?: string, companyName?: string, siretNumber?: string, phone?: string, email?: string,
        addressClient?: string, zipCodeClient?: string, cityClient?: string, accountList?: Account[]) {
        this.lastName = lastName || null;
        this.firstName = firstName || null;
        this.companyName = companyName || null;
        this.siretNumber = siretNumber || null;
        this.phone = phone || null;
        this.email = email || null;
        this.addressClient = addressClient || null;
        this.zipCodeClient = zipCodeClient || null;
        this.cityClient = cityClient || null;
        this.accountList = accountList;
    }

}

