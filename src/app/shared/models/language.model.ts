export interface Language {
  uid: number;
  level: LanguageLevel;
  name: LanguageName;
  date: string;
}
export interface LanguageName {
  uid: number;
  name: string;
}
export interface LanguageLevel {
  uid: number;
  name: string;
}

export const languageCatalog: LanguageName[] = [{ uid: 1, name: 'Inglés' }, { uid: 2, name: 'Francés' },
{ uid: 3, name: 'Italiano' }, { uid: 4, name: 'Catalán' },
{ uid: 5, name: 'Alemán' }, { uid: 6, name: 'Ruso' },
{ uid: 6, name: 'Chino' }];

export const languageLevels: LanguageLevel[] = [{ uid: 1, name: 'A1' }, { uid: 2, name: 'A2' }, { uid: 3, name: 'B1' },
{ uid: 2, name: 'B2' }, { uid: 5, name: 'C1' }, { uid: 6, name: 'C2' }]
