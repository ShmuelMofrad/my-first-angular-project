import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySecondNgComponentComponent } from './my-second-ng-component.component';

describe('MySecondNgComponentComponent', () => {
  let component: MySecondNgComponentComponent;
  let fixture: ComponentFixture<MySecondNgComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySecondNgComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySecondNgComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
