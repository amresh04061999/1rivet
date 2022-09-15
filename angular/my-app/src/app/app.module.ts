import { NgModule } from '@angular/core';
import { BrowserModule,Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { AboutModule } from './about/about.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';




@NgModule({


  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AboutModule
  ],
  exports:[
    // AppRoutingModule,
  ],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
