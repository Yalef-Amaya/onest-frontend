import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComisionesEditComponent } from './comisiones-edit.component';

describe('ComisionesEditComponent', () => {
  let component: ComisionesEditComponent;
  let fixture: ComponentFixture<ComisionesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComisionesEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComisionesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
