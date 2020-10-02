import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() totalPages: number;
  
  currentPage: number;
  pageNumbers: number[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router  
  ) { }

  ngOnInit(): void {
    this.route.queryParams
      .forEach((params: Params) => {
        this.currentPage = (params["page"]) ? +params["page"] : 1;
        this.generatePages();
      })
  }

  ngOnChanges(changes: SimpleChanges) {
    this.generatePages();
  }

  generatePages(): void {
    const pad = 3; //number of page buttons shown = 2*pad + 1

    this.pageNumbers = [];

    let start: number = Math.max(this.currentPage - pad, 1);
    console.log(`start = ${start}`);
    let end: number = Math.min(this.currentPage + pad, this.totalPages);
    console.log(`end = ${end}`);
    if ((start === 1) && (end !== this.totalPages)) {
      end = Math.min(end + ((pad + 1) - this.currentPage), this.totalPages);
      console.log(`end = ${end}`);
    } else if ((start > 1) && (end === this.totalPages)) {
      start = Math.max(start - (pad - (this.totalPages - this.currentPage)), 1);
      console.log(`start = ${start}`);
    }

    for (var i = start; i <= end; i++) {
      this.pageNumbers.push(i);
    }
  }

  goToPage(pageToGo): void {
    this.router.navigate([], { 
      queryParams: { page: pageToGo },
      queryParamsHandling: "merge"});
  }
}
