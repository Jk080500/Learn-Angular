import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleOptionAndRulesComponent } from './style-option-and-rules.component';

describe('StyleOptionAndRulesComponent', () => {
  let component: StyleOptionAndRulesComponent;
  let fixture: ComponentFixture<StyleOptionAndRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyleOptionAndRulesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleOptionAndRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
