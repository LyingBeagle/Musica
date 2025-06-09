import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discografia',
  templateUrl: './discografia.page.html',
  styleUrls: ['./discografia.page.scss'],
  standalone: false
})
export class DiscografiaPage implements OnInit {

  albums: any[] = [];
  singles: any[] = [];
  eps: any[] = [];

  constructor() {}

  ngOnInit() {
    this.albums = [
      {
        cover: 'assets/temp/ritmo.png',
        title: 'Ritmo',
        year: 2021,
        tracks: 11,
        duration: '40 min 36 s',
        rating: 5
      },
      {
        cover: 'assets/temp/simplemente.png',
        title: 'Simplemente',
        year: 2014,
        tracks: 11,
        duration: '41 min 59 s',
        rating: 4
      }
    ];

    this.singles = [
      { cover: 'assets/temp/sencillo1.png' },
      { cover: 'assets/temp/sencillo2.png' }
    ]
  }

}