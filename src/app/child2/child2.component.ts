import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit, OnChanges {
  constructor() {}

  ngOnInit() {
    console.log('ngONInit child2');
  }
  ngOnChanges() {
    console.log('ngOnChanges child2');
  }
  ngDoCheck() {
    console.log('ngDoCheck child2');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit child2');
  }
  ngAfterContentInitChecked() {
    console.log('ngAfterContentInitChecked child2');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit child2');
  }
  ngAfterViewInitChecked() {
    console.log('ngAfterViewInitChecked child2');
  }
  addListerner() {
    console.log('click event');
  }
}
