import { Component, Renderer2 } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	constructor(private renderer: Renderer2) { }

	title = 'casino-app';
	isSearchOpen = false;

	handleToggleSearch(searchOpen) {
		if (searchOpen) {
			this.renderer.addClass(document.body, 'scroll-lock');
		} else {
			this.renderer.removeClass(document.body, 'scroll-lock');
		}
		this.isSearchOpen = searchOpen;
	}

}