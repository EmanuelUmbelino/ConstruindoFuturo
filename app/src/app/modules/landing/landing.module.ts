import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { landingRoutes } from './landing.routing';

@NgModule({
    declarations: [HomeComponent],
    imports: [RouterModule.forChild(landingRoutes)],
})
export class LandingModule {}
