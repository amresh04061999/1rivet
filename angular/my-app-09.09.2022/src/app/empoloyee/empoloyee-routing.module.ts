import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpoloyeeComponent } from './empoloyee.component';

const routes: Routes = [{ path: '', component: EmpoloyeeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpoloyeeRoutingModule { }
