import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DoacaoPageRoutingModule } from './doacao-routing.module';
import { DoacaoPage } from './doacao.page';
import { SharedComponentModule } from 'src/app/components/shared-component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoacaoPageRoutingModule,
    SharedComponentModule
  ],
  declarations: [DoacaoPage]
})
export class DoacaoPageModule {}
