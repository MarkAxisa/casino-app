import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CasinoLobbyComponent } from './casino-lobby.component';


const routes: Routes = [
	{
		path: '',
		component: CasinoLobbyComponent,
	},
	{
		path: 'video-slots',
		component: CasinoLobbyComponent,
		data: {
			lobbyType: 'video-slots'
		}
	},
	{
		path: 'jackpot-games',
		component: CasinoLobbyComponent,
		data: {
			lobbyType: 'jackpot-games'
		}
	},
	{
		path: 'table-games',
		component: CasinoLobbyComponent,
		data: {
			lobbyType: 'table-games'
		}
	},
	{
		path: 'popular-games',
		component: CasinoLobbyComponent,
		data: {
			lobbyType: 'popular-games'
		}
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CasinoRoutingModule { }
