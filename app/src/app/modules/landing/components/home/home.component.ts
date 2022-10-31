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

    /**
     * Constructor
     */
    constructor(private translocoService: TranslocoService) {}

    ngOnInit(): void {
        console.log(
            'teste',
            this.translocoService.translateObject('pages.Home')
        );
    }

    getImage(path): string {
        if (path) {
            return 'url(' + path + ')';
        }
        return '';
    }

    getClass(r): string {
        let finalClass = '';
        Object.keys(r).forEach((key) => {
            if (r[key]) {
                finalClass = finalClass + ' ' + key;
            }
        });
        return finalClass;
    }
}
