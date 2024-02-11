import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllblogpageComponent } from './allblogpage.component';

describe('AllblogpageComponent', () => {
  let component: AllblogpageComponent;
  let fixture: ComponentFixture<AllblogpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllblogpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllblogpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
