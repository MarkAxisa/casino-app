import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavMainComponent } from './nav-main/nav-main.component';
import { RouterModule } from '@angular/router';


@NgModule({
	declarations: [
		NavBarComponent,
		NavMainComponent
	],
	imports: [
		CommonModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		RouterModule
	],
	exports: [
		NavMainComponent,
		NavBarComponent,
	]
})
export class NavigationModule { }
