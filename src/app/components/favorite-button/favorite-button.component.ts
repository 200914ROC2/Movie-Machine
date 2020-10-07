import { Component, Input, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss']
})
export class FavoriteButtonComponent implements OnInit {
  @Input() movieId: number;
  isSignedIn: boolean;
  isFavorite: boolean;

  constructor(
    private sessionService: SessionService,
    private backendService: BackendService
  ) { }

  ngOnInit(): void {
    this.sessionService.getUserSessionData().forEach(session => {
      if (session) {
        this.backendService.isFavorite(session.id, this.movieId).subscribe(isFavorite => this.isFavorite = isFavorite);
        this.isSignedIn = true;
      } else {
        this.isSignedIn = false;
      }
    })
  }

}
