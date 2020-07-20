import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pipe2Page } from './pipe2.page';

const routes: Routes = [
  {
    path: '',
    component: Pipe2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pipe2PageRoutingModule {}
