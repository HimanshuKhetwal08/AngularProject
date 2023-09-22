import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HOmepageComponent } from './homepage.component';

describe('HOmepageComponent', () => {
  let component: HOmepageComponent;
  let fixture: ComponentFixture<HOmepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HOmepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HOmepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
