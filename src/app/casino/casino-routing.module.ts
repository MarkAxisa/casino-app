import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CasinoLobbyComponent } from './casino-lobby.component';


const routes: Routes = [
	{
		path: '',
		component: CasinoLobbyComponent,
		data: {
			lobbyType: 'video-slots'
		}
	},
	{
		path: ':category',
		component: CasinoLobbyComponent,
		data: {
			lobbyType: 'video-slots'
		}
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CasinoRoutingModule { }
