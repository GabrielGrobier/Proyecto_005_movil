import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimacionesPage } from './animaciones.page';

describe('AnimacionesPage', () => {
  let component: AnimacionesPage;
  let fixture: ComponentFixture<AnimacionesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
