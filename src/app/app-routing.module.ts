import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'start',
    loadChildren: () => import('./start/start.module').then( m => m.StartPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'copm',
    loadChildren: () => import('./copm/copm.module').then( m => m.CopmPageModule)
  },
  {
    path: 'example',
    loadChildren: () => import('./example/example.module').then( m => m.ExamplePageModule)
  },
  {
    path: 'belangrijkheid',
    loadChildren: () => import('./belangrijkheid/belangrijkheid.module').then( m => m.BelangrijkheidPageModule)
  },
  {
    path: 'beoordeling',
    loadChildren: () => import('./beoordeling/beoordeling.module').then( m => m.BeoordelingPageModule)
  },
  {
    path: 'opmerking',
    loadChildren: () => import('./opmerking/opmerking.module').then( m => m.OpmerkingPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
