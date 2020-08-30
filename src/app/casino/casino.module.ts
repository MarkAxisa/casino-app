import { CarouselModule } from './../carousel/carousel.module';
import { CasinoRoutingModule } from './casino-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasinoLobbyComponent } from './casino-lobby.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
	declarations: [
		CasinoLobbyComponent
	],
	imports: [
		CommonModule,
		CasinoRoutingModule,
		CarouselModule,
		MatProgressSpinnerModule
	],
	exports: [
		CasinoLobbyComponent
	]
})
export class CasinoModule { }
