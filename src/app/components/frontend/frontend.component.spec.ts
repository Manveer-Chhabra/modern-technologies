import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendComponent } from './frontend.component';
import { HttpClientModule } from '@angular/common/http';

describe('FrontendComponent', () => {
  let component: FrontendComponent;
  let fixture: ComponentFixture<FrontendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [FrontendComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
