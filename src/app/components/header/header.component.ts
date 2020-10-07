import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userData: Object;
  constructor(private router: Router, private backendService: BackendService) { }

  ngOnInit(): void {
    this.userData = sessionStorage.getItem('user') ?
      JSON.parse(sessionStorage.getItem('user')) :
      null;
    console.log(this.userData);
  }

  search(searchTerms: string): void {
    this.router.navigateByUrl(`search/${searchTerms}`);
  }
}
