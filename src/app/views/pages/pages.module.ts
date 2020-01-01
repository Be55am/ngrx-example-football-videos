import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FootballVideosComponent } from './football/football-videos/football-videos.component';
import { FootballVideoCardComponent } from './football/football-videos/football-video-card/football-video-card.component';
import { FootballVideoListComponent } from './football/football-videos/football-video-list/football-video-list.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatProgressBarModule} from '@angular/material';
import {SanitizeHtmlPipe} from './football/football-videos/football-video-card/sanitize-html.pipe';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [FootballVideosComponent, FootballVideoCardComponent, FootballVideoListComponent, SanitizeHtmlPipe],
  exports: [
    FootballVideosComponent
  ],
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule
  ]
})
export class PagesModule { }