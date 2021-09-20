import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunglassesDetailComponent } from './sunglasses-detail.component';

describe('SunglassesDetailComponent', () => {
  let component: SunglassesDetailComponent;
  let fixture: ComponentFixture<SunglassesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunglassesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SunglassesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
