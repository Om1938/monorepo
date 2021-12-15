import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHeaderColComponent } from './table-header-col.component';

describe('TableHeaderColComponent', () => {
  let component: TableHeaderColComponent;
  let fixture: ComponentFixture<TableHeaderColComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableHeaderColComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableHeaderColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
