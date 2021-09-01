import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReponseExpertComponent } from './reponse-expert.component';

describe('ReponseExpertComponent', () => {
  let component: ReponseExpertComponent;
  let fixture: ComponentFixture<ReponseExpertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReponseExpertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReponseExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
