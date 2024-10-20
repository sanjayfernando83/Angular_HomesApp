import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MustangComponent } from './mustang.component';

describe('MustangComponent', () => {
  let component: MustangComponent;
  let fixture: ComponentFixture<MustangComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MustangComponent]
    });
    fixture = TestBed.createComponent(MustangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
