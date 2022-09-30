import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

        {
       path:'',
       pathMatch:'full',
       redirectTo:'home'

        },
      {
        path:'home',component:HomeComponent
      },
      {
        path:'contact',component:ContactComponent
      },


     { path: 'epmpoyee', loadChildren: () => import('./empoloyee/empoloyee.module').then(m => m.EmpoloyeeModule) },


     { path: '**', redirectTo: '/home', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
