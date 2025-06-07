import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-artist-header',
  templateUrl: './artist-header.component.html',
  styleUrls: ['./artist-header.component.scss'],
  standalone:false
})
export class ArtistHeaderComponent {
  @Input() artist = {
    name: 'LEO REY',
    activeYears: '2006 - Actualidad',
    genres: ['Cumbia'],
    aka: ['Cecil Leiva', 'Kung Leo'],
    discographyCount: 5,
    relatedArtists: ['La Noche'],
    followers: 15988,
    image: 'assets/temp/leo-rey.png'
  };
}
