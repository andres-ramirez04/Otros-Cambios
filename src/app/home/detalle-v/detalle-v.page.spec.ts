import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalleVPage } from './detalle-v.page';

describe('DetalleVPage', () => {
  let component: DetalleVPage;
  let fixture: ComponentFixture<DetalleVPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleVPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleVPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
