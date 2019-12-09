import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BeoordelingPage } from './beoordeling.page';

describe('BeoordelingPage', () => {
  let component: BeoordelingPage;
  let fixture: ComponentFixture<BeoordelingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeoordelingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BeoordelingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
