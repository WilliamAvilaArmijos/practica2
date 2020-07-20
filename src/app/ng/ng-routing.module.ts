import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgPage } from './ng.page';

const routes: Routes = [
  {
    path: '',
    component: NgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgPageRoutingModule {}
