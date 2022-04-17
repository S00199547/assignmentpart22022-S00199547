import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationeryRowComponent } from './stationery-row.component';

describe('DeviceRowComponent', () => {
  let component: StationeryRowComponent;
  let fixture: ComponentFixture<StationeryRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StationeryRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StationeryRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
