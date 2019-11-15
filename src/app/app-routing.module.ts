import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth-guard.service';

import { LayoutComponent } from './layout/layout.component';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

import { IntroductionComponent } from './Introduction/Introduction.component';
import { PageComponent } from './page/page.component';
import { TodomvcComponent } from './todomvc/todomvc.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/layout',
    pathMatch:  'full'
  },
  {
    path: 'layout',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: IntroductionComponent
      },
      {
        path: 'page',
        component: PageComponent
      },
      {
        path: 'todomvc',
        component: TodomvcComponent
      }
    ]
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
