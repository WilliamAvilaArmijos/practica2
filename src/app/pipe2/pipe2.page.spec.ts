import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Pipe2Page } from './pipe2.page';

describe('Pipe2Page', () => {
  let component: Pipe2Page;
  let fixture: ComponentFixture<Pipe2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pipe2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Pipe2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
