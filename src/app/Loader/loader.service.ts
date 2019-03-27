import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReplaySubject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class LoaderService {
  public isLoading = new BehaviorSubject(false);

  constructor() {}
}
