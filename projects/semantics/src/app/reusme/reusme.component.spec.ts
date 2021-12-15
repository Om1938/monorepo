import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusmeComponent } from './reusme.component';

describe('ReusmeComponent', () => {
  let component: ReusmeComponent;
  let fixture: ComponentFixture<ReusmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
