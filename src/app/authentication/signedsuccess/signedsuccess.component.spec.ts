import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignedsuccessComponent } from './signedsuccess.component';

describe('SignedsuccessComponent', () => {
  let component: SignedsuccessComponent;
  let fixture: ComponentFixture<SignedsuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignedsuccessComponent]
    });
    fixture = TestBed.createComponent(SignedsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
