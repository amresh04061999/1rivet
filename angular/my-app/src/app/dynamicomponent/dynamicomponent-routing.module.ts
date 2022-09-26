import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicomponentComponent } from './dynamicomponent.component';

const routes: Routes = [{ path: '', component: DynamicomponentComponent ,


}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicomponentRoutingModule { }
