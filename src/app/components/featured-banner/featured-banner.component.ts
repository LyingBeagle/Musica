import { Component, OnInit, OnDestroy, Input } from '@angular/core';

interface BannerItem{
  img: string;
  link:  string;
}

@Component({
  selector: 'app-featured-banner',
  templateUrl: './featured-banner.component.html',
  styleUrls: ['./featured-banner.component.scss'],
  standalone:false
})

export class FeaturedBannerComponent implements OnInit, OnDestroy {

  @Input() items: BannerItem[] = [
    { img: 'assets/albums/album1.jpg', link: '/album/1' },
    { img: 'assets/albums/album2.jpg', link: '/album/2' },
    { img: 'assets/albums/album3.jpg', link: '/album/3' },
    { img: 'assets/albums/album4.jpg', link: '/album/4' },
  ];
  
  currentIndex = 0;
  private intervalId!: any;

    ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    }, 5000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

}