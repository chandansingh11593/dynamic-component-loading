import { CommonModule } from '@angular/common';
import { ComponentFactoryResolver, NgModule } from '@angular/core';
import { DynamicLoaderModule } from '../dynamic-loader/dynamic-loader.module';

import { DynamicComponent } from './dynamic.component';

@NgModule({
  imports: [CommonModule],
  exports: [],
  declarations: [DynamicComponent],
  providers: [],
  entryComponents: [DynamicComponent],
})
export class DynamicModule extends DynamicLoaderModule {
  dynamicComponents = [DynamicComponent];

  constructor(componentFactoryResolver: ComponentFactoryResolver) {
    super(componentFactoryResolver);
  }
}
