import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcsvComponent } from './getcsv.component';

describe('GetcsvComponent', () => {
  let component: GetcsvComponent;
  let fixture: ComponentFixture<GetcsvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetcsvComponent]
    });
    fixture = TestBed.createComponent(GetcsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
