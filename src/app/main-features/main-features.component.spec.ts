import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFeaturesComponent } from './main-features.component';

describe('MainFeaturesComponent', () => {
  let component: MainFeaturesComponent;
  let fixture: ComponentFixture<MainFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainFeaturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
