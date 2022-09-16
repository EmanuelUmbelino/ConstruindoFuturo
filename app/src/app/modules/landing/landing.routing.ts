import { Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const landingRoutes: Route[] = [
    {
        path: 'home',
        component: HomeComponent,
    },
];
