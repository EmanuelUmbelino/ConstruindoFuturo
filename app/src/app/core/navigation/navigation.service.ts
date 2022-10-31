import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject, tap } from 'rxjs';
import { Navigation } from 'app/core/navigation/navigation.types';
import { TranslocoService } from '@ngneat/transloco';
import { FuseNavigationItem } from '@fuse/components/navigation';

@Injectable({
    providedIn: 'root',
})
export class NavigationService {
    private _navigation: ReplaySubject<Navigation> =
        new ReplaySubject<Navigation>(1);

    /**
     * Constructor
     */
    constructor(
        private _httpClient: HttpClient,
        private translocoService: TranslocoService
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for navigation
     */
    get navigation$(): Observable<Navigation> {
        return this._navigation.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get all navigation data
     */
    get(): Observable<Navigation> {
        return this._httpClient.get<Navigation>('api/common/navigation').pipe(
            tap((navigation) => {
                this.translateNavigation(navigation);

                this._navigation.next(navigation);
            })
        );
    }

    translateNavigation(nav: Navigation): void {
        Object.keys(nav).forEach((k) => {
            nav[k].forEach((i: FuseNavigationItem) => this.translateTitle(i));
        });
    }

    translateTitle(item: FuseNavigationItem): void {
        if (item.title) {
            this.translocoService
                .selectTranslate('navigation.' + item.title)
                .subscribe((el) => {
                    item.title = el;
                });
        }
        if (item.children) {
            item.children.forEach((i: FuseNavigationItem) =>
                this.translateTitle(i)
            );
        }
    }
}
