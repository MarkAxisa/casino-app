import { MatIconModule } from '@angular/material/icon';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';
import { CarouselComponent } from './carousel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
	declarations: [
		CarouselComponent,
		CarouselItemComponent,
	],
	imports: [
		CommonModule,
		HttpClientModule,
		MatIconModule,
		MatProgressSpinnerModule
	],
	exports: [
		CarouselComponent
	],
	providers: [],
	bootstrap: [
		CarouselComponent
	]
})

export class CarouselModule { }