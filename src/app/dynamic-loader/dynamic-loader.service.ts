import {
  Compiler,
  ComponentFactory,
  Injectable,
  Injector,
  NgModuleFactory,
} from '@angular/core';
import { DynamicLoaderModule } from './dynamic-loader.module';

@Injectable({
  providedIn: 'root',
})
export class DynamicComponentLoaderService {
  constructor(private injector: Injector) {}

  generateComponentBySelector(
    selectorName: string,
    moduleLoaderFn: () => Promise<any>
  ) {
    return this.getModuleFactory(moduleLoaderFn).then((moduleFactory) => {
      const module = moduleFactory.create(this.injector);

      if (module.instance instanceof DynamicLoaderModule) {
        const componentFactory: ComponentFactory<any> =
          module.instance.getComponentFactory(selectorName);

        return componentFactory.create(module.injector, [], null, module);
      }
    });
  }

  async getModuleFactory(factory: () => Promise<any>) {
    let moduleFactory;
    const ngModuleFactory = await factory();
    if (ngModuleFactory instanceof NgModuleFactory) {
      moduleFactory = ngModuleFactory;
    } else {
      moduleFactory = await this.injector
        .get(Compiler)
        .compileModuleAsync(ngModuleFactory);
    }

    return moduleFactory;
  }
}
