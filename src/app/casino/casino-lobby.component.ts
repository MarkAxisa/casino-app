import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-casino',
	templateUrl: './casino-lobby.component.html',
	styleUrls: ['./casino-lobby.component.scss']
})
export class CasinoLobbyComponent implements OnInit {

	constructor(private route: ActivatedRoute) { }

	currentRoute: string;

	ngOnInit(): void {
		this.currentRoute = this.route.snapshot.data.lobbyType
	}

}
