import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCreateCardComponent } from './event-create-card.component';

describe('EventCreateCardComponent', () => {
  let component: EventCreateCardComponent;
  let fixture: ComponentFixture<EventCreateCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventCreateCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCreateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
