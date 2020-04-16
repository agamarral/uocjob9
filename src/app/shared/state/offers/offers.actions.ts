import { Action, createAction, props } from '@ngrx/store';
import { Offer } from '@shared/models/offer.model';

export enum OfferActionTypes {
    LOAD_ALL_OFFERS = '[Offer] Add all offers',
    LOAD_ALL_OFFER_SUCCESS = '[Offer] Add all offers success',
    CREATE_OFFER = '[Offer] Create offer',
    CREATE_OFFER_SUCCESS = '[Offer] Create offer success',
    OFFER_FAILED = '[Offer] failure',
    UPDATE_OFFER = '[Offer] Update offer',
    UPDATE_OFFER_SUCCESS = '[Offer] Update offer success',
    DELETE_OFFER = '[Offer] Delete offer',
    DELETE_OFFER_SUCCESS = '[Offer] Delete offer success',
}
export const loadAllOffers = createAction(
    OfferActionTypes.LOAD_ALL_OFFERS

);
export const loadAllOffersSuccess = createAction(
    OfferActionTypes.LOAD_ALL_OFFER_SUCCESS,
    props<{ offers: Offer[] }>()
);
export const createOffer = createAction(
    OfferActionTypes.CREATE_OFFER,
    props<{ offer: Offer }>()
);
export const createOfferSuccess = createAction(
    OfferActionTypes.CREATE_OFFER_SUCCESS,
    props<{ offer: Offer }>()
);

export const updateOffer = createAction(
    OfferActionTypes.UPDATE_OFFER,
    props<{ offer: Partial<Offer> }>()
);

export const updateOfferSuccess = createAction(
    OfferActionTypes.UPDATE_OFFER_SUCCESS,
    props<{ offer: Partial<Offer> }>()
);

export const deleteOfferSuccess = createAction(
    OfferActionTypes.DELETE_OFFER_SUCCESS,
    props<{ id: number }>()
);
export const deleteOffer = createAction(
    OfferActionTypes.DELETE_OFFER,
    props<{ id: number }>()
);
export const failure = createAction(
    OfferActionTypes.OFFER_FAILED,
    props<{ err: { concern: 'CREATE' | 'DELETE' | 'UPDATE', error: any } }>()
);



