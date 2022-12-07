import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtudiantListComponent } from './etudiant/etudiant-list/etudiant-list.component';
import { DepartementComponent } from './departement/departement.component';
import { ListedepComponent } from './listedep/listedep.component';
import { ListDepartementComponent } from './list-departement/list-departement.component';



@NgModule({
  declarations: [
    EtudiantListComponent,
   
  ],
  imports: [
    CommonModule,
  ]
})
export class ComponentModule { }
