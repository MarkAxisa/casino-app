import { MatIconModule } from '@angular/material/icon';
import { SearchWidgetComponent } from './search-widget.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [
		SearchWidgetComponent
	],
	imports: [
		CommonModule,
		MatIconModule
	],
	exports: [
		SearchWidgetComponent
	]
})
export class SearchModule { }
