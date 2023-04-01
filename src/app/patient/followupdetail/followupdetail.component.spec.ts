import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowupdetailComponent } from './followupdetail.component';

describe('FollowupdetailComponent', () => {
  let component: FollowupdetailComponent;
  let fixture: ComponentFixture<FollowupdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowupdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowupdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
