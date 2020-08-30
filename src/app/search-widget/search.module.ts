import { CasinoModule } from './../casino/casino.module';
import { MatIconModule } from '@angular/material/icon';
import { SearchWidgetComponent } from './search-widget.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
	declarations: [
		SearchWidgetComponent
	],
	imports: [
		CommonModule,
		MatIconModule,
		MatProgressSpinnerModule,
		CasinoModule
	],
	exports: [
		SearchWidgetComponent
	]
})
export class SearchModule { }
