import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  VERSION,
  ViewChild
} from '@angular/core';
import { Child1Component } from './child1/child1.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  parentData: string = '';
  @ViewChild('para1', { static: false }) para1: ElementRef;
  @ViewChild('child1', { static: false }) child1: Child1Component;
  ngOnChanges() {
    console.log('ngOnChanges parent');
  }
  ngOnInit() {
    console.log('ngONInit parent');
  }
  ngDoCheck() {
    console.log('ngDoCheck parent');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit parent');
  }
  ngAfterContentInitChecked() {
    console.log('ngAfterContentInitChecked parent');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit parent ', this.child1.getChild());
    this.para1.nativeElement.innerHTML = 'New TEXT';
  }
  ngAfterViewInitChecked() {
    console.log('ngAfterViewInitChecked parent');
  }
}
