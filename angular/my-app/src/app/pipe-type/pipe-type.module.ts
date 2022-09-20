import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipeTypeRoutingModule } from './pipe-type-routing.module';
import { PipeTypeComponent } from './pipe-type.component';
import { InbuildPipe } from './inbuild/inbuild.pipe';
import { InbuildpipeComponent } from './component/inbuildpipe/inbuildpipe.component';
import { WordcountPipe } from './custome/wordcount.pipe';
import { WordcounterComponent } from './wordcounter/wordcounter.component';


@NgModule({
  declarations: [
    PipeTypeComponent,
    InbuildPipe,
    InbuildpipeComponent,
    WordcountPipe,
    WordcounterComponent
  ],
  imports: [
    CommonModule,
    PipeTypeRoutingModule
  ],
  exports:[
    // WordcountPipe
  ]
})
export class PipeTypeModule { }
