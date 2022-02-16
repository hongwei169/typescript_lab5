import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-app';
  count: number = 0;
  hideStar: boolean = true;


  onClick() {
    this.count++;
  }

  onStarClick() {
    if (this.hideStar) {
      this.hideStar = false;
    } else {
      this.hideStar = true;
    }
  }

}
