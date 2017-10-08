import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugListingComponent } from './bug-listing.component';

describe('BugListingComponent', () => {
  let component: BugListingComponent;
  let fixture: ComponentFixture<BugListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
