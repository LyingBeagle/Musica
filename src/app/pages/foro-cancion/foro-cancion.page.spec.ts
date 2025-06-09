import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForoCancionPage } from './foro-cancion.page';

describe('ForoCancionPage', () => {
  let component: ForoCancionPage;
  let fixture: ComponentFixture<ForoCancionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ForoCancionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});