import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReponcesComponent } from './reponces.component';

describe('ReponcesComponent', () => {
  let component: ReponcesComponent;
  let fixture: ComponentFixture<ReponcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReponcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReponcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
