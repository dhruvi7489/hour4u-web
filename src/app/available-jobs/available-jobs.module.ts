import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvailableJobsPageRoutingModule } from './available-jobs-routing.module';

import { AvailableJobsPage } from './available-jobs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvailableJobsPageRoutingModule
  ],
  declarations: [AvailableJobsPage]
})
export class AvailableJobsPageModule {}
