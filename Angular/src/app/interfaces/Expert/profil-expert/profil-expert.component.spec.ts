import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilExpertComponent } from './profil-expert.component';

describe('ProfilExpertComponent', () => {
  let component: ProfilExpertComponent;
  let fixture: ComponentFixture<ProfilExpertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilExpertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
