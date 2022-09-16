import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { landingRoutes } from './landing.routing';

@NgModule({
    declarations: [HomeComponent],
    imports: [RouterModule.forChild(landingRoutes), SharedModule],
})
export class LandingModule {}
