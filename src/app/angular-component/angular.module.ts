import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AngularComponent } from './angular.component';
import { UtilsService } from '../utils/utils.service';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AngularComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: AngularComponent,
        children: [
          {
            path: "",
            component: MainComponent,
          },
          {
            path: "first",
            component: MainComponent,
          },
          {
            path: "second",
            component: MainComponent,
          }
        ]
      },
    ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AngularModule {
  constructor(private utils: UtilsService) {
    utils.loadScript('../web-components/angular-component.js');
  }
}
