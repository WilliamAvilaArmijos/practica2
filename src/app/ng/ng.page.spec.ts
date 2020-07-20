import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NgPage } from './ng.page';

describe('NgPage', () => {
  let component: NgPage;
  let fixture: ComponentFixture<NgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
