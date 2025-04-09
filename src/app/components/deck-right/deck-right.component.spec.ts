import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckRightComponent } from './deck-right.component';

describe('DeckRightComponent', () => {
  let component: DeckRightComponent;
  let fixture: ComponentFixture<DeckRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeckRightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeckRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
