import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoUpArrowComponent } from './go-up-arrow.component';

describe('GoUpArrowComponent', () => {
  let component: GoUpArrowComponent;
  let fixture: ComponentFixture<GoUpArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoUpArrowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoUpArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
