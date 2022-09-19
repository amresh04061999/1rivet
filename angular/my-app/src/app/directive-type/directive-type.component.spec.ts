import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveTypeComponent } from './directive-type.component';

describe('DirectiveTypeComponent', () => {
  let component: DirectiveTypeComponent;
  let fixture: ComponentFixture<DirectiveTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
