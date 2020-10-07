import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { backendApiConstants as bapi } from '../../backend-api-constants';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  registerUser(user): Observable<any> {
    return this.http.post(`${bapi.url}${bapi.endpoints.register}`, user);
  }

  getFavorites(userId: number): Observable<number[]> {
    return this.http.get<number[]>(`${bapi.url}${bapi.endpoints.favorites}?userId=${userId}`);
  }

  isFavorite(userId: number, movieId: number): Observable<boolean> {
    return new Observable<boolean>(subscriber => {
      this.getFavorites(userId).subscribe(data => {
        if (data.includes(movieId)) {
          subscriber.next(true);
        } else {
          subscriber.next(false);
        }
        subscriber.complete();
      });
    });
  }
  
  login(creds): Observable<any> {
    return this.http.post(`${bapi.url}${bapi.endpoints.login}`, creds);
  }

}
