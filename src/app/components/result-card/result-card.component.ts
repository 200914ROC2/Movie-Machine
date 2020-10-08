import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss']
})
export class ResultCardComponent implements OnInit {

  @Input() data: any;
  imageUrl = '';
  constructor() { }

  ngOnInit(): void {
    if(this.data.poster_path) {
      this.imageUrl = "https://image.tmdb.org/t/p/original" + this.data.poster_path;
    }
  }

}
