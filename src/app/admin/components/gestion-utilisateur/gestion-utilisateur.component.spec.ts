import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionUtilisateurComponent } from './gestion-utilisateur.component';

describe('GestionUtilisateurComponent', () => {
  let component: GestionUtilisateurComponent;
  let fixture: ComponentFixture<GestionUtilisateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionUtilisateurComponent]
    });
    fixture = TestBed.createComponent(GestionUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
