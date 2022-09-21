import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponetComponent } from './componet.component';

describe('ComponetComponent', () => {
  let component: ComponetComponent;
  let fixture: ComponentFixture<ComponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
