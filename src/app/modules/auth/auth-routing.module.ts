import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthComponent } from './sign-in-up/auth.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: 'sign-in-up',
    component: AuthComponent,
  },
  {
    path: 'forget-password',
    component: ForgotPasswordComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class AuthRoutingModule { }
