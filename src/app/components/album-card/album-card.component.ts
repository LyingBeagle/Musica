import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss'],
  standalone:false
})
export class AlbumCardComponent {
  @Input() album!: {
    cover: string;
    title: string;
    year: number;
    tracks: number;
    duration: string;
    rating: number;
  };

  starsArray = new Array(5);
}