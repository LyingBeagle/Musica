import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-featured-artists',
  templateUrl: './featured-artists.component.html',
  styleUrls: ['./featured-artists.component.scss'],
  standalone:false
})
export class FeaturedArtistsComponent {
  @Input() artists: { name: string; image: string }[] = [
    { name: '31 Minutos',         image: 'assets/bands/band1.jpg' },
    { name: 'Leo Rey',            image: 'assets/bands/band2.jpg' },
    { name: 'Los Picantes',       image: 'assets/bands/band3.jpg' },
    { name: 'Chancho en Piedra',  image: 'assets/bands/band4.jpg' },
    { name: 'PSY',                image: 'assets/bands/band5.jpg' },
  ];
}
