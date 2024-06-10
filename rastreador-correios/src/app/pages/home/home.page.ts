import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  localizarObjeto(evento: any) {
    let codigoObjeto :string = evento.detail.value;
    console.log(codigoObjeto);
  }

}
