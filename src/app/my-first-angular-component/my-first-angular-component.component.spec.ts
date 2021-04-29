import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstAngularComponentComponent } from './my-first-angular-component.component';

describe('MyFirstAngularComponentComponent', () => {
  let component: MyFirstAngularComponentComponent;
  let fixture: ComponentFixture<MyFirstAngularComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFirstAngularComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFirstAngularComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
