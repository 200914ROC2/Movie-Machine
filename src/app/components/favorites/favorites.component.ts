import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { MovieService } from 'src/app/services/movie.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  userData;
  resultList: any[] = [];

  constructor(
    private backendService: BackendService,
    private movieService: MovieService,
    private sessionService: SessionService
  ) { }

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('user'));
    this.sessionService.getUserSessionData().forEach(data => {
      this.userData = data;
      this.generateFavList();
    });
    this.generateFavList();
  }

  generateFavList(): void {
    this.resultList = [];
    if (!this.userData) return;
    this.backendService.getFavorites(this.userData.id).subscribe(favList => {
      for (let movieId of favList) {
        this.movieService.getMovieById(movieId).subscribe(movie => this.resultList.push(movie));
      }
    })
  }
}
