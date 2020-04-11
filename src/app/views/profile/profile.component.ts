import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { User } from '@shared/models/user.model';
import { UsersStoreFacade } from '@shared/state/user/user.store-facade';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {

  user$: Observable<User> = this.route.params.pipe(
    map(params => params.id),
    switchMap(id => this.usersStorefacade.getUserById(id))
  );

  constructor(private usersStorefacade: UsersStoreFacade, private route: ActivatedRoute) {

  }

  ngOnInit() {
  }
}