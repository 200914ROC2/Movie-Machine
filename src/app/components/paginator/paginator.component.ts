import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() totalPages: number;
  
  currentPage: number;
  pageNumbers: number[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
      .forEach((params: Params) => {
        this.currentPage = (params["page"]) ? +params["page"] : 1;
      })
    this.generatePages();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.generatePages();
  }

  generatePages() : void {
    this.pageNumbers = [];
    for (var i = 1; i <= this.totalPages; i++) {
      this.pageNumbers.push(i);
    }
  }
}
