import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'brave-conditional-term',
  templateUrl: './conditional-term.component.html',
  styleUrls: ['./conditional-term.component.css']
})
export class ConditionalTermComponent implements OnInit {
  @Input() title: string = '';
  @Input() termDescription: string = '';
  accepted: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
