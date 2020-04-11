import * as fromreducer from './offers.reducer';
import { State } from './offers.state';
import { Action, combineReducers, createFeatureSelector, createSelector } from '@ngrx/store';

export interface OffersState {
    offers: State;
}

/** Provide reducers with AoT-compilation compliance */
export function reducers(state: OffersState | undefined, action: Action) {
    return combineReducers({
        offers: fromreducer.offersReducer
    })(state, action)
}


/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
 */
export const getOffersState = createFeatureSelector<OffersState>('offers');

export const getOffersEntitiesState = createSelector(
    getOffersState,
    state => state.offers
);

export const {
    selectAll: getAllOffers,
} = fromreducer.offersAdapter.getSelectors(getOffersEntitiesState);

export const getOfferById = (id: number) => createSelector(
    getOffersEntitiesState,
    fromreducer.getOfferById(id)
);
