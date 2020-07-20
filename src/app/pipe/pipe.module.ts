import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PipePageRoutingModule } from './pipe-routing.module';

import { PipePage } from './pipe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipePageRoutingModule
  ],
  declarations: [PipePage]
})
export class PipePageModule {}
