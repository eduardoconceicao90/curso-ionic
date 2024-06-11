import { Component } from '@angular/core';
import { ActionSheetController, AlertController, NavController } from '@ionic/angular';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tarefaCollection: any[] = [];
  loading: boolean = false;

  constructor(private alertCtrl: AlertController,
              private tarefaService: TarefaService,
              private actionSheetCtrl: ActionSheetController,
              private navCtrl: NavController
  ) {}

  ionViewDidEnter() {
    this.listarTarefa();
  }

  listarTarefa() {
    this.loading = true;
    setTimeout(() => {
      this.tarefaCollection = this.tarefaService.listar();
      this.loading = false;
    }, 3000);
  }

  async  showAdd() {
    const alert = await this.alertCtrl.create({
      header: 'Informe a tarefa',
      inputs: [
        {
          name: 'tarefa',
          type: 'text',
          placeholder: 'Descreva sua tarefa'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {

          }
        }, {
          text: 'Salvar',
          handler: (tarefa) => {
            this.tarefaService.salvar(tarefa, () => {
              this.listarTarefa();
            });
          }
        }
      ]
    });

    await alert.present();
  }

  delete(item: any) {
    this.tarefaService.delete(item, () => {
      this.listarTarefa();
    });
  }

  async openActions(tarefa: any) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: "O QUE DESEJA FAZER?",
      buttons: [{
        text: tarefa.feito ? 'Colocar como pendente' : 'Marcar como realizado',
        icon: tarefa.feito ? 'close-outline' : 'checkmark-circle',
        handler: () => {
          tarefa.feito = !tarefa.feito;
          this.tarefaService.atualizar(tarefa, ()=>{
            this.listarTarefa();
          })
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });

    await actionSheet.present();
  }

  doar(){
    this.navCtrl.navigateForward('doacao');
  }
}
