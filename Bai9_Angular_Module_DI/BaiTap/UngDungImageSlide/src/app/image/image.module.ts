import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ImageSliderComponent} from './image-slider/image-slider.component';
import {ImageSlideComponent} from './image-slide/image-slide.component';



@NgModule({
  declarations: [
    ImageSlideComponent,
    ImageSliderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ImageSliderComponent, ImageSlideComponent]
})
export class ImageModule { }
