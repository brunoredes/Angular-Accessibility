import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YesNoButtonGroupComponent } from './components/yes-no-button-group/yes-no-button-group.component';

@NgModule({
  declarations: [YesNoButtonGroupComponent],
  imports: [CommonModule],
  exports: [YesNoButtonGroupComponent],
})
export class SharedModule {}
