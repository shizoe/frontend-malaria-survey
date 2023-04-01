import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MwenseComponent } from './mwense.component';

describe('MwenseComponent', () => {
  let component: MwenseComponent;
  let fixture: ComponentFixture<MwenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MwenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MwenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
