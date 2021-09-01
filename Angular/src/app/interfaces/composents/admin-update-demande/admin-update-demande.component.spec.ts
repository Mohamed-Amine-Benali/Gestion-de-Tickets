import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateDemandeComponent } from './admin-update-demande.component';

describe('AdminUpdateDemandeComponent', () => {
  let component: AdminUpdateDemandeComponent;
  let fixture: ComponentFixture<AdminUpdateDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUpdateDemandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUpdateDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
