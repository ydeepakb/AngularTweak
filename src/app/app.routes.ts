
import { Routes, RouterModule  } from '@angular/router';
import { HomeComponent} from './pages/home/home.component';
import { InnerPage1Component} from './pages/home/inner-page1/inner-page1.component';
import { InnerPage2Component} from './pages/home/inner-page2/inner-page2.component';
import { ModalPopupComponent} from './pages/modal-popup/modal-popup.component';




export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent, children: [
        {path: 'inner-page1', component: InnerPage1Component },
        {path: 'inner-page2', component: InnerPage2Component }
    ] },
    { path: 'modal-popup',      component: ModalPopupComponent }
  ];
