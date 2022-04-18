import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: SignUpComponent,
  },
  {
    path: 'success',
    component: ConfirmationComponent,
  },
  // reroute to sign-up if a route does not exist
  { path: '**', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
