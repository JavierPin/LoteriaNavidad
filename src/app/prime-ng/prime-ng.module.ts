import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// animaciones
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// PrimeNg
import {ButtonModule} from 'primeng/button';
import {FieldsetModule} from 'primeng/fieldset';
import {InputTextModule} from 'primeng/inputtext';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {OrganizationChartModule} from 'primeng/organizationchart';
import { ChipModule } from 'primeng/chip';

@NgModule({
  exports: [
    BrowserAnimationsModule,

    ButtonModule,
    FieldsetModule,
    InputTextModule,
    MessagesModule,
    MessageModule,
    OrganizationChartModule,
    ChipModule
  ]
})
export class PrimeNgModule { }
