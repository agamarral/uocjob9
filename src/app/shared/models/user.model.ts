import { VocationalStudy, CollegeStudy } from '@shared/models/study.model';
import { Language } from '@shared/models/language.model';
import { Experience } from '@shared/models/experience.model';

export interface UserAddress {
  street: string;
  province: Province;
  municipe: Municipe;
}
export interface DocumentType {
  uid: number;
  name: string;
}
export interface Municipe {
  uid: number;
  name: string;
}
export interface Province {
  uid: number;
  name: string;
}
export interface User {
  password: string; // Only for mock
  psswrequest: boolean;
  id: number;
  username: string;
  name: string;
  surname: string;
  birthdate: string;
  phone: string;
  phone2: string;

  email: string;
  documentNumber: string;
  documentType: DocumentType;
  aboutMe: string;
  otherCompetences: string;
  license: string;
  avatar_hash: string;
  address: UserAddress;
  roles: string[];
  studies: (VocationalStudy | CollegeStudy)[];
  experiences: Experience[];
  languages: Language[];
  offers: number[];
}

export function createNewUser(user?: User): User {
  return {
    ...user,
    name: '',
    surname: '',
    id: -1,
    email: '',
    roles: [''],
    /*  avatar_hash: this.avatar_hash || null, */
    experiences: [],
    studies: [],
    languages: [],
    offers: []
  };
}
