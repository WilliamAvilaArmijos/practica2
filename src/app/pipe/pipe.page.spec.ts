import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PipePage } from './pipe.page';

describe('PipePage', () => {
  let component: PipePage;
  let fixture: ComponentFixture<PipePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
