import { addCompanySuccess, updateCompanySuccess, deleteCompanySuccess, loadAllCompaniesSuccess } from '@shared/state/company/company.actions';
import { State } from '@shared/state/company/company.state';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Company } from '@shared/models/company.model';
import { createReducer, on } from '@ngrx/store';


export const companiesAdapter: EntityAdapter<Company> = createEntityAdapter<Company>({
    selectId: (company: Company) => company.id,
    sortComparer: false
});


export const companiesInitialState: State = {
    ids: [],
    entities: { 1: <Company>{} }
}
export const companyReducer = createReducer<State>(
    companiesInitialState,
    on(loadAllCompaniesSuccess, (state, { companies }) =>
        companiesAdapter.setAll(companies, state)
    ),
    on(addCompanySuccess, (state, { company }) =>
        companiesAdapter.addOne(company, state)
    ),
    on(updateCompanySuccess, (state, { company }) => {
        return companiesAdapter.updateOne({ id: company.id, changes: company }, state);
    }

    ),
    on(deleteCompanySuccess, (state, { id }) =>
        companiesAdapter.removeOne(id, state)
    )
);
export const getCompanyById = (id: number) => (state: State) => state.entities[id];
export const getCompanyByCredentials = (username: string, password: string) => (state: State) => {
    return Object.values(state.entities).find((company) => company.username === username && company.password === password)
};