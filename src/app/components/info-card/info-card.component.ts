import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { movieApiConstants as mapi } from '../../../movie-api-constants';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) { }

  card: any;
  imageUrl = '';
  title: string;
  description: string;

  ngOnInit(): void {
    this.card = this.route.snapshot.paramMap.get("id");
    let url: string =  mapi.url + '' + mapi.endpoints.getMovieById + '/' +  this.card + '?api_key=' + mapi.apiKey;
    fetch(url)
    .then(response => response.json())
    .then(response => {
      this.imageUrl = "https://image.tmdb.org/t/p/original" + response.backdrop_path;
      this.title = response.original_title;
      this.description = response.overview;
    });
  }

}
