import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SessionService {
  private userSessionData$ = new Subject<any>();
  constructor() { }

  updateUserSessionData(data:any) {
    localStorage.setItem('user', JSON.stringify(data));
    this.userSessionData$.next(data);
  }

  clearUserSessionData() {
    localStorage.clear();
    this.userSessionData$.next();
  }

  getUserSessionData(): Observable<any> {
    return this.userSessionData$.asObservable();
  }
}
