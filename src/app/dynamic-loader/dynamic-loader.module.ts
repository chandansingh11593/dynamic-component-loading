import {
  ComponentFactory,
  ComponentFactoryResolver,
  Type,
} from '@angular/core';

export abstract class DynamicLoaderModule {
  private selectedTofactoryMap: Record<string, ComponentFactory<any>> = null;
  protected abstract dynamicComponents: Type<any>[];

  constructor(protected componentFactoryResolver: ComponentFactoryResolver) {}

  public getComponentFactory(selector: string): ComponentFactory<any> {
    if (!this.selectedTofactoryMap) {
      this.populateRegistry();
    }

    return this.selectedTofactoryMap[selector];
  }

  private populateRegistry() {
    this.selectedTofactoryMap = {};

    if (
      Array.isArray(this.dynamicComponents) &&
      this.dynamicComponents.length > 0
    ) {
      this.dynamicComponents.forEach((componentType) => {
        const componentFactory =
          this.componentFactoryResolver.resolveComponentFactory(componentType);

        this.selectedTofactoryMap[componentFactory.selector] = componentFactory;
      });
    }
  }
}
