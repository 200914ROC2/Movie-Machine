import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  searchData;
  searchTerms: string;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params
      .forEach((params: Params) => {
        this.searchTerms = params["searchTerms"];
        this.movieService.searchMovies(this.searchTerms).subscribe(data => {
          console.log(data);
          this.searchData = data;
        })
      })
  }

}
