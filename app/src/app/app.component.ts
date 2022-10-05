import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { NavigationService } from './core/navigation/navigation.service';
import * as AOS from 'aos';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    /**
     * Constructor
     */
    constructor(
        private translocoService: TranslocoService,
        private navigationService: NavigationService
    ) { }

    ngOnInit(): void {
        AOS.init();
        this.translocoService.langChanges$.subscribe(() => {
            this.navigationService.get().subscribe(() => { });
        });
    }
}
