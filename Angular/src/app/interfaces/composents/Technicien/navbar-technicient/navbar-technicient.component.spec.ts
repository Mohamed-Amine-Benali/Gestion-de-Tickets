import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarTechnicientComponent } from './navbar-technicient.component';

describe('NavbarTechnicientComponent', () => {
  let component: NavbarTechnicientComponent;
  let fixture: ComponentFixture<NavbarTechnicientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarTechnicientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarTechnicientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
