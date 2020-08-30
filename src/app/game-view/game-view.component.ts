import { IGame } from './../carousel/game.interface';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { GamesService } from '../carousel/games.service';
import { ActivatedRoute } from '@angular/router';
import { filter, take, tap } from 'rxjs/operators';

@Component({
	selector: 'app-game-view',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './game-view.component.html',
	styleUrls: ['./game-view.component.scss']
})
export class GameViewComponent implements OnInit {

	constructor(
		private route: ActivatedRoute,
		private gameService: GamesService,
		private changeDetectorRef: ChangeDetectorRef
	) { }

	currentGame: IGame;

	ngOnInit(): void {
		this.route.queryParams.subscribe((params) => {
			this.gameService.fetchGameById(params.game).pipe(
				filter(game => !!game),
				take(1),
				tap((game) => {
					this.currentGame = game;
					this.changeDetectorRef.markForCheck();
				})
			).subscribe();
		})
	}

}
