import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter, ViewChild, OnChanges, ElementRef } from '@angular/core';

@Component({
	selector: 'search-widget',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './search-widget.component.html',
	styleUrls: ['./search-widget.component.scss']
})
export class SearchWidgetComponent implements OnChanges {

	@Input() isSearchOpen = false;
	@Output() toggleSearch = new EventEmitter<boolean>();
	@ViewChild("searchInput", { static: false }) searchInput: ElementRef;

	ngOnChanges(): void {
		if (this.isSearchOpen) {
			this.searchInput.nativeElement.focus();
		}
	}

	closeSearch() {
		this.toggleSearch.emit(false)
	}

}
