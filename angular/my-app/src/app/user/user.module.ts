import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectiveTypeModule } from '../directive-type/directive-type.module';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user.service';




@NgModule({
  declarations: [
    UserComponent,
    UserFormComponent,
    UserListComponent,

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    // DirectiveTypeModule,
    HttpClientModule
  ],
    providers: [ UserService],
})
export class UserModule { }
