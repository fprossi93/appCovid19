import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegDetailComponent } from './reg-detail.component';

describe('RegDetailComponent', () => {
  let component: RegDetailComponent;
  let fixture: ComponentFixture<RegDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
