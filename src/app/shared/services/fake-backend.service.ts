import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '@shared/models/user.model';
import { Offer } from '@shared/models/offer.model';
import { Company } from '@shared/models/company.model';


@Injectable({
  providedIn: 'root'
})
export class FakeBackendService implements InMemoryDbService {

  constructor() { }

  createDb() {

    const users: User[] =
      [{
        password: '1234',
        id: 1,
        username: 'natxo.fernandez@toto.org',
        avatar_hash: '',
        name: 'Natxo',
        surname: 'Fernández',
        email: 'natxo.fernandez@toto.org',
        birthdate: '23/12/1977',
        phone: '4445452',
        phone2: '',
        documentType: { uid: 2, name: 'NIF' },
        documentNumber: '88888888N',
        address: { street: 'C/ Goya 25', province: { uid: 1, name: 'MADRID' }, municipe: { uid: 1, name: 'Getafe' } },
        roles: [],
        studies: [{
          uid: 1,
          level: { uid: 1, name: 'Ciclo formativo' },
          title: { uid: 13004, name: 'Técnico Superior en Administración de Sistemas Informáticos en Red' },
          institution: { uid: 29005989, name: 'I.E.S. Politécnico Jesús Marín' },
          date: '1397293028',
          certificate: true,
          bilingue: true,
          category: { uid: 13, name: 'Informática y Comunicaciones' },
          grade: { uid: 3, name: 'superior' },
          dual: false
        }],
        experiences: [{
          uid: 1,
          company: 'Grifols',
          position: 'programador front end junior',
          startdate: '01/06/2016',
          enddate: '31/12/2017',
          tasks: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          uid: 2,
          company: 'Ikea',
          position: 'programador front end senior',
          startdate: '08/01/2019',
          enddate: '31/12/2019',
          tasks: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          uid: 3,
          company: 'Ikea',
          position: 'Ingeniero sistema',
          startdate: '08/01/2020',
          enddate: 'now',
          tasks: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }

        ],
        languages: [
          {
            uid: 4,
            level: { uid: 6, name: 'C2' },
            name: { uid: 1, name: 'Inglés' },
            date: '1548320228'
          },
          {
            uid: 3,
            level: { uid: 4, name: 'B2' },
            name: { uid: 2, name: 'Francés' },
            date: '1548320228'
          }
        ],
        offers: [1, 3],
        license: 'B1,C1',
        aboutMe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        otherCompetences: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }];


    const jobOffers: Offer[] = [
      {
        id: 1,
        company: { uid: 1, name: 'Eixos Creativa' },
        job: {
          uid: 1, name: 'Professor Extraescolars programació i robòtica educativa',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        province: { uid: 28, name: 'MADRID' },
        municipe: { uid: 65, name: 'Getafe' },
        category: { uid: 1, name: 'Informática y Comunicaciones' },
        date: '30/01/2019',
        title: [
          {
            uid: 13002,
            name: 'Profesional Básico en Informática y Comunicaciones'
          },
          {
            uid: 13003,
            name: 'Técnico en Sistemas Microinformáticos y Redes'
          },
          {
            uid: 13004,
            name: 'Técnico Superior en Administración de Sistemas Informáticos en Red'
          },
          {
            uid: 13005,
            name: 'Técnico Superior en Desarrollo de Aplicaciones Web'
          }
        ]
      },
      {
        id: 2,
        company: { uid: 2, name: 'Ki - Works' },
        job: {
          uid: 2, name: 'Programaador Jr Java',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        province: { uid: 1, name: 'MADRID' },
        municipe: { uid: 1, name: 'Getafe' },
        category: { uid: 1, name: 'Informática y Comunicaciones' },
        date: '28/01/2019',
        title: [
          {
            uid: 13005,
            name: 'Técnico Superior en Desarrollo de Aplicaciones Web'
          }
        ]
      },
      {
        id: 3,
        company: { uid: 3, name: 'Tecnic Consultores' },
        job: {
          uid: 3, name: 'Programador.net',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        province: { uid: 1, name: 'MADRID' },
        municipe: { uid: 1, name: 'Getafe' },
        category: { uid: 1, name: 'Informática y Comunicaciones' },
        date: '28/01/2019',
        title: [
          {
            uid: 13004,
            name: 'Técnico Superior en Administración de Sistemas Informáticos en Red'
          },
          {
            uid: 13005,
            name: 'Técnico Superior en Desarrollo de Aplicaciones Web'
          }
        ]
      },
      {
        id: 4,
        company: { uid: 4, name: 'GRUPO CMC' },
        job: {
          uid: 4, name: 'Programador Junior Java Spring boot',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        province: { uid: 1, name: 'MADRID' },
        municipe: { uid: 1, name: 'Getafe' },
        category: { uid: 1, name: 'Informática y Comunicaciones' },
        date: '25/01/2019',
        title: [
          {
            uid: 13005,
            name: 'Técnico Superior en Desarrollo de Aplicaciones Web'
          }
        ]
      },
      {
        id: 5,
        company: { uid: 5, name: 'Servium' },
        job: {
          uid: 4, name: 'Programador Junior Java Spring boot',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        province: { uid: 1, name: 'MADRID' },
        municipe: { uid: 1, name: 'Getafe' },
        category: { uid: 2, name: 'Administración y Gestión' },
        date: '25/01/2019',
        title: [
          {
            uid: 13005,
            name: 'Técnico Superior en Desarrollo de Aplicaciones Web'
          }
        ]
      },
      {
        id: 6,
        company: { uid: 6, name: 'PEPPER' },
        job: {
          uid: 5, name: 'DESARROLLADOR/A SOFTWARE',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        province: { uid: 1, name: 'MADRID' },
        municipe: { uid: 1, name: 'Getafe' },
        category: { uid: 1, name: 'Informática y Comunicaciones' },
        date: '23/01/2019',
        title: [
          {
            uid: 13004,
            name: 'Técnico Superior en Administración de Sistemas Informáticos en Red'
          },
          {
            uid: 13005,
            name: 'Técnico Superior en Desarrollo de Aplicaciones Web'
          }
        ]
      }
    ];
    const companies: Company[] = [{
      id: 34,
      username: 'pericogrifols@toto.org',
      password: '1234',
      brand: 'grifols',
      company: 'Laboratorios Grifols SA',
      cif: 'A58389123',
      address: {
        street: 'CALLE JESUS I MARIA, 6',
        province: {
          name: 'BARCELONA',
          uid: 8
        },
        municipe: {
          name: 'BARCELONA',
          uid: 19
        }
      },
      contact: {
        name: 'Perico',
        surname: 'de los Palotes',
        phone: '666666666',
        email: 'pericogrifols@toto.org'
      }
    }];

    return { users, jobOffers, companies }
  }
}
