import { GamesService } from './../carousel/games.service';
import { IGame } from './../carousel/game.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, take, tap } from 'rxjs/operators';

@Component({
	selector: 'casino-lobby',
	templateUrl: './casino-lobby.component.html',
	styleUrls: ['./casino-lobby.component.scss']
})
export class CasinoLobbyComponent implements OnInit {

	constructor(
		private route: ActivatedRoute,
		private gamesService: GamesService
	) { }

	@Input() hasRoute = true;
	@Input() gamesCollection: IGame[] = [];
	@Output() toggleSearch = new EventEmitter<void>();

	lobbyTitle: string;

	ngOnInit(): void {
		if (this.hasRoute) {
			this.route.data.subscribe(data => {
				this.lobbyTitle = data.lobbyType.replace("-", " ");
				this.gamesService.fetchGamesByCategory(data.lobbyType).pipe(
					filter(games => !!games),
					take(1),
					tap((games) => this.gamesCollection = games)
				).subscribe();
			})
		}
	}

	toggleSearchOpen() {
		this.toggleSearch.emit();
	}

}
