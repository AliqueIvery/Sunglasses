import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarringDetailComponent } from './earring-detail.component';

describe('EarringDetailComponent', () => {
  let component: EarringDetailComponent;
  let fixture: ComponentFixture<EarringDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarringDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarringDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
