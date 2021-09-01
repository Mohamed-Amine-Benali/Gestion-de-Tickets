import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertInterfaceDemandesComponent } from './expert-interface-demandes.component';

describe('ExpertInterfaceDemandesComponent', () => {
  let component: ExpertInterfaceDemandesComponent;
  let fixture: ComponentFixture<ExpertInterfaceDemandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertInterfaceDemandesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertInterfaceDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
