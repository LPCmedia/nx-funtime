import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FukuComponent } from './fuku.component';

describe('FukuComponent', () => {
  let component: FukuComponent;
  let fixture: ComponentFixture<FukuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FukuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FukuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
