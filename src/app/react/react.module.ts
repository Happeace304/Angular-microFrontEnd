import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { ReactComponent } from './react.component';

@NgModule({
  declarations: [
    ReactComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: ReactComponent,
        children: [
          {
            path: "",
            component: MainComponent,
          },
          {
            path: "first",
            component: MainComponent,
          }
        ]
      },
    ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ReactModule {}
