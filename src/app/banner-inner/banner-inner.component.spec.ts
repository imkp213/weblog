import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerInnerComponent } from './banner-inner.component';

describe('BannerInnerComponent', () => {
  let component: BannerInnerComponent;
  let fixture: ComponentFixture<BannerInnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerInnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
