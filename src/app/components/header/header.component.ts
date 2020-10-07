import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { SessionService } from 'src/app/services/session.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userData: Object;
  subscription: Subscription;
  constructor(private router: Router,
    private sessionService: SessionService,
    private backendService: BackendService) { }

  ngOnInit(): void {
    this.subscription = this.sessionService.getUserSessionData()
      .subscribe(data => this.userData = data || null);
  }

  search(searchTerms: string): void {
    this.router.navigateByUrl(`search/${searchTerms}`);
  }

  logout() {
    console.log('Logging out...');
    this.sessionService.clearUserSessionData();
  }
}
