import { Action, createAction, props } from '@ngrx/store';
import { User } from '@shared/models/user.model';

export enum UserActionTypes {
    LOAD_ALL_USERS = '[User] Add all users',
    LOAD_ALL_USERS_SUCCESS = '[User] Add all users success',
    ADD_USER = '[User] Add user',
    ADD_USER_SUCCESS = '[User] Add user success',
    USER_FAILED = '[User] failure',
    UPDATE_USER = '[User] Update user',
    UPDATE_USER_SUCCESS = '[User] Update user success',
    DELETE_USER = '[User] Delete user',
    DELETE_USER_SUCCESS = '[User] Delete user success',
}
export const loadAllUsers = createAction(
    UserActionTypes.LOAD_ALL_USERS

);
export const loadAllUsersSuccess = createAction(
    UserActionTypes.LOAD_ALL_USERS_SUCCESS,
    props<{ users: User[] }>()
);
export const addUser = createAction(
    UserActionTypes.ADD_USER,
    props<{ user: User }>()
);
export const addUserSuccess = createAction(
    UserActionTypes.ADD_USER_SUCCESS,
    props<{ user: User }>()
);

export const updateUser = createAction(
    UserActionTypes.UPDATE_USER,
    props<{ user: Partial<User> }>()
);

export const updateUserSuccess = createAction(
    UserActionTypes.UPDATE_USER_SUCCESS,
    props<{ user: Partial<User> }>()
);

export const deleteUserSuccess = createAction(
    UserActionTypes.DELETE_USER_SUCCESS,
    props<{ id: number }>()
);
export const deleteUser = createAction(
    UserActionTypes.DELETE_USER,
    props<{ id: number }>()
);
export const failure = createAction(
    UserActionTypes.USER_FAILED,
    props<{ err: { concern: 'CREATE' | 'DELETE' | 'UPDATE', error: any } }>()
);



