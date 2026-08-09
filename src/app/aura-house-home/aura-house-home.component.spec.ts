import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IgxButtonDirective, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxIconComponent, IgcFormsModule, IGX_LIST_DIRECTIVES, IGX_ACCORDION_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES } from 'igniteui-angular';
import { AuraHouseHomeComponent } from './aura-house-home.component';

describe('AuraHouseHomeComponent', () => {
  let component: AuraHouseHomeComponent;
  let fixture: ComponentFixture<AuraHouseHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuraHouseHomeComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IgxButtonDirective, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxIconComponent, IgcFormsModule, IGX_LIST_DIRECTIVES, IGX_ACCORDION_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuraHouseHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
