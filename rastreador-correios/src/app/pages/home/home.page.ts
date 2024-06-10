import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CorreiosService } from 'src/app/services/correios.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  eventosCollection: any[] = [];

  constructor(private correiosService: CorreiosService,
              private toastCtrl: ToastController
  ) {}

  localizarObjeto(evento: any) {
    let codigoObjeto :string = evento.detail.value;

    if (codigoObjeto.length < 3){
      return;
    }
    
    this.correiosService.localizarObjeto(codigoObjeto).then(response => {
      let correios: any = response;
      this.eventosCollection = correios.objetos[0].eventos;
      
      if (this.eventosCollection == undefined){
        this.enviarToast('Objeto não encontrado');
        return;
      }    
    }).catch(() => {
      this.enviarToast('Objeto não encontrado');
    });
  }

  async enviarToast(mensagem: string) {
    const toast = await this.toastCtrl.create({
      message: mensagem,
      duration: 2000,
      position: 'top',
      color: 'dark',
    });  
    toast.present();
  }

}
