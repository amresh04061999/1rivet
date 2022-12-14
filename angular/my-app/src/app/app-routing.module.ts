import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NgclassComponent } from './directive-type/attribute/ngclass/ngclass.component';
import { DirectiveTypeComponent } from './directive-type/directive-type.component';
import { NgforComponent } from './directive-type/Structural/ngfor/ngfor.component';
import { HomeComponent } from './home/home.component';


import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full',
  },
  {path:'home',component:HomeComponent, },

  {path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule)},

  { path: 'directive', loadChildren: () => import('./directive-type/directive-type.module').then(m => m.DirectiveTypeModule)},

  { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },

  { path: 'pipe', loadChildren: () => import('./pipe-type/pipe-type.module').then(m => m.PipeTypeModule) },

  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },

  { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },

  { path: 'dynamicomponet', loadChildren: () => import('./dynamicomponent/dynamicomponent.module').then(m => m.DynamicomponentModule) },
  
  { path: 'rxjs', loadChildren: () => import('./rxjs/rxjs.module').then(m => m.RxjsModule) },

  { path:'**',component:PageNotFoundComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
