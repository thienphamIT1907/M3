import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ImageModule} from './image/image.module';
import {GalleryConfig} from './image/token';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ImageModule
  ],
  providers: [
    {
      provide: GalleryConfig,
      useValue: 2
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
