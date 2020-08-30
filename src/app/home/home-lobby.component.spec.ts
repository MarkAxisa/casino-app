import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLobbyComponent } from './home-lobby.component';

describe('HomeLobbyComponent', () => {
  let component: HomeLobbyComponent;
  let fixture: ComponentFixture<HomeLobbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLobbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
