import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfUserDashboardComponent } from './list-of-user-dashboard.component';

describe('ListOfUserDashboardComponent', () => {
  let component: ListOfUserDashboardComponent;
  let fixture: ComponentFixture<ListOfUserDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfUserDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfUserDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
