import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-circle-item-list',
  templateUrl: './circle-item-list.component.html',
  styleUrls: ['./circle-item-list.component.scss'],
  standalone:false
})
export class CircleItemListComponent {
  @Input() items: { name: string; image: string }[] = [];
}
