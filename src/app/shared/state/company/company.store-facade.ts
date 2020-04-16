import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Company } from '@shared/models/company.model';
import * as fromselector from '@shared/state/company';
import { State } from '@shared/state/company/company.state';
import { addCompany, deleteCompany, updateCompany } from '@shared/state/company/company.actions';

@Injectable()
export class CompaniesStoreFacade {

    companies$ = this.store.pipe(
        select(fromselector.getAllCompanies)
    );

    constructor(private store: Store<State>) {
        console.log("My store companies");
        console.log(store);
    }

    addCompany(company: Company) {
        this.store.dispatch(addCompany({ company }));
    }

    updateCompany(company: Partial<Company>) {
        this.store.dispatch(updateCompany({ company }));
    }

    deleteCompany(id: number) {
        this.store.dispatch(deleteCompany({ id }));
    }

    getCompanyById(id: number) {
        console.log("getCompanyById " + id);
        return this.store.pipe(
            select(fromselector.getCompanyById(id))
        );
    }
    getCompanyByCredentials(username: string, password: string) {
        console.log("getCompanyByCredentials " + username);
        return this.store.pipe(
            select(fromselector.getCompanyByCredentials(username, password))
        );
    }
}