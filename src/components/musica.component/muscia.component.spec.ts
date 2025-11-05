import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusciaComponent } from './musica.component';

describe('MusciaComponent', () => {
  let component: MusciaComponent;
  let fixture: ComponentFixture<MusciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MusciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
