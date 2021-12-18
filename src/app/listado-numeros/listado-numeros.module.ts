import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoTablaComponent } from './listado-tabla/listado-tabla.component';
import { ListadoComponent } from './listado-tabla/listado/listado.component';
import { InsertorComponent } from './listado-tabla/insertor/insertor.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    ListadoTablaComponent,
    ListadoComponent,
    InsertorComponent
  ],
  exports: [
    ListadoTablaComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class ListadoNumerosModule { }
