import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaTaskComponent } from './tela-task.component';

describe('TelaTaskComponent', () => {
  let component: TelaTaskComponent;
  let fixture: ComponentFixture<TelaTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaTaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelaTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
