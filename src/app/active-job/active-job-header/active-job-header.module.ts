import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActiveJobHeaderPageRoutingModule } from './active-job-header-routing.module';

import { ActiveJobHeaderPage } from './active-job-header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActiveJobHeaderPageRoutingModule
  ],
  declarations: [ActiveJobHeaderPage],
  exports: [ActiveJobHeaderPage]
})
export class ActiveJobHeaderPageModule { }
