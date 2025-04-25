import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popular-discussions',
  templateUrl: './popular-discussions.component.html',
  styleUrls: ['./popular-discussions.component.scss'],
  standalone:false
})
export class PopularDiscussionsComponent {

  @Input() discussions:{
    title: string; 
    excerpt: string; 
    image: string; 
  }[] = [{
      title: 'Mortal Kumbiat',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      image: 'assets/albums/album4.jpg'
    },{
      title: 'Steal this album',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      image: 'assets/albums/album2.jpg'
    },{
      title: 'Forever Howlong',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      image: 'assets/albums/album1.jpg'
    },{
      title: 'I...Am Steve (Bonus Songs from "A Minecraft Movie" Soundtrack)',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      image: 'assets/albums/album3.jpg'
    }
  ];

}
