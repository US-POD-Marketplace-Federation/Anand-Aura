import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgcFormsModule, IGX_ACCORDION_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxIconComponent } from 'igniteui-angular';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-aura-house-home',
  imports: [IGX_EXPANSION_PANEL_DIRECTIVES, IGX_ACCORDION_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxButtonDirective, IgxAvatarComponent, IgxIconComponent, IgcFormsModule, FormsModule],
  templateUrl: './aura-house-home.component.html',
  styleUrls: ['./aura-house-home.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuraHouseHomeComponent {
  public benefitsListSelectedItem?: string;
  public benefitsListSelectedItem1?: string;
  public ngModel = 5;
  public ngModel1 = 4;
}
