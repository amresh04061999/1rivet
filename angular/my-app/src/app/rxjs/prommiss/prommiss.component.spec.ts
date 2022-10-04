import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrommissComponent } from './prommiss.component';

describe('PrommissComponent', () => {
  let component: PrommissComponent;
  let fixture: ComponentFixture<PrommissComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrommissComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrommissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
