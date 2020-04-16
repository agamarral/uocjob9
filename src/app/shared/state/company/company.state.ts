import { Company } from '@shared/models/company.model';
import { EntityState } from '@ngrx/entity';

export interface State extends EntityState<Company> {
    /*     ids: string[] | number[];
        entities: { [id: number]: Company }; */
}