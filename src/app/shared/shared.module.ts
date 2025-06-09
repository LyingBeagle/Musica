import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '../components/header/header.component';
import { FeaturedBannerComponent } from '../components/featured-banner/featured-banner.component';
import { SecondaryNavComponent } from '../components/secondary-nav/secondary-nav.component';
import { PopularDiscussionsComponent } from '../components/popular-discussions/popular-discussions.component';
import { FeaturedArtistsComponent } from '../components/featured-artists/featured-artists.component';
import { FooterComponent } from '../components/footer/footer.component';

import { LoginMenuComponent } from '../components/login-menu/login-menu.component';
import { CrearCuentaMenuComponent } from '../components/crear-cuenta-menu/crear-cuenta-menu.component';
import { RecuperarMenuComponent } from '../components/recuperar-menu/recuperar-menu.component';

import { AlbumHeaderComponent } from '../components/album-header/album-header.component';
import { AlbumRatingComponent } from '../components/album-rating/album-rating.component';
import { AlbumInfoBoxComponent } from '../components/album-info-box/album-info-box.component';
import { AlbumSongsComponent } from '../components/album-songs/album-songs.component';
import { CommentFormComponent } from '../components/comment-form/comment-form.component';
import { CommentItemComponent } from '../components/comment-item/comment-item.component';

import { SongHeaderComponent } from '../components/song-header/song-header.component';
import { SongInfoBoxComponent } from '../components/song-info-box/song-info-box.component';

import { ArtistHeaderComponent } from '../components/artist-header/artist-header.component';
import { ArtistLinksComponent } from '../components/artist-links/artist-links.component';

import { AlbumCardComponent } from '../components/album-card/album-card.component';
import { SingleCardComponent } from '../components/single-card/single-card.component';

import { ProfileHeaderComponent } from '../components/profile-header/profile-header.component';
import { ProfileDescriptionComponent } from '../components/profile-description/profile-description.component';
import { CircleItemListComponent } from '../components/circle-item-list/circle-item-list.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FeaturedBannerComponent,
    SecondaryNavComponent,
    PopularDiscussionsComponent,
    FeaturedArtistsComponent,
    FooterComponent,
    LoginMenuComponent,
    CrearCuentaMenuComponent,
    RecuperarMenuComponent,
    AlbumHeaderComponent,
    AlbumRatingComponent,
    AlbumInfoBoxComponent,
    AlbumSongsComponent,
    CommentFormComponent,
    CommentItemComponent,
    SongHeaderComponent,
    SongInfoBoxComponent,
    ArtistHeaderComponent,
    ArtistLinksComponent,
    AlbumCardComponent,
    SingleCardComponent,
    ProfileHeaderComponent,
    ProfileDescriptionComponent,
    CircleItemListComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    FeaturedBannerComponent,
    SecondaryNavComponent,
    PopularDiscussionsComponent,
    FeaturedArtistsComponent,
    FooterComponent,
    LoginMenuComponent,
    CrearCuentaMenuComponent,
    RecuperarMenuComponent,
    AlbumHeaderComponent,
    AlbumRatingComponent,
    AlbumInfoBoxComponent,
    AlbumSongsComponent,
    CommentFormComponent,
    CommentItemComponent,
    SongHeaderComponent,
    SongInfoBoxComponent,
    ArtistHeaderComponent,
    ArtistLinksComponent,
    AlbumCardComponent,
    SingleCardComponent,
    ProfileHeaderComponent,
    ProfileDescriptionComponent,
    CircleItemListComponent,
  ]
})
export class SharedModule {}
