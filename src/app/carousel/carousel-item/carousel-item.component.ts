import { IGame } from './../game.interface';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'carousel-item',
	templateUrl: './carousel-item.component.html',
	styleUrls: ['./carousel-item.component.scss']
})
export class CarouselItemComponent {

	constructor() { }

	@Input() game: IGame;
	@Input() isCarouselItem = true;
	@Output() toggleSearch = new EventEmitter<void>();

	toggleSearchOpen() {
		this.toggleSearch.emit();
	}
}
