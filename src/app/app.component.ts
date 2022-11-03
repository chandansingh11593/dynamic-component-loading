import {
  AfterViewInit,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { DynamicComponentLoaderService } from './dynamic-loader/dynamic-loader.service';
import { LayoutService } from './layout.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  name = 'Angular';
  @ViewChild('header', { read: ViewContainerRef, static: true })
  container: ViewContainerRef;

  moduleLoaders = {
    dynamicv2: () =>
      import('./dynamic-2/dynamic-2.module').then((m) => m.DynamicV2Module),
    dynamic: () =>
      import('./dynamic/dynamic.module').then((m) => m.DynamicModule),
  };

  constructor(
    private dynamicComponentService: DynamicComponentLoaderService,
    private layoutService: LayoutService
  ) {}

  ngOnInit() {}

  async ngAfterViewInit() {
    this.layoutService
      .getLayoutDefination()
      .subscribe(({ widgetDefination }) => {
        widgetDefination.forEach(async (defination, index) => {
          const component =
            await this.dynamicComponentService.generateComponentBySelector(
              defination.selector,
              this.moduleLoaders[defination.module]
            );

          const componentRef = this.container.insert(component.hostView);

          this.layoutService
            .getLayoutData(defination.widgetId, (index + 1) * 2000)
            .subscribe((value) => {
              console.log(defination.selector, value);
              component.instance.inputValue = value;
            });
        });
      });
  }
}
