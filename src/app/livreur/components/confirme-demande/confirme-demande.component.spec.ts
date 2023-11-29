import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmeDemandeComponent } from './confirme-demande.component';

describe('ConfirmeDemandeComponent', () => {
  let component: ConfirmeDemandeComponent;
  let fixture: ComponentFixture<ConfirmeDemandeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmeDemandeComponent]
    });
    fixture = TestBed.createComponent(ConfirmeDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
