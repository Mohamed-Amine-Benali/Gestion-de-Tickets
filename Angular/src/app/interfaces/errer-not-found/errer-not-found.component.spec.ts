import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrerNotFoundComponent } from './errer-not-found.component';

describe('ErrerNotFoundComponent', () => {
  let component: ErrerNotFoundComponent;
  let fixture: ComponentFixture<ErrerNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrerNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrerNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
