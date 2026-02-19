import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Internados } from './internados';

describe('Internados', () => {
  let component: Internados;
  let fixture: ComponentFixture<Internados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Internados]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Internados);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
