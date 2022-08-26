import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from '../components/auth/auth.component';
import { AuthService } from '../services/auth.service';



@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [AuthService]
})
export class AuthModule { }
