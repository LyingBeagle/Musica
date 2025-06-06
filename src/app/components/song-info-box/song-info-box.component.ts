import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-song-info-box',
  templateUrl: './song-info-box.component.html',
  styleUrls: ['./song-info-box.component.scss'],
  standalone:false
})
export class SongInfoBoxComponent {

  constructor(private router: Router) { }

  goToAlbum(){
    this.router.navigate(['/album/4']);
  }

}
