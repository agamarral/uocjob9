import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {
    catchError,
    exhaustMap,
    map, pluck,
    startWith,
    switchMap
} from 'rxjs/operators';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { OffersService } from '@shared/services/offers.service';
import {
    loadAllOffers,
    loadAllOffersSuccess,
    addOffer,
    addOfferSuccess,
    failure,
    deleteOffer,
    deleteOfferSuccess,
    updateOffer,
    updateOfferSuccess
} from '@shared/state/offers/offers.actions';

@Injectable()
export class OffersEffects {

    loadAll$ = createEffect(() => this.actions$.pipe(
        ofType(loadAllOffers),
        startWith(loadAllOffers()),
        switchMap(() => this.offersService.getOffers().pipe(
            map(offers => loadAllOffersSuccess({ offers }))
        )),
    ));

    create$ = createEffect(() => this.actions$.pipe(
        ofType(addOffer),
        pluck('offer'),
        switchMap(offer => this.offersService.createOffer(offer).pipe(
            map(offer => addOfferSuccess({ offer })),
            catchError(err => {
                alert(err.message);
                return of(failure({ err: { concern: 'CREATE', error: err } }));
            })
        ))
    ));

    update$ = createEffect(() => this.actions$.pipe(
        ofType(updateOffer),
        switchMap(({ offer }) => this.offersService.updateOffer(offer).pipe(
            map(() => updateOfferSuccess({ offer })),
            catchError(err => {
                alert(err.message);
                return of(failure({ err: { concern: 'UPDATE', error: err } }));
            })
        ))
    ));

    delete$ = createEffect(() => this.actions$.pipe(
        ofType(deleteOffer),
        pluck('id'),
        switchMap(id => this.offersService.removeOffer(id).pipe(
            pluck('id'),
            map(id => deleteOfferSuccess({ id })),
            catchError(err => {
                alert(err.message);
                return of(failure({ err: { concern: 'UPDATE', error: err } }));
            })
        ))
    ));


    constructor(
        private actions$: Actions,
        private offersService: OffersService
    ) { }


}
