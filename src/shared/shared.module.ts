
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { CardComponent } from './components/card/card.component';
import { AlertComponent } from './components/alert/alert.component';

// Providers
import { CustomerService } from './services/customer.service';
import { StadisticsService } from './services/stadistics.service';

export const providers = [
  CustomerService, StadisticsService
];

@NgModule({
    declarations: [CardComponent, AlertComponent],
    imports: [CommonModule],
    providers: [],
    exports: [CardComponent, AlertComponent]
  })
  export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [providers]
        };
    }
  }
