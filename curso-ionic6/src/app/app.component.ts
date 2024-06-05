import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Ion-Button', url: 'button', icon: 'dice' },
    { title: 'Ion-Card', url: 'card', icon: 'card' },
  ];

  constructor() {}
}
