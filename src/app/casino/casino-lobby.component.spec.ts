import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasinoLobbyComponent } from './casino-lobby.component';

describe('CasinoComponent', () => {
  let component: CasinoLobbyComponent;
  let fixture: ComponentFixture<CasinoLobbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasinoLobbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasinoLobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
