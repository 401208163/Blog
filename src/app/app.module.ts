import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { IntroductionComponent } from './Introduction/Introduction.component';
import { TodomvcComponent } from './todomvc/todomvc.component';
import { PageComponent } from './page/page.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
   declarations: [
      AppComponent,
      SigninComponent,
      SignupComponent,
      IntroductionComponent,
      TodomvcComponent,
      PageComponent,
      LayoutComponent,
      NavbarComponent,
      SidebarComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
