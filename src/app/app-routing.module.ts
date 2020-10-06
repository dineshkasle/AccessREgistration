import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestAccessComponent } from './request-access/request-access.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

// list of routes withits component
const routes: Routes = [
  { path: '', redirectTo: '/requestAccess', pathMatch: 'full' },
  { path: 'requestAccess', component: RequestAccessComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'thankYou', component: ThankYouComponent },
  { path: '**', redirectTo: '/requestAccess' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }