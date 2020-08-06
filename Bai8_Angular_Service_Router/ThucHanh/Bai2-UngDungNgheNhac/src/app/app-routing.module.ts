import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {YoutubePlaylistComponent} from './youtube-playlist/youtube-playlist.component';
import {RouterModule, Routes} from '@angular/router';
import {YoutubePlayerComponent} from './youtube-player/youtube-player.component';

const configRoute: Routes = [
  {
    path: 'youtube',
    component: YoutubePlaylistComponent,
    children: [{
        path: 'id',
        component: YoutubePlayerComponent
      }]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(configRoute)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
