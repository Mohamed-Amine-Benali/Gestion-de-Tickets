import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicienTabReponsesComponent } from './technicien-tab-reponses.component';

describe('TechnicienTabReponsesComponent', () => {
  let component: TechnicienTabReponsesComponent;
  let fixture: ComponentFixture<TechnicienTabReponsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicienTabReponsesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicienTabReponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
