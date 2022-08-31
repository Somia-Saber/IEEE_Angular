import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardusComponent } from './boardus.component';

describe('BoardusComponent', () => {
  let component: BoardusComponent;
  let fixture: ComponentFixture<BoardusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
