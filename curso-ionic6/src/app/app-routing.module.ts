import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/components/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'button',
    loadChildren: () => import('./pages/components/button/button.module').then( m => m.ButtonPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/components/card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/components/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'accordion',
    loadChildren: () => import('./pages/components/accordion/accordion.module').then( m => m.AccordionPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
