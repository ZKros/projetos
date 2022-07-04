import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteParceirosComponent } from './site-parceiros.component';

describe('SiteParceirosComponent', () => {
  let component: SiteParceirosComponent;
  let fixture: ComponentFixture<SiteParceirosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteParceirosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteParceirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
