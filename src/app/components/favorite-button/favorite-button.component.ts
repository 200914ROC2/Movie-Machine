import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss']
})
export class FavoriteButtonComponent implements OnInit {
  @Input() movieId: number;
  userData;
  subscription: Subscription;
  isFavorite: boolean;

  constructor(
    private sessionService: SessionService,
    private backendService: BackendService
  ) { }

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('user'));
    this.sessionService.getUserSessionData().forEach(data => {
      this.userData = data;
      this.updateStatus();
    })
    this.updateStatus();
  }
  
  ngOnChanges(changes: SimpleChanges) {
    this.updateStatus();
  }

  updateStatus(): void {
    if (!this.userData) return;
    this.backendService.isFavorite(this.userData.id, this.movieId).subscribe(isFavorite => this.isFavorite = isFavorite);
  }

  toggleFavorite(): void {
    if (this.isFavorite) {
      this.backendService.unsetFavorite(this.userData.id, this.movieId).subscribe(data => this.updateStatus());
    } else {
      this.backendService.setFavorite(this.userData.id, this.movieId).subscribe(data => this.updateStatus());
    }
  }
}
