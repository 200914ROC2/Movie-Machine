import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { backendApiConstants as bapi } from '../../backend-api-constants';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  registerUser(user): Observable<any> {
    return this.http.post<User>(`${bapi.url}${bapi.endpoints.register}`, user);
  }
}
