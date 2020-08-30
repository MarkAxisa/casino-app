import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
	},
	{
		path: 'casino',
		loadChildren: () => import('./casino/casino.module').then(m => m.CasinoModule)
	},
	{
		path: 'play',
		loadChildren: () => import('./game-view/game.module').then(m => m.GameModule)
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
