import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { User } from '@shared/models/user.model';
import * as fromselector from '@shared/state/user';
import { State } from '@shared/state/user/user.state';
import { addUser, deleteUser, updateUser } from '@shared/state/user/user.actions';

@Injectable()
export class UsersStoreFacade {

    users$ = this.store.pipe(
        select(fromselector.getAllUsers)
    );

    constructor(private store: Store<State>) {
        console.log("My store ");
        console.log(store);
    }

    addUser(user: User) {
        this.store.dispatch(addUser({ user }));
    }

    updateUser(user: Partial<User>) {
        this.store.dispatch(updateUser({ user }));
    }

    deleteUser(id: number) {
        this.store.dispatch(deleteUser({ id }));
    }

    getUserById(id: number) {
        console.log("getUserById");
        return this.store.pipe(
            select(fromselector.getUserById(id))
        );
    }
    getUserByCredentials(username: string, password: string) {
        console.log("getUserByCredentials");
        return this.store.pipe(
            select(fromselector.getUserByCredentials(username, password))
        );
    }
    getUserByUsername(username: string) {
        console.log("getUserByUsername");
        return this.store.pipe(
            select(fromselector.getUserByUsername(username))
        );
    }
}