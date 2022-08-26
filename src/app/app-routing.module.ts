import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { AuthComponent } from './components/auth/auth.component';

const routes: Routes = [
  {path: 'profile', component: AccountComponent},
  {path: 'auth', component: AuthComponent},

  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: '**', redirectTo: '/auth' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
