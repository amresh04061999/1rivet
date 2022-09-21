import { NgModule } from '@angular/core';
import { BrowserModule,Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { AboutModule } from './about/about.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import{ HttpClientModule} from'@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     CoreModule,
     AboutModule,
     HttpClientModule
  ],
  exports:[
    // AppRoutingModule,
  ],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
