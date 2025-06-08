import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ForoAlbumPageModule } from './pages/foro-album/foro-album.module';

const routes: Routes = [
  {
    path: '',
    //redirectTo: 'home',
    redirectTo: 'discografia',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'crear-cuenta',
    loadChildren: () => import('./pages/crear-cuenta/crear-cuenta.module').then( m => m.CrearCuentaPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./pages/recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },

  /*
  {
    path: 'foro-album',
    loadChildren: () => import('./pages/foro-album/foro-album.module').then( m => m.ForoAlbumPageModule)
  },
  */

  { path: 'album/:id', loadChildren: () => import('./pages/foro-album/foro-album.module').then(m => m.ForoAlbumPageModule) },
  {
    path: 'foro-cancion',
    loadChildren: () => import('./pages/foro-cancion/foro-cancion.module').then( m => m.ForoCancionPageModule)
  },
  {
    path: 'foro-artista',
    loadChildren: () => import('./pages/foro-artista/foro-artista.module').then( m => m.ForoArtistaPageModule)
  },
  {
    path: 'discografia',
    loadChildren: () => import('./pages/discografia/discografia.module').then( m => m.DiscografiaPageModule)
  }





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
