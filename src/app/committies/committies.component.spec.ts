import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommittiesComponent } from './committies.component';

describe('CommittiesComponent', () => {
  let component: CommittiesComponent;
  let fixture: ComponentFixture<CommittiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommittiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommittiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
