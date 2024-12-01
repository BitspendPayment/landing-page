import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyWasiComponent } from './why-wasi.component';

describe('WhyWasiComponent', () => {
  let component: WhyWasiComponent;
  let fixture: ComponentFixture<WhyWasiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhyWasiComponent]
    });
    fixture = TestBed.createComponent(WhyWasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
