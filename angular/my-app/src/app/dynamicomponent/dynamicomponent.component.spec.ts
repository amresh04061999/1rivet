import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicomponentComponent } from './dynamicomponent.component';

describe('DynamicomponentComponent', () => {
  let component: DynamicomponentComponent;
  let fixture: ComponentFixture<DynamicomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
