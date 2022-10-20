import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
    selector: 'home-app',
    templateUrl: './home.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
    countOptions: any = {
        enableScrollSpy: true,
        scrollSpyOnce: true,
        scrollSpyDelay: 200,
        duration: 3,
    };

    depoimentos = Object.keys(
        this.translocoService.translateObject('depoimentos')
    );

    /**
     * Constructor
     */
    constructor(private translocoService: TranslocoService) {}

    ngOnInit(): void {
        console.log('teste', this.depoimentos);
    }
}
