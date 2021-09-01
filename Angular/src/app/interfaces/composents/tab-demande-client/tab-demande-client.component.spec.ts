import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabDemandeClientComponent } from './tab-demande-client.component';

describe('TabDemandeClientComponent', () => {
  let component: TabDemandeClientComponent;
  let fixture: ComponentFixture<TabDemandeClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabDemandeClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabDemandeClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
