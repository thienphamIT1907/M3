import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bai1-UngDungBinhChon';

  ratingValue = 5;

  onRateChange(value: any): void {
    this.ratingValue = value.target.value;
  }
}
