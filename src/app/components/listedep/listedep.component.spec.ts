import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedepComponent } from './listedep.component';

describe('ListedepComponent', () => {
  let component: ListedepComponent;
  let fixture: ComponentFixture<ListedepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListedepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListedepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
