import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustModalComponent } from './cust-modal.component';

describe('CustModalComponent', () => {
  let component: CustModalComponent;
  let fixture: ComponentFixture<CustModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
