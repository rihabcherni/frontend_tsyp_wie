import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueDonsFaitComponent } from './historique-dons-fait.component';

describe('HistoriqueDonsFaitComponent', () => {
  let component: HistoriqueDonsFaitComponent;
  let fixture: ComponentFixture<HistoriqueDonsFaitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoriqueDonsFaitComponent]
    });
    fixture = TestBed.createComponent(HistoriqueDonsFaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
