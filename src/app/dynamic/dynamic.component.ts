import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css'],
})
export class DynamicComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() inputValue = null;
  constructor() {}

  ngOnInit() {
    console.log('----------------DynamicComponent-ngOnInit-----------');
  }

  ngOnChanges() {
    console.log('----------------DynamicComponent-ngOnChanges-----------');
  }

  ngAfterViewInit() {
    console.log('----------------DynamicComponent-ngAfterViewInit-----------');
  }

  ngAfterContentInit() {
    console.log(
      '----------------DynamicComponent-ngAfterContentInit-----------'
    );
  }
}
