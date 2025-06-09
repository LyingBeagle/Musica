import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-description',
  templateUrl: './profile-description.component.html',
  styleUrls: ['./profile-description.component.scss'],
  standalone:false
})
export class ProfileDescriptionComponent {
  description = '¿Quieres ver más que tu amigo?';
}