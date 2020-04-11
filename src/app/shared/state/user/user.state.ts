import { User } from '@shared/models/user.model';
import { EntityState } from '@ngrx/entity';

export interface State extends EntityState<User> {
    /*     ids: string[] | number[];
        entities: { [id: number]: User }; */
}