import { NgModule} from '@angular/core';
import { InnerPage1Component} from './inner-page1/inner-page1.component';
import { InnerPage2Component} from './inner-page2/inner-page2.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule  } from '@angular/router';
import {appRoutes} from '../../app.routes';

@NgModule({
    declarations: [
        InnerPage1Component, InnerPage2Component
      ],
      imports: [RouterModule.forRoot(appRoutes)],
      exports: [CommonModule, FormsModule, InnerPage1Component, InnerPage2Component],
      providers: []
})


export class HomeModule {

}
 