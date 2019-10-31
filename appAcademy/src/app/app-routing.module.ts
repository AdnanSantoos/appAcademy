import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tela-inicial',
    loadChildren: './tela-inicial/tela-inicial.module#TelaInicialPageModule'
  },
  {
     path: 'login',
      loadChildren: './tela-login/tela-login.module#TelaLoginPageModule'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  providers: [DatePipe],
  exports: [RouterModule]
})
export class AppRoutingModule {}
