import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YamlOutputTabComponent } from './yaml-output-tab.component';

describe('YamlOutputTabComponent', () => {
  let component: YamlOutputTabComponent;
  let fixture: ComponentFixture<YamlOutputTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YamlOutputTabComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(YamlOutputTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
