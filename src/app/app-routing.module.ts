import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'persona',
    loadChildren: () => import('./persona/persona.module').then( m => m.PersonaPageModule)
  },
  {
    path: 'nota',
    loadChildren: () => import('./nota/nota.module').then( m => m.NotaPageModule)
  },
  {
    path: 'ng',
    loadChildren: () => import('./ng/ng.module').then( m => m.NgPageModule)
  },
  {
    path: 'switch',
    loadChildren: () => import('./switch/switch.module').then( m => m.SwitchPageModule)
  },
  {
    path: 'pipe',
    loadChildren: () => import('./pipe/pipe.module').then( m => m.PipePageModule)
  },
  {
    path: 'pipe2',
    loadChildren: () => import('./pipe2/pipe2.module').then( m => m.Pipe2PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
