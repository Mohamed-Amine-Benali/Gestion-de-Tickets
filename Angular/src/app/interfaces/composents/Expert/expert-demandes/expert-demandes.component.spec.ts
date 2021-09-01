import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertDemandesComponent } from './expert-demandes.component';

describe('ExpertDemandesComponent', () => {
  let component: ExpertDemandesComponent;
  let fixture: ComponentFixture<ExpertDemandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertDemandesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
