import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegHodComponent } from './reg-hod.component';

describe('RegHodComponent', () => {
  let component: RegHodComponent;
  let fixture: ComponentFixture<RegHodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegHodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegHodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
