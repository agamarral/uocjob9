import { Action, createAction, props } from '@ngrx/store';
import { Company } from '@shared/models/company.model';

export enum CompanyActionTypes {
    LOAD_ALL_COMPANIES = '[Company] Add all companies',
    LOAD_ALL_COMPANIES_SUCCESS = '[Company] Add all companies success',
    ADD_COMPANY = '[Company] Add company',
    ADD_COMPANY_SUCCESS = '[Company] Add company success',
    COMPANY_FAILED = '[Company] failure',
    UPDATE_COMPANY = '[Company] Update company',
    UPDATE_COMPANY_SUCCESS = '[Company] Update company success',
    DELETE_COMPANY = '[Company] Delete company',
    DELETE_COMPANY_SUCCESS = '[Company] Delete company success',
}
export const loadAllCompanies = createAction(
    CompanyActionTypes.LOAD_ALL_COMPANIES

);
export const loadAllCompaniesSuccess = createAction(
    CompanyActionTypes.LOAD_ALL_COMPANIES_SUCCESS,
    props<{ companies: Company[] }>()
);
export const addCompany = createAction(
    CompanyActionTypes.ADD_COMPANY,
    props<{ company: Company }>()
);
export const addCompanySuccess = createAction(
    CompanyActionTypes.ADD_COMPANY_SUCCESS,
    props<{ company: Company }>()
);

export const updateCompany = createAction(
    CompanyActionTypes.UPDATE_COMPANY,
    props<{ company: Partial<Company> }>()
);

export const updateCompanySuccess = createAction(
    CompanyActionTypes.UPDATE_COMPANY_SUCCESS,
    props<{ company: Partial<Company> }>()
);

export const deleteCompanySuccess = createAction(
    CompanyActionTypes.DELETE_COMPANY_SUCCESS,
    props<{ id: number }>()
);
export const deleteCompany = createAction(
    CompanyActionTypes.DELETE_COMPANY,
    props<{ id: number }>()
);
export const failure = createAction(
    CompanyActionTypes.COMPANY_FAILED,
    props<{ err: { concern: 'CREATE' | 'DELETE' | 'UPDATE', error: any } }>()
);



