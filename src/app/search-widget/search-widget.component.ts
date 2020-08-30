import { IGame } from './../carousel/game.interface';
import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter, ViewChild, OnChanges, ElementRef, ChangeDetectorRef } from '@angular/core';
import { GamesService } from '../carousel/games.service';
import { filter, take, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
	selector: 'search-widget',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './search-widget.component.html',
	styleUrls: ['./search-widget.component.scss']
})
export class SearchWidgetComponent implements OnChanges {

	constructor(
		private gameService: GamesService,
		private changeDetectorRef: ChangeDetectorRef
	) { }

	@Input() isSearchOpen = false;
	@Output() toggleSearch = new EventEmitter<boolean>();
	@ViewChild("searchInput", { static: false }) searchInput: ElementRef;

	searchResults: IGame[] = [];
	isSearching = false;
	fetchData: Subscription;

	ngOnChanges(): void {
		if (this.isSearchOpen) {
			this.searchInput.nativeElement.focus();
		} else {
			this.fetchData?.unsubscribe();
			this.searchResults = [];
		}
	}

	closeSearch() {
		this.toggleSearch.emit(false)
	}

	handleSearch(e) {
		this.isSearching = true;
		this.fetchData = this.gameService.fetchGameBySlug(e.currentTarget.value).pipe(
			filter((games) => !!games),
			tap((games) => {
				this.searchResults = games;
				this.isSearching = false;
				this.changeDetectorRef.markForCheck();
			})
		).subscribe();
	}

}
