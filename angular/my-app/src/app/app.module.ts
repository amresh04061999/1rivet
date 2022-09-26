import { NgModule } from '@angular/core';
import { BrowserModule,Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { AboutModule } from './about/about.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import{ HttpClientModule} from'@angular/common/http';
import { HomeComponent } from './home/home.component';
// import { UserService } from './service/user.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     CoreModule,
     AboutModule,
     HttpClientModule
  ],
  exports:[
  ],
  providers: [
    // UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
