import { IGame } from './game.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
	providedIn: 'root'
})
export class GamesService {

	constructor(private httpClient: HttpClient) { }

	apiEndpoint = "https://staging-frontapi.cherrytech.com"


	public GetGamesByCategory(category: string): Observable<any[]> {
		const params = {
			brand: "cherrycasino.desktop",
			locale: "en"
		}
		return this.httpClient.get<any>(`${this.apiEndpoint}/game-categories/${category}`, { params })
			.pipe(
				map(({ _embedded: { games } }) => {
					return games;
				})
			);
	}

}
