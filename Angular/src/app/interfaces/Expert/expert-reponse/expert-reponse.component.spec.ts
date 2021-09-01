import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertReponseComponent } from './expert-reponse.component';

describe('ExpertReponseComponent', () => {
  let component: ExpertReponseComponent;
  let fixture: ComponentFixture<ExpertReponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertReponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertReponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
