import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weathericon',
  templateUrl: './weathericon.component.html',
  styleUrls: ['./weathericon.component.scss']
})
export class WeathericonComponent implements OnInit {
  @Input() icon:any;
  constructor() { }
  
  ngOnInit() {
  }

}
