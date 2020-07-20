import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NgPageRoutingModule } from './ng-routing.module';

import { NgPage } from './ng.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgPageRoutingModule
  ],
  declarations: [NgPage]
})
export class NgPageModule {}
