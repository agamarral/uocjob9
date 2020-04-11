import { Offer } from '@shared/models/offer.model';
import { EntityState } from '@ngrx/entity';

export interface State extends EntityState<Offer> {
    /*     ids: string[] | number[];
        entities: { [id: number]: Offer }; */
}