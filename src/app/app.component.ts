import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  title = 'app';
  ngOnInit() {
    // $('.btn-expand-collapse').click(function(e) {
    //   $('.navbar-primary').toggleClass('collapsed');
    // });
  }
}
