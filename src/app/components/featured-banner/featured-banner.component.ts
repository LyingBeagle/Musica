import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-featured-banner',
  templateUrl: './featured-banner.component.html',
  styleUrls: ['./featured-banner.component.scss'],
  standalone:false
})
export class FeaturedBannerComponent  implements OnInit, OnDestroy {

  @Input() images: string[] = [
      'assets/albums/album1.jpg',
      'assets/albums/album2.jpg',
      'assets/albums/album3.jpg',
      'assets/albums/album4.jpg',
  ];
  
  currentIndex = 0;
  private intervalId!: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 5000); //se mueven cada 5 milisegundos
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

}
