import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Offer } from '@shared/models/offer.model';
import * as fromselector from '@shared/state/offers';
import { State } from '@shared/state/offers/offers.state';
import { addOffer, deleteOffer, updateOffer } from '@shared/state/offers/offers.actions';

@Injectable()
export class OffersStoreFacade {

    offers$ = this.store.pipe(
        select(fromselector.getAllOffers)
    );

    constructor(private store: Store<State>) {
        console.log("My store ");
        console.log(store);
    }

    addOffer(offer: Offer) {
        this.store.dispatch(addOffer({ offer }));
    }

    updateUser(offer: Partial<Offer>) {
        this.store.dispatch(updateOffer({ offer }));
    }

    deleteOffer(id: number) {
        this.store.dispatch(deleteOffer({ id }));
    }

    getOfferById(id: number) {
        console.log("getOfferById");
        return this.store.pipe(
            select(fromselector.getOfferById(id))
        );
    }
}