import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectingPartnerDetailComponent } from './collecting-partner-detail.component';

describe('CollectingPartnerDetailComponent', () => {
  let component: CollectingPartnerDetailComponent;
  let fixture: ComponentFixture<CollectingPartnerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectingPartnerDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollectingPartnerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
