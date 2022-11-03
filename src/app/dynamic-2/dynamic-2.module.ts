import { ComponentFactoryResolver, NgModule } from '@angular/core';
import { DynamicLoaderModule } from '../dynamic-loader/dynamic-loader.module';

import { DynamicV2Component } from './dynamic-v2.component';

@NgModule({
  imports: [],
  exports: [],
  declarations: [DynamicV2Component],
  providers: [],
  entryComponents: [DynamicV2Component],
})
export class DynamicV2Module extends DynamicLoaderModule {
  dynamicComponents = [DynamicV2Component];

  constructor(componentFactoryResolver: ComponentFactoryResolver) {
    super(componentFactoryResolver);
  }
}
