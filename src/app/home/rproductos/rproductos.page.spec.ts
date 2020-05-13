import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RproductosPage } from './rproductos.page';

describe('RproductosPage', () => {
  let component: RproductosPage;
  let fixture: ComponentFixture<RproductosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RproductosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RproductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
