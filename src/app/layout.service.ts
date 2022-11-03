import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  data = {
    dynamic: {
      firstName: 'chandan',
      secondName: 'singh -v2',
    },
    dynamicv2: {
      age: 30,
      height: '178cm',
    },
  };

  constructor() {}

  getLayoutDefination() {
    return of({
      sections: [
        {
          widgetId: 'dynamic',
          type: 'header',
          widgetParams: {
            position: 0,
          },
        },
        {
          widgetId: 'dynamicv2',
          type: 'header',
          widgetParams: {
            position: 0,
          },
        },
      ],
      widgetDefination: [
        {
          widgetId: 'dynamicv2',
          type: 'header',
          selector: 'app-dynamic-v2',
          module: 'dynamicv2',
        },
        {
          widgetId: 'dynamic',
          type: 'header',
          selector: 'app-dynamic-component',
          module: 'dynamic',
        },
      ],
    });
  }

  getLayoutData(key: string, delayValue: number) {
    return of(this.data[key]).pipe(delay(delayValue));
  }
}
