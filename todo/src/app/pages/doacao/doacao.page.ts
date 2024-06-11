import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.page.html',
  styleUrls: ['./doacao.page.scss'],
})
export class DoacaoPage implements OnInit {

  constructor(private navCtrl: NavController,
              private toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  voltar(){
    this.navCtrl.back();
  }

  agradecimento(nome: string){
    this.navCtrl.navigateForward('doadores/' + nome);
  }

  async fazerDoacao(){
    localStorage.setItem('fezdoacao', 'sim');
    
    const toast = await this.toastCtrl.create({
      message: 'Doação realizada com sucesso',
      duration: 2000,
      position: 'top',
      color: 'dark',
    });  
    toast.present();
  }
}
