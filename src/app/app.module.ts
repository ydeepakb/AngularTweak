import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { PageModule} from './pages/page.module';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';


@NgModule({
  declarations: [
    AppComponent, HeaderComponent, SideMenuComponent
  ],
  imports: [
    AppRoutingModule, BrowserModule, PageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
