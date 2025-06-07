import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-links',
  templateUrl: './artist-links.component.html',
  styleUrls: ['./artist-links.component.scss'],
  standalone:false
})
export class ArtistLinksComponent {

  constructor(private router: Router) {}

  verDiscografia() {
    this.router.navigate(['/discografia']);
  }
}
