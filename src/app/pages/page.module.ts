import { NgModule} from '@angular/core';
import { HomeComponent} from './home/home.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalPopupComponent } from './modal-popup/modal-popup.component';
import {HomeModule} from './home/home.module';
import { Routes, RouterModule  } from '@angular/router';
import {appRoutes} from '../app.routes';

@NgModule({
    declarations: [
        HomeComponent, ModalPopupComponent
      ],
      imports: [RouterModule.forRoot(appRoutes), HomeModule],
      exports: [CommonModule, FormsModule, HomeComponent, ModalPopupComponent, HomeModule],
      providers: []
})


export class PageModule {

}
 