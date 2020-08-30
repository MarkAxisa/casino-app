import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

	constructor() { }

	@Output() toggleSearch = new EventEmitter<boolean>();


	ngOnInit(): void {
	}

	handleToggleSearch(searchOpen: boolean) {
		this.toggleSearch.emit(searchOpen)
	}
}
