import { Component, Host, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-v2',
  template: `<div style="background-color: red">name.component.html</div>
  
  <ng-container >{{inputValue?.age}} {{inputValue?.height}} </ng-container>`,
})
export class DynamicV2Component implements OnInit {
  @Input() inputValue = null;

  constructor() {}

  ngOnInit() {
    console.log('----------------DynamicV2Component-ngOnInit-----------');
  }

  ngOnChanges() {
    console.log('---------------DynamicV2Component--ngOnChanges-----------');
  }

  ngAfterViewInit() {
    console.log(
      '---------------DynamicV2Component--ngAfterViewInit-----------'
    );
  }

  ngAfterContentInit() {
    console.log(
      '---------------DynamicV2Component--ngAfterContentInit-----------'
    );
  }
}
