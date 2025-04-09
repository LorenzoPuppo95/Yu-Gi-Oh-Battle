import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckLeftComponent } from './deck-left.component';

describe('DeckLeftComponent', () => {
  let component: DeckLeftComponent;
  let fixture: ComponentFixture<DeckLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeckLeftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeckLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
