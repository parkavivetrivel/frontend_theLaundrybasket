import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignedfailureComponent } from './signedfailure.component';

describe('SignedfailureComponent', () => {
  let component: SignedfailureComponent;
  let fixture: ComponentFixture<SignedfailureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignedfailureComponent]
    });
    fixture = TestBed.createComponent(SignedfailureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
