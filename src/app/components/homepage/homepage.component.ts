import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  resultList: any[] = [];
  selectedMovie: Object;
  totalPages: number = 0;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams
      .forEach((params: Params) => {
        const pageNumber: number = (params["page"]) ? +params["page"] : 1;
        this.movieService.getPopularMovies(pageNumber).subscribe(data => {
          console.log(data.results);
          this.resultList = data.results;
          this.totalPages = data.total_pages;
        })
      })
  }

}
