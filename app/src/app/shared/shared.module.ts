import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { FuseCardModule } from '@fuse/components/card';
import { CountUpModule } from 'ngx-countup';
import { SwiperModule } from 'swiper/angular';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslocoModule],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslocoModule,

        MatButtonModule,
        MatIconModule,
        MatTabsModule,
        FuseCardModule,
        CountUpModule,
        SwiperModule,
    ],
})
export class SharedModule {}
