import { CanDeactivate } from '@angular/router';
import { MemberEditComponent } from '../Members/member-edit/member-edit.component';
import { Injectable } from '@angular/core';

@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<MemberEditComponent> {
  canDeactivate(component: MemberEditComponent) {
    if(component.editForm.dirty) {
      return confirm("Are you sure? Any unsaved changes will be lost!");
    }

    return true;
  }
}
