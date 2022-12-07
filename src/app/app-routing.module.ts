import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth-layout/login/login.component';
import { ListeFacturesComponent } from './client-layout/liste-factures/liste-factures.component';
import { DepartementComponent } from './components/departement/departement.component';
import { ListDepartementComponent } from './components/list-departement/list-departement.component';
import { ListedepComponent } from './components/listedep/listedep.component';


const routes: Routes = [
  {path: 'listedep' , component : ListedepComponent},
  {path: 'adddep' , component : DepartementComponent},
  {path:'depList' , component : ListDepartementComponent},

  // {path:'auth',loadChildren: ()=>import('./layouts/auth-layout/auth-layout.module').then(m=>m.AuthLayoutModule)},
   {path:'client',loadChildren: ()=>import('./client-layout/client-layout.module').then(m=>m.ClientLayoutModule)},
   {path:'admin',loadChildren: ()=>import('./admin-layout/admin-layout.module').then(m=>m.AdminLayoutModule)},

 //Auth
 {
   path:'',
   component: LoginComponent,
   children:[
     {
       path:"",
       redirectTo:"/login",
       pathMatch:"full"
     },
     {
       path:'auth',
       loadChildren: ()=>import('./auth-layout/auth-layout.module').then(m=>m.AuthLayoutModule)
 
     }
   ]
 },
 
 ];
 




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
