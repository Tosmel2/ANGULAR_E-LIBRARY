import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeensChildrenCategoryComponent } from './teens-children-category.component';

describe('TeensChildrenCategoryComponent', () => {
  let component: TeensChildrenCategoryComponent;
  let fixture: ComponentFixture<TeensChildrenCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeensChildrenCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeensChildrenCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
