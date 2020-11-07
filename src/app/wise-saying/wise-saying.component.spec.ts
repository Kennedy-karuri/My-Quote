import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WiseSayingComponent } from './wise-saying.component';

describe('WiseSayingComponent', () => {
  let component: WiseSayingComponent;
  let fixture: ComponentFixture<WiseSayingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WiseSayingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WiseSayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
