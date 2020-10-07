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

  login(creds): Observable<any> {
    return this.http.post(`${bapi.url}${bapi.endpoints.login}`, creds);
  }

}
