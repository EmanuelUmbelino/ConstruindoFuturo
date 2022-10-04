import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'home-app',
    templateUrl: './home.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
    countOptions: any = {
        enableScrollSpy: true,
        scrollSpyOnce: true,
        scrollSpyDelay: 200,
        duration: 3,
    };

    /**
     * Constructor
     */
    constructor() {}
}
