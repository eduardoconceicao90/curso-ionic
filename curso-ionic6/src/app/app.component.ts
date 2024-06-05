import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Accordion', url: 'accordion', icon: 'dice' },
    { title: 'Action-Sheet', url: 'actionsheet', icon: 'dice' },
    { title: 'Alert', url: 'alert', icon: 'dice' },
    { title: 'Button', url: 'button', icon: 'dice' },
    { title: 'Card', url: 'card', icon: 'dice' },
  ];
  

  constructor() {}
}
