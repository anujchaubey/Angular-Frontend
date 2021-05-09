import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HUMTUM';
  showContent: boolean = false;
  showMenu: boolean = false;

  constructor(public _router: Router) {
    _router.events.forEach((response) => {
      if (response instanceof NavigationStart) {
        // console.log(response.url)
        if (response.url === '/login' || response.url === '/signup' || response.url === '/pagenotfound' || response.url === '/forgotpassword' || response.url === '/' || response.url === '#') {
          this.showContent = true;
          this.showMenu = false;
          // console.log(localStorage)
        } else {
          this.showMenu = true;
          this.showContent = false;
        }
      }
    });
  }
}
