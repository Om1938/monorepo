import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeComponentsComponent } from './prime-components.component';

describe('PrimeComponentsComponent', () => {
  let component: PrimeComponentsComponent;
  let fixture: ComponentFixture<PrimeComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
