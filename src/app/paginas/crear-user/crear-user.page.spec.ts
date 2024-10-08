import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearUserPage } from './crear-user.page';

describe('CrearUserPage', () => {
  let component: CrearUserPage;
  let fixture: ComponentFixture<CrearUserPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
