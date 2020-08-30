import { CarouselModule } from './../carousel/carousel.module';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLobbyComponent } from './home-lobby.component';



@NgModule({
	declarations: [HomeLobbyComponent],
	imports: [
		CommonModule,
		HomeRoutingModule,
		CarouselModule
	]
})
export class HomeModule { }
