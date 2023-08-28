import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaSelectButtonComponent } from './sta-select-button.component';

describe('StaSelectButtonComponent', () => {
  let component: StaSelectButtonComponent;
  let fixture: ComponentFixture<StaSelectButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaSelectButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaSelectButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
