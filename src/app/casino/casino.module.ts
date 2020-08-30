import { CasinoRoutingModule } from './casino-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasinoLobbyComponent } from './casino-lobby.component';

@NgModule({
	declarations: [CasinoLobbyComponent],
	imports: [
		CommonModule,
		CasinoRoutingModule
	]
})
export class CasinoModule { }
