import { NgModule } from '@angular/core';
import { BrowserModule,Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { HomeComponent } from './parent/home/home.component';
import { AboutComponent } from './parent/about/about.component';
import { ContactComponent } from './parent/contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import { HomechildComponent } from './parent/home/homechild/homechild.component';




@NgModule({


  declarations: [
    AppComponent,
    ParentComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    AsideComponent,
    HomechildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
