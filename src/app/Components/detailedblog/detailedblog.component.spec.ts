import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedblogComponent } from './detailedblog.component';

describe('DetailedblogComponent', () => {
  let component: DetailedblogComponent;
  let fixture: ComponentFixture<DetailedblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailedblogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailedblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
