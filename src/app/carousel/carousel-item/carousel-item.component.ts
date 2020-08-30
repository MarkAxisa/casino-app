import { IGame } from './../game.interface';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'carousel-item',
	templateUrl: './carousel-item.component.html',
	styleUrls: ['./carousel-item.component.scss']
})
export class CarouselItemComponent {

	constructor() { }

	@Input() game: IGame;

}
