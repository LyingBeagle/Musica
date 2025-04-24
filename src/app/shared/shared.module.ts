import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from '../components/header/header.component';
import { FeaturedBannerComponent } from '../components/featured-banner/featured-banner.component';
import { SecondaryNavComponent } from '../components/secondary-nav/secondary-nav.component';
import { PopularDiscussionsComponent } from '../components/popular-discussions/popular-discussions.component';
import { FeaturedArtistsComponent } from '../components/featured-artists/featured-artists.component';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FeaturedBannerComponent,
    SecondaryNavComponent,
    PopularDiscussionsComponent,
    FeaturedArtistsComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    HeaderComponent,
    FeaturedBannerComponent,
    SecondaryNavComponent,
    PopularDiscussionsComponent,
    FeaturedArtistsComponent,
    FooterComponent,
  ]
})
export class SharedModule {}
