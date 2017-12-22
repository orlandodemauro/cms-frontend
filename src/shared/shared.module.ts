
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { EvcCollapseModule } from './components/evc-collapse/evc-collapse.module';
import { EvcSearchModule } from './components/evc-search/evc-search.module';
import { EvcMenubarModule } from './components/evc-menubar/evc-menubar.module';
import { EvcTabsModule } from './components/evc-tabs/evc-tabs.module';
import { EvcDropdownModule } from './components/evc-dropdown/evc-dropdown.module';
import { EvcSelectorModule } from './components/evc-selector/evc-selector.module';
import { Evc2colCardModule } from './components/evc-2col-card/evc-2col-card.module';
import { EvcComposed2colCardModule } from './components/evc-composed-2col-card/evc-composed-2col-card.module';
import { EvcWelcomeModule } from './components/evc-welcome/evc-welcome.module';
import { EvcCardInfoModule } from './components/evc-card-info/evc-card-info.module';
import { EvcCardModule } from './components/evc-card/evc-card-module';
import { EvcTagsModule } from './components/evc-tags/evc-tags.module';
import { EvcGroupModalModule } from './components/evc-group-modal/evc-group-modal.module';
import { EvcCardBigModule } from './components/evc-card-big/evc-card-big.module';
import { EvcCardListModule } from "./components/evc-card-list/evc-card-list.module";
import { EvcDocumentModule } from './components/evc-document/evc-document.module';

// Providers


export const providers = [

];

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      EvcCollapseModule,
      EvcSearchModule,
      EvcMenubarModule,
      EvcTabsModule,
      EvcDropdownModule,
      EvcSelectorModule,
      Evc2colCardModule,
      EvcComposed2colCardModule,
      EvcCardInfoModule,
      EvcCardModule,
      EvcWelcomeModule,
      EvcWelcomeModule,
      EvcTagsModule,
      EvcGroupModalModule,
      EvcCardBigModule,
      EvcCardListModule,
      EvcDocumentModule
    ],
    providers: [],
    exports: [
      CommonModule,
      EvcCollapseModule,
      EvcSearchModule,
      EvcMenubarModule,
      EvcTabsModule,
      EvcDropdownModule,
      EvcSelectorModule,
      Evc2colCardModule,
      EvcComposed2colCardModule,
      EvcCardInfoModule,
      EvcCardModule,
      EvcWelcomeModule,
      EvcWelcomeModule,
      EvcTagsModule,
      EvcGroupModalModule,
      EvcCardBigModule,
      EvcCardListModule,
      EvcDocumentModule
    ]
  })
  export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [providers]
        };
    }
  }
