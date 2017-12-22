import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EvcTabsComponent } from './evc-tabs.component';
import { EvcTabsPanelComponent } from './evc-tabs-panel.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule
	],
	exports: [
		EvcTabsComponent,
		EvcTabsPanelComponent
	],
	declarations: [
		EvcTabsComponent,
		EvcTabsPanelComponent
	]
})
export class EvcTabsModule { }
