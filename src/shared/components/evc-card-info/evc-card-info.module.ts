import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EvcCardInfoComponent } from './evc-card-info.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule
	],
	exports: [
		EvcCardInfoComponent
	],
	declarations: [
		EvcCardInfoComponent
	]
})
export class EvcCardInfoModule { }

