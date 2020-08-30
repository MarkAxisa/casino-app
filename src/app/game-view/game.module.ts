import { GameViewComponent } from './game-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameRoutingModule } from './game-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
	declarations: [
		GameViewComponent
	],
	imports: [
		CommonModule,
		GameRoutingModule,
		MatProgressSpinnerModule
	],
	exports: [
		GameViewComponent
	]
})
export class GameModule { }
