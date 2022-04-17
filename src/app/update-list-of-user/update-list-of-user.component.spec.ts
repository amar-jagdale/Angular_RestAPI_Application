import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateListOfUserComponent } from './update-list-of-user.component';

describe('UpdateListOfUserComponent', () => {
  let component: UpdateListOfUserComponent;
  let fixture: ComponentFixture<UpdateListOfUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateListOfUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateListOfUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
