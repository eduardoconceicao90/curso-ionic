import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-js',
  templateUrl: './js.page.html',
  styleUrls: ['./js.page.scss'],
})
export class JsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleRefresh(event: any) {
    console.log('Usuário solicitou a atualização');
    setTimeout(() => {
      console.log('Lista atualizada com sucesso!')
      event.target.complete();
    }, 2000);
  }

}
