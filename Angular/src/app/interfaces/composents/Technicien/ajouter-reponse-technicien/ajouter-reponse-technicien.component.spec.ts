import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterReponseTechnicienComponent } from './ajouter-reponse-technicien.component';

describe('AjouterReponseTechnicienComponent', () => {
  let component: AjouterReponseTechnicienComponent;
  let fixture: ComponentFixture<AjouterReponseTechnicienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterReponseTechnicienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterReponseTechnicienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
