import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BelangrijkheidPage } from './belangrijkheid.page';

describe('BelangrijkheidPage', () => {
  let component: BelangrijkheidPage;
  let fixture: ComponentFixture<BelangrijkheidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BelangrijkheidPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BelangrijkheidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
