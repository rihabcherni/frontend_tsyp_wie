import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateurComponent } from './donateur.component';

describe('DonateurComponent', () => {
  let component: DonateurComponent;
  let fixture: ComponentFixture<DonateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonateurComponent]
    });
    fixture = TestBed.createComponent(DonateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
