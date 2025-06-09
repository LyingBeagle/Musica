import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SongInfoBoxComponent } from './song-info-box.component';

describe('SongInfoBoxComponent', () => {
  let component: SongInfoBoxComponent;
  let fixture: ComponentFixture<SongInfoBoxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SongInfoBoxComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SongInfoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});