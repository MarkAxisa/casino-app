import { IGame } from './game.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, filter, take, tap } from 'rxjs/operators';


@Injectable({
	providedIn: 'root'
})
export class GamesService {

	constructor(private httpClient: HttpClient) { }


	private apiEndpoint = "https://staging-frontapi.cherrytech.com"
	private categorisedGames = {};
	private mergedGames = []
	private gamesList: BehaviorSubject<IGame[]> = new BehaviorSubject<IGame[]>(null);
	params = {
		brand: "cherrycasino.desktop",
		locale: "en"
	}
	categories = [
		"video-slots",
		"jackpot-games",
		"table-games",
		"popular-games",
	];


	public fetchGamesByCategory(category: string): Observable<any[]> {
		const params = this.params;

		if (this.categorisedGames[category]) {
			return of(this.categorisedGames[category])
		}
		return this.httpClient.get<any>(`${this.apiEndpoint}/game-categories/${category}`, { params })
			.pipe(
				map(({ _embedded: { games } }) => {
					this.categorisedGames[category] = games;

					this.mergedGames = [...this.mergedGames, ...games]
						.filter(game => game.enabled !== false);

					this.gamesList.next(this.mergedGames);
					return games;
				})
			);
	}

	public fetchAllGames() {
		this.categories.forEach(category => this.fetchGamesByCategory(category).subscribe());
	}

	public fetchGameBySlug(slug: string): Observable<IGame[]> {
		if (!this.mergedGames.length) {
			this.fetchAllGames();
		}
		return this.gamesList.pipe(
			map((games) => games?.flat().filter((game: IGame) => game.slug.includes(slug)))
		);
	}

	public fetchGameById(id: string): Observable<IGame> {
		const params = this.params;
		if (this.mergedGames.length) {
			return this.gamesList.pipe(
				map((games) => games?.flat().find((game: IGame) => game.id === id))
			);
		} else {
			return this.httpClient.get<any>(`${this.apiEndpoint}/games/${id}`, { params }).pipe(
				map(game => game)
			);
		}
	}

}
