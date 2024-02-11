import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalblogsComponent } from './personalblogs.component';

describe('PersonalblogsComponent', () => {
  let component: PersonalblogsComponent;
  let fixture: ComponentFixture<PersonalblogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalblogsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
