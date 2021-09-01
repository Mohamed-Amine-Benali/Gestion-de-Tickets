import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReponceTableComponent } from './reponce-table.component';

describe('ReponceTableComponent', () => {
  let component: ReponceTableComponent;
  let fixture: ComponentFixture<ReponceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReponceTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReponceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
