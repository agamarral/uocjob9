import { UserAddress } from '@shared/models/user.model';

export interface ContactPerson {
    name: string;
    surname: string;
    phone: string;
    email: string;
}
export interface Company {
    password: string; // Only for mock
    id: number;
    username: string;
    brand: string;
    company: string;
    cif: string;
    url: string;
    address: UserAddress;
    contact: ContactPerson;
    offers: number[];
}