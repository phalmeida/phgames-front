import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutCompletoComponent } from './layout-completo.component';

describe('LayoutCompletoComponent', () => {
  let component: LayoutCompletoComponent;
  let fixture: ComponentFixture<LayoutCompletoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutCompletoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutCompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
