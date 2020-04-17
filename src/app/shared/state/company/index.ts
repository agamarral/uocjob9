import * as fromreducer from './company.reducer';
import { State } from './company.state';
import { Action, combineReducers, createFeatureSelector, createSelector } from '@ngrx/store';

export interface CompaniesState {
    companies: State;
}

/** Provide reducers with AoT-compilation compliance */
export function reducers(state: CompaniesState | undefined, action: Action) {
    return combineReducers({
        companies: fromreducer.companyReducer
    })(state, action)
}


/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
 */
export const getCompaniesState = createFeatureSelector<CompaniesState>('companies');

export const getCompaniesEntitiesState = createSelector(
    getCompaniesState,
    state => state.companies
);

export const {
    selectAll: getAllCompanies,
} = fromreducer.companiesAdapter.getSelectors(getCompaniesEntitiesState);

export const getCompanyById = (id: number) => createSelector(
    getCompaniesEntitiesState,
    fromreducer.getCompanyById(id)
);

export const getCompanyByCredentials = (username: string, password: string) => createSelector(
    getCompaniesEntitiesState,
    fromreducer.getCompanyByCredentials(username, password)
);

export const getCompanyByUsername = (username: string) => createSelector(
    getCompaniesEntitiesState,
    fromreducer.getCompanyByUsername(username)
);