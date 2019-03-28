import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { User } from './user';
import { MessageService } from './message.service';
import { catchError,  tap } from 'rxjs/operators';





const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'

})
export class UserService {
  public setLoading = false;
UserURL = 'http://127.0.0.1:3000/users';

  constructor(
    private messageService: MessageService,
    private http: HttpClient) { }

  private log(message: string) {
  this.messageService.add(`You now ${message}`);
}





handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}


  getUsers(): Observable<any> {
        return this.http.get<any>(this.UserURL);

  }


  updateUser(user: any): Observable<any> {
      const id =  user.id;
      const url = `${this.UserURL}/${id}`;
      return this.http.put(url, user, httpOptions).pipe(
      tap(_ => this.log(`edit user ${user.name}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }




  deleteUser(user: any): Observable<any> {
  const id =  user.id;
  const url = `${this.UserURL}/${id}`;

  return this.http.delete<User>(url, httpOptions).pipe(
    tap(_ => this.log(`delete user ${user.name}`)),
    catchError(this.handleError<User>('deleteUser'))
  );
}

  createUser(user: object) {
    this.setLoading = true;
    return this.http.post<User>(this.UserURL, user);
  }
}
