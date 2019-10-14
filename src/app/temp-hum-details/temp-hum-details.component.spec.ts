import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempHumDetailsComponent } from './temp-hum-details.component';

describe('TempHumDetailsComponent', () => {
  let component: TempHumDetailsComponent;
  let fixture: ComponentFixture<TempHumDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempHumDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempHumDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
