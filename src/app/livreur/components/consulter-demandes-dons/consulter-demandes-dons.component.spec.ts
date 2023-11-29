import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterDemandesDonsComponent } from './consulter-demandes-dons.component';

describe('ConsulterDemandesDonsComponent', () => {
  let component: ConsulterDemandesDonsComponent;
  let fixture: ComponentFixture<ConsulterDemandesDonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsulterDemandesDonsComponent]
    });
    fixture = TestBed.createComponent(ConsulterDemandesDonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
