import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './parent/about/about.component';
import { ContactComponent } from './parent/contact/contact.component';
import { HomeComponent } from './parent/home/home.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'contact',component:ContactComponent
  },

  {
    path:'',component:HomeComponent
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
