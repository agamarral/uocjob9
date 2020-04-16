import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {
    catchError,
    map, pluck,
    startWith,
    switchMap
} from 'rxjs/operators';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { CompaniesService } from '@shared/services/companies.service';
import {
    loadAllCompanies,
    loadAllCompaniesSuccess,
    addCompany,
    addCompanySuccess,
    failure,
    deleteCompany,
    deleteCompanySuccess,
    updateCompany,
    updateCompanySuccess
} from '@shared/state/company/company.actions';

@Injectable()
export class CompaniesEffects {

    loadAll$ = createEffect(() => this.actions$.pipe(
        ofType(loadAllCompanies),
        startWith(loadAllCompanies()),
        switchMap(() => this.companiesService.getCompanies().pipe(
            map(companies => loadAllCompaniesSuccess({ companies }))
        )),
    ));

    create$ = createEffect(() => this.actions$.pipe(
        ofType(addCompany),
        pluck('company'),
        switchMap(company => this.companiesService.createCompany(company).pipe(
            map(company => addCompanySuccess({ company })),
            catchError(err => {
                alert(err.message);
                return of(failure({ err: { concern: 'CREATE', error: err } }));
            })
        ))
    ));


    update$ = createEffect(() => this.actions$.pipe(
        ofType(updateCompany),
        switchMap(({ company }) => this.companiesService.updateCompany(company).pipe(
            map(() => updateCompanySuccess({ company })),
            catchError(err => {
                alert(err.message);
                return of(failure({ err: { concern: 'UPDATE', error: err } }));
            })
        ))
    ));

    delete$ = createEffect(() => this.actions$.pipe(
        ofType(deleteCompany),
        pluck('id'),
        switchMap(id => this.companiesService.removeCompany(id).pipe(
            pluck('id'),
            map(id => deleteCompanySuccess({ id })),
            catchError(err => {
                alert(err.message);
                return of(failure({ err: { concern: 'UPDATE', error: err } }));
            })
        ))
    ));


    constructor(
        private actions$: Actions,
        private companiesService: CompaniesService
    ) { }


}
