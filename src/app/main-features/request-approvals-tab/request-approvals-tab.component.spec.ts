import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestApprovalsTabComponent } from './request-approvals-tab.component';

describe('RequestApprovalsTabComponent', () => {
  let component: RequestApprovalsTabComponent;
  let fixture: ComponentFixture<RequestApprovalsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestApprovalsTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestApprovalsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
