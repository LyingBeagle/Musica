import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiscografiaPage } from './discografia.page';

describe('DiscografiaPage', () => {
  let component: DiscografiaPage;
  let fixture: ComponentFixture<DiscografiaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscografiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
