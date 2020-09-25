import { Component, OnInit } from '@angular/core';
import { movieApiConstants as mapi } from '../../../movie-api-constants';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  resultList: any[] = [];
  selectedMovie: Object;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getPopularMovies().subscribe(data => {
      console.log(data.results);
      this.resultList = data.results;
    })
  }

}
