import { Client } from './client';

export class Account {

    id: number;
    accountNumber: number;
    accountBalance: number;
    openingAccountDate: string;
    typeOfAccount: string;
    client: Client

    constructor(){
        
    }

}
