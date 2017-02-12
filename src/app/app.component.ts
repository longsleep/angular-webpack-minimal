import { Component } from '@angular/core';

import * as Quassel from 'libquassel';

import '../../public/css/styles.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    ngOnInit(): void {
        console.log("AppComponent init");

        console.log("xxx1", Quassel);
    }
}
