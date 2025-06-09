import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForoArtistaPage } from './foro-artista.page';

describe('ForoArtistaPage', () => {
  let component: ForoArtistaPage;
  let fixture: ComponentFixture<ForoArtistaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ForoArtistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});