import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit, OnChanges {
  constructor() {}
  @Input() data;

  ngOnInit() {
    console.log('ngONInit child1');
  }
  ngOnChanges() {
    console.log('ngOnChanges child1');
  }
  ngDoCheck() {
    console.log('ngDoCheck child1');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit child1');
  }
  ngAfterContentInitChecked() {
    console.log('ngAfterContentInitChecked child1');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit child1');
  }
  ngAfterViewInitChecked() {
    console.log('ngAfterViewInitChecked child1');
  }
  getChild() {
    return 'accessed child1';
  }
}
