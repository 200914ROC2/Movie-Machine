import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() currentPage: number;
  @Input() totalPages: number;
  
  pageNumbers: number[] = [];

  constructor() { }

  ngOnInit(): void {
    for (var i = 1; i <= this.totalPages; i++) {
      this.pageNumbers.push(i);
    }
  }
}
