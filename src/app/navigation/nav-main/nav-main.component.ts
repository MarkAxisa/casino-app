import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'nav-main',
	templateUrl: './nav-main.component.html',
	styleUrls: ['./nav-main.component.scss']
})
export class NavMainComponent implements OnInit {

	@Output() toggleSearch = new EventEmitter<boolean>();

	constructor() { }
	categories = [
		{
			parent: "",
			title: "Home",
			endpointFragement: ""
		},
		{
			parent: "casino",
			title: "Video Slots",
			endpointFragement: "video-slots"
		},
		{
			parent: "casino",
			title: "Jackpot Games",
			endpointFragement: "jackpot-games"
		},
		{
			parent: "casino",
			title: "Table Games",
			endpointFragement: "table-games"
		},
		{
			parent: "casino",
			title: "Popular Games",
			endpointFragement: "popular-games"
		},
	]

	ngOnInit(): void {
	}

	handleToggleSearch() {
		this.toggleSearch.emit(true);
	}

}
