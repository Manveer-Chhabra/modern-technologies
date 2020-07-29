import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCardComponent } from './details-card.component';
import { By } from '@angular/platform-browser';

describe('DetailsCardComponent', () => {
  let component: DetailsCardComponent;
  let fixture: ComponentFixture<DetailsCardComponent>;
  const showDescription = '';
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should show description when showDescription is true', () => {
  //   this.showDescription = true;
  //   fixture.detectChanges();
  //   const div = fixture.debugElement.query(By.css('.description'));
  //   expect(div.nativeElement).toBeTruthy();
  // });
  // it('should show description when showDescription is false', () => {
  //   this.showDescription = false;
  //   fixture.detectChanges();
  //   const div = fixture.debugElement.query(By.css('.description'));
  //   expect(div.nativeElement).toBeNull();
  // });
  it('should show description if showDescription is true', () => {
    fixture.whenStable().then(() => {
      const debugElement = fixture.debugElement;
      const button = debugElement.query(By.css('#description-button'))
        .nativeElement;
      button.click();
      fixture.detectChanges();
      expect(
        debugElement.query(By.css('.description')).nativeElement
      ).toBeTruthy();
    });
  });
  it('should show contents if showDescription is false', () => {
    fixture.whenStable().then(() => {
      const debugElement = fixture.debugElement;
      const button = debugElement.query(By.css('#back-button')).nativeElement;
      button.click();
      fixture.detectChanges();
      expect(debugElement.query(By.css('.content')).nativeElement).toBeTruthy();
    });
  });
});
