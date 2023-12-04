import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsTabComponent } from './requests-tab.component';

describe('RequestsTabComponent', () => {
  let component: RequestsTabComponent;
  let fixture: ComponentFixture<RequestsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestsTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
