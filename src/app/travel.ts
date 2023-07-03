import { Owner } from "./owner";

export class Travel {

    id: string = '';
    owner = new Owner();
    ownerId: string = '';
    destination: string = '';
    price: number = 0;
    date: string = '';
}
