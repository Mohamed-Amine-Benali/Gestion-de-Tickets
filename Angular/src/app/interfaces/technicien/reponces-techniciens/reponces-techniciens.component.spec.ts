import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReponcesTechniciensComponent } from './reponces-techniciens.component';

describe('ReponcesTechniciensComponent', () => {
  let component: ReponcesTechniciensComponent;
  let fixture: ComponentFixture<ReponcesTechniciensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReponcesTechniciensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReponcesTechniciensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
