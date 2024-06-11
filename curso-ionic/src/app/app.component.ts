import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public menuComponentCollection  = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Accordion', url: 'accordion', icon: 'dice' },
    { title: 'Action-Sheet', url: 'actionsheet', icon: 'dice' },
    { title: 'Alert', url: 'alert', icon: 'dice' },
    { title: 'Button', url: 'button', icon: 'dice' },
    { title: 'Card', url: 'card', icon: 'dice' },
    { title: 'Components - Tags', url: 'tags', icon: 'dice' },
    { title: 'Components - JS', url: 'js', icon: 'dice' },
    { title: 'Datetime', url: 'datetime', icon: 'dice' },
  ];

  public menuNativeCollection = [
    { title: 'Camera', url: 'camera', icon: 'dice' },
    { title: 'Flash', url: 'flash', icon: 'dice' },
  ];
  
  constructor() {}
}
