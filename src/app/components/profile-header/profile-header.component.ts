import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss'],
  standalone:false
})
export class ProfileHeaderComponent {

  user = {
    name: 'Usuario',
    avatar: 'assets/avatar/default-avatar.png',
    followers: 15988,
    likes: 13000
  };

}