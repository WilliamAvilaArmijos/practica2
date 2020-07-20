import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pipe2PageRoutingModule } from './pipe2-routing.module';

import { Pipe2Page } from './pipe2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pipe2PageRoutingModule
  ],
  declarations: [Pipe2Page]
})
export class Pipe2PageModule {}
