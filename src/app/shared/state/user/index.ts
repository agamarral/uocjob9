import * as fromreducer from './user.reducer';
import { State } from './user.state';
import { Action, combineReducers, createFeatureSelector, createSelector } from '@ngrx/store';

export interface UsersState {
    users: State;
}

/** Provide reducers with AoT-compilation compliance */
export function reducers(state: UsersState | undefined, action: Action) {
    return combineReducers({
        users: fromreducer.userReducer
    })(state, action)
}


/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
 */
export const getUsersState = createFeatureSelector<UsersState>('users');

export const getUsersEntitiesState = createSelector(
    getUsersState,
    state => state.users
);

export const {
    selectAll: getAllUsers,
} = fromreducer.usersAdapter.getSelectors(getUsersEntitiesState);

export const getUserById = (id: number) => createSelector(
    getUsersEntitiesState,
    fromreducer.getUserById(id)
);
export const getUserByCredentials = (username: string, password: string) => createSelector(
    getUsersEntitiesState,
    fromreducer.getUserByCredentials(username, password)
);