import { createOfferSuccess, updateOfferSuccess, deleteOfferSuccess, loadAllOffersSuccess } from '@shared/state/offers/offers.actions';
import { State } from '@shared/state/offers/offers.state';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Offer } from '@shared/models/offer.model';
import { createReducer, on } from '@ngrx/store';


export const offersAdapter: EntityAdapter<Offer> = createEntityAdapter<Offer>({
    selectId: (offer: Offer) => offer.id,
    sortComparer: false
});


export const offersInitialState: State = {
    ids: [],
    entities: { 0: <Offer>{} }
}
export const offersReducer = createReducer<State>(
    offersInitialState,
    on(loadAllOffersSuccess, (state, { offers }) =>
        offersAdapter.setAll(offers, state)
    ),
    on(createOfferSuccess, (state, { offer }) => {

        console.log("addOfferSuccess");
        console.log(offer);
        return offersAdapter.addOne(offer, state);

    }),
    on(updateOfferSuccess, (state, { offer }) => {
        console.log('updateOfferSuccess');
        console.log(offer);
        return offersAdapter.updateOne({ id: offer.id, changes: offer }, state);
    }),
    on(deleteOfferSuccess, (state, { id }) =>
        offersAdapter.removeOne(id, state)
    )
);
export const getOfferById = (id: number) => (state: State) => state.entities[id];