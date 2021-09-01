import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypePanneComponent } from './add-type-panne.component';

describe('AddTypePanneComponent', () => {
  let component: AddTypePanneComponent;
  let fixture: ComponentFixture<AddTypePanneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTypePanneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTypePanneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
