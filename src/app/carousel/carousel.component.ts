import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import { GamesService } from "./games.service";
import { filter, tap, take } from "rxjs/operators";

@Component({
	selector: "carousel",
	templateUrl: "./carousel.component.html",
	styleUrls: ["./carousel.component.scss"]
})
export class CarouselComponent implements OnInit {

	constructor(private gameService: GamesService) { }

	@ViewChild("carousel", { static: false }) carousel: ElementRef;
	@ViewChild("carouselContainer", { static: false }) carouselContainer: ElementRef;
	@ViewChild("element", { static: false }) element: ElementRef;
	@Input() category: string;
	@Input() title: string;

	gameCollection: any;
	containerWidth: number;
	totalInViewport: number;
	viewedItems = 0;
	distance = 0;

	hasPrev: boolean;
	hasNext = true;

	ngOnInit(): void {
		this.gameService.fetchGamesByCategory(this.category).pipe(
			filter(games => !!games),
			take(1),
			tap((games) => {
				// Shuffling collection in order to get different games everytime
				this.gameCollection = games.sort(() => Math.random() - 0.5).slice(0, 20);
			})
		).subscribe();
	}

	ngAfterViewInit() {
		this.containerWidth = this.carouselContainer.nativeElement.clientWidth;
		this.totalInViewport = this.containerWidth / 250;
	}

	handleNext() {
		this.viewedItems += Math.floor(this.totalInViewport);
		this.distance -= Math.floor(this.totalInViewport) * 250;
		this.handleSliding();
	}

	handlePrev() {
		this.viewedItems -= Math.floor(this.totalInViewport);
		this.distance += Math.floor(this.totalInViewport) * 250;
		this.handleSliding();
	}

	handleSliding() {
		this.carousel.nativeElement.style.transform = `translate3d(${this.distance}px, 0, 0)`
		this.hasPrev = this.distance < 0;
		this.hasNext = (this.viewedItems + this.totalInViewport) < 20;
	}
}
