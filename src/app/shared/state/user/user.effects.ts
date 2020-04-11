import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {
    catchError,
    exhaustMap,
    map, pluck,
    startWith,
    switchMap
} from 'rxjs/operators';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { StudentsService } from '@shared/services/students.service';
import {
    loadAllUsers,
    loadAllUsersSuccess,
    addUser,
    addUserSuccess,
    failure,
    deleteUser,
    deleteUserSuccess,
    updateUser,
    updateUserSuccess
} from '@shared/state/user/user.actions';

@Injectable()
export class UsersEffects {

    loadAll$ = createEffect(() => this.actions$.pipe(
        ofType(loadAllUsers),
        startWith(loadAllUsers()),
        switchMap(() => this.studentsService.getStudents().pipe(
            map(users => loadAllUsersSuccess({ users }))
        )),
    ));

    create$ = createEffect(() => this.actions$.pipe(
        ofType(addUser),
        pluck('user'),
        switchMap(user => this.studentsService.createStudent(user).pipe(
            map(user => addUserSuccess({ user })),
            catchError(err => {
                alert(err.message);
                return of(failure({ err: { concern: 'CREATE', error: err } }));
            })
        ))
    ));


    update$ = createEffect(() => this.actions$.pipe(
        ofType(updateUser),
        switchMap(({ user }) => this.studentsService.updateStudent(user).pipe(
            map(() => updateUserSuccess({ user })),
            catchError(err => {
                alert(err.message);
                return of(failure({ err: { concern: 'UPDATE', error: err } }));
            })
        ))
    ));

    delete$ = createEffect(() => this.actions$.pipe(
        ofType(deleteUser),
        pluck('id'),
        switchMap(id => this.studentsService.removeStudent(id).pipe(
            pluck('id'),
            map(id => deleteUserSuccess({ id })),
            catchError(err => {
                alert(err.message);
                return of(failure({ err: { concern: 'UPDATE', error: err } }));
            })
        ))
    ));


    constructor(
        private actions$: Actions,
        private studentsService: StudentsService
    ) { }


}
