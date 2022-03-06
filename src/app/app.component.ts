import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {
  }

  open1() {
    this.router.navigate(["angular-component"]);
  }

  open2() {
    this.router.navigate(["react-component"]);
  }
}
