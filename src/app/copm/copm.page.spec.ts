import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CopmPage } from './copm.page';

describe('CopmPage', () => {
  let component: CopmPage;
  let fixture: ComponentFixture<CopmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CopmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
