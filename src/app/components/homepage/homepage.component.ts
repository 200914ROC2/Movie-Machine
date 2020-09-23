import { Component, OnInit } from '@angular/core';
import { movieApiConstants as mapi } from '../../../movie-api-constants';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  resultList: any[] = [];
  selectedMovie: Object;

  constructor() { }

  ngOnInit(): void {
    fetch(`${mapi.url}${mapi.endpoints.getPopularMovies}?api_key=${mapi.apiKey}`)
    .then(response => response.json())
    .then(response => {
      console.log(response.results);
      this.resultList = response.results;
    });
  }

}
