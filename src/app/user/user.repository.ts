import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export type User = {
  name: string;
}


@Injectable({
  providedIn: 'root'
})
export class UserRepository {

  private users$ = of([
    { name: 'Bruce Wayne' },
    { name: 'Clark Kent' },
    { name: 'Diana Prince' },
  ]);

  constructor() {
  }

  onUsers(): Observable<Array<User>> {
    return this.users$;
  }

}
