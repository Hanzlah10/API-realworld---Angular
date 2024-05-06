import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulartagsComponent } from './populartags.component';

describe('PopulartagsComponent', () => {
  let component: PopulartagsComponent;
  let fixture: ComponentFixture<PopulartagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopulartagsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopulartagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
