import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLobbyComponent } from './home-lobby.component';

const routes: Routes = [
	{
		path: '',
		component: HomeLobbyComponent,
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class HomeRoutingModule { }
