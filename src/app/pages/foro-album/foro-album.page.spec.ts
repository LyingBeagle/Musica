import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForoAlbumPage } from './foro-album.page';

describe('ForoAlbumPage', () => {
  let component: ForoAlbumPage;
  let fixture: ComponentFixture<ForoAlbumPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ForoAlbumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
