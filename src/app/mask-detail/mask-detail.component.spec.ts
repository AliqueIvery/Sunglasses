import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskDetailComponent } from './mask-detail.component';

describe('MaskDetailComponent', () => {
  let component: MaskDetailComponent;
  let fixture: ComponentFixture<MaskDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaskDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaskDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
