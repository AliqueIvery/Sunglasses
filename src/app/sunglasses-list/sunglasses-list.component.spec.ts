import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunglassesListComponent } from './sunglasses-list.component';

describe('SunglassesListComponent', () => {
  let component: SunglassesListComponent;
  let fixture: ComponentFixture<SunglassesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunglassesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SunglassesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
