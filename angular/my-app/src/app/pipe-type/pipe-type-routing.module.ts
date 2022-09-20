import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InbuildpipeComponent } from './component/inbuildpipe/inbuildpipe.component';
import { PipeTypeComponent } from './pipe-type.component';
import { WordcounterComponent } from './wordcounter/wordcounter.component';

const routes: Routes = [
  { path: '', component: PipeTypeComponent ,

  children:[{
    
   path:'',
   pathMatch:'full',
   redirectTo:'allpipe'

    
  },
{  path:'allpipe',component:InbuildpipeComponent} ,
{
  path:'wordcunter',component:WordcounterComponent
}
    
]

},

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipeTypeRoutingModule { }
