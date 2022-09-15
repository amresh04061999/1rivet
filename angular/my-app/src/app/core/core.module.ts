import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './componet/header/header.component';
import { NavigationComponent } from './componet/navigation/navigation.component';
import { FooterComponent } from './componet/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';




@NgModule({
  declarations: [
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
exports:[
HeaderComponent,
NavigationComponent,
FooterComponent
]
})
export class CoreModule { }
