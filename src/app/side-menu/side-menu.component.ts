import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './side-menu.component.html'
})

export class SideMenuComponent implements OnInit {
sideMenuCollection: Array<any>;
    ngOnInit() {
     this.sideMenuCollection = [{
         glyphClass: 'glyphicon-envelope',
         label: 'Nested Routing',
         routeLink: 'home',
         queryParams: [{key: '', value: ''}],
         childMenu: []
     },
    //  {
    //     glyphClass: 'glyphicon-envelope',
    //     label: 'Pop Up',
    //     routeLink: 'modal-popup',
    //     queryParams: [{key: '', value: ''}],
    //     childMenu: []
    // }
];
    }
}
