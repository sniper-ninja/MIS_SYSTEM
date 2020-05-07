import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegPriComponent } from './reg-pri.component';

describe('RegPriComponent', () => {
  let component: RegPriComponent;
  let fixture: ComponentFixture<RegPriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegPriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegPriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
