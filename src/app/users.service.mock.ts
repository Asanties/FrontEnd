

import {of} from 'rxjs';
import { User} from './user';
import {Observable} from 'rxjs';

export class MockUserService {
  getUsers(): Observable<User[]> {
    return of([]);
  }

  getUser() {
    return of({});
  }

   createUser(user: object) {
    return of ( true);
  }
  updateUser(){
    return of([]);
  }
}
