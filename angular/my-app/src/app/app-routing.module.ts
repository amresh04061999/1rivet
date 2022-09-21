import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NgclassComponent } from './directive-type/attribute/ngclass/ngclass.component';
import { DirectiveTypeComponent } from './directive-type/directive-type.component';
import { NgforComponent } from './directive-type/Structural/ngfor/ngfor.component';


import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // {
  //   path:'',
  //   redirectTo:'home',
  //   pathMatch:'full',
  // },
  // // {path:'home',component:HomeComponent, },

  {path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule)},

  { path: 'directive', loadChildren: () => import('./directive-type/directive-type.module').then(m => m.DirectiveTypeModule)},

  { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },

  { path: 'pipe', loadChildren: () => import('./pipe-type/pipe-type.module').then(m => m.PipeTypeModule) },

  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },

  { path:'**',component:PageNotFoundComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
