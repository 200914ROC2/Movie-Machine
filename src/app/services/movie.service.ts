import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { movieApiConstants as mapi } from '../../movie-api-constants';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<any> {
    return this.http.get(`${mapi.url}${mapi.endpoints.getPopularMovies}?api_key=${mapi.apiKey}`);
  }

  searchMovies(searchTerms: string, page: number): Observable<any> {
    return this.http.get(`${mapi.url}${mapi.endpoints.searchMovieByName}?api_key=${mapi.apiKey}&query=${searchTerms}&page=${page}`);
  }
}
