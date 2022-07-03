import { Component } from '@angular/core';
import { createInput, createOutput } from '../container-presenter';
import { User } from './user.repository';


@Component({
  template: `
    <gui-list [source]="users.value()">
      <gui-list-item>

        <ng-template let-item="item">
          {{item.name}}
        </ng-template>
      </gui-list-item>
    </gui-list>
  `
})
export class UserPresenterComponent {

  users = createInput<Array<User>>();

  userChanged = createOutput<User>();

}
