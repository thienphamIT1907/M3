import { Component, OnInit, ViewEncapsulation, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import {ImageSlideComponent} from '../image-slide/image-slide.component';


@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ImageSliderComponent implements OnInit, AfterContentInit {
  @ContentChildren(ImageSlideComponent) slides: QueryList<ImageSlideComponent>;
  component;
  activeIndex = 0;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    console.log(this.slides);
    this.component = this.slides.first;
  }

  previos(): void {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
    this.component = this.slides.toArray()[this.activeIndex];
  }
  next(): void {
    if (this.activeIndex < this.slides.length - 1) {
      this.activeIndex++;
    }
    this.component = this.slides.toArray()[this.activeIndex];
  }
}
