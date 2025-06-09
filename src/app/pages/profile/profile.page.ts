import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone:false
})
export class ProfilePage implements OnInit{

  albums: any[] = [];
  followedArtists: any[] = [];
  followedUsers: any[] = [];

  constructor() {}

  ngOnInit() {
      this.albums = [
      { cover: 'assets/temp/sencillo1.png' },
      { cover: 'assets/temp/sencillo2.png' }
    ]

      this.followedArtists = [
        { name: '31 Minutos', image: 'assets/bands/band1.jpg' },
        { name: 'Leo Rey', image: 'assets/bands/band2.jpg' },
        { name: 'Los Picantes', image: 'assets/bands/band3.jpg' },
        { name: 'Chancho en piedra', image: 'assets/bands/band4.jpg' },
        { name: 'PSY', image: 'assets/bands/band5.jpg' },
      ]

      this.followedUsers = [
        { name: 'XxXKirito_BellacoXxX', image: 'assets/avatar/default-avatar.png' },
        { name: 'yiyoyojasko', image: 'assets/avatar/default-avatar.png' },
        { name: 'pajarito21', image: 'assets/avatar/default-avatar.png' },
      ];
   }

}