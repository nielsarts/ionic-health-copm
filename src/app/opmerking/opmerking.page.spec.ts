import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OpmerkingPage } from './opmerking.page';

describe('OpmerkingPage', () => {
  let component: OpmerkingPage;
  let fixture: ComponentFixture<OpmerkingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpmerkingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OpmerkingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
