import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectiveTypeRoutingModule } from './directive-type-routing.module';
import { DirectiveTypeComponent } from './directive-type.component';
import { NgStyleComponent } from './attribute/ng-style/ng-style.component';
import { NgclassComponent } from './attribute/ngclass/ngclass.component';
import { NgModelComponent } from './attribute/ng-model/ng-model.component';
import { NgifComponent } from './Structural/ngif/ngif.component';
import { NgforComponent } from './Structural/ngfor/ngfor.component';
import { NgswitchComponent } from './Structural/ngswitch/ngswitch.component';
import { AppRoutingModule } from '../app-routing.module';
import { CoreModule } from '../core/core.module';
import { TrimDirective } from './custome/trim.directive';



@NgModule({
  declarations: [
    DirectiveTypeComponent,
    NgStyleComponent,
    NgclassComponent,
    NgModelComponent,
    NgifComponent,
    NgforComponent,
    NgswitchComponent,
    TrimDirective,

  ],
  imports: [
    CommonModule,
    DirectiveTypeRoutingModule,

  ],
  exports:[
    TrimDirective,
  ]
})
export class DirectiveTypeModule { }
