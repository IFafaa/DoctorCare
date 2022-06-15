import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixHeaderComponent } from './fix-header.component';

describe('FixHeaderComponent', () => {
  let component: FixHeaderComponent;
  let fixture: ComponentFixture<FixHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
