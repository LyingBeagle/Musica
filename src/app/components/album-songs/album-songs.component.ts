import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-album-songs',
  templateUrl: './album-songs.component.html',
  styleUrls: ['./album-songs.component.scss'],
  standalone:false
})
export class AlbumSongsComponent {

  constructor(private router: Router) { }

  goToSong(){
    this.router.navigate(['/foro-cancion']);
  }

}
