import { addUserSuccess, updateUserSuccess, deleteUserSuccess, loadAllUsersSuccess } from '@shared/state/user/user.actions';
import { State } from '@shared/state/user/user.state';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { User } from '@shared/models/user.model';
import { createReducer, on } from '@ngrx/store';


export const usersAdapter: EntityAdapter<User> = createEntityAdapter<User>({
    selectId: (user: User) => user.id,
    sortComparer: false
});

//export const usersInitialState: UsersState = usersAdapter.getInitialState();
export const usersInitialState: State = {
    ids: [],
    entities: { 1: <User>{} }
}
export const userReducer = createReducer<State>(
    usersInitialState,
    on(loadAllUsersSuccess, (state, { users }) =>
        usersAdapter.setAll(users, state)
    ),
    on(addUserSuccess, (state, { user }) =>
        usersAdapter.addOne(user, state)
    ),
    on(updateUserSuccess, (state, { user }) => {
        return usersAdapter.updateOne({ id: user.id, changes: user }, state);
    }

    ),
    on(deleteUserSuccess, (state, { id }) =>
        usersAdapter.removeOne(id, state)
    )
);
export const getUserById = (id: number) => (state: State) => state.entities[id];