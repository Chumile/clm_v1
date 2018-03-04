import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Import your components here
import {MatButtonModule, MatCheckboxModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, MatCheckboxModule
  ],
  exports: [CommonModule, MatButtonModule, MatCheckboxModule],
  declarations: []
})
export class AngularMaterialModule { }
