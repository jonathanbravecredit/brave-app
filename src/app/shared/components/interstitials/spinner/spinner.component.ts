import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'brave-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent implements OnInit {
  @Input() message: string | null = '...loading';
  constructor() {}

  ngOnInit(): void {}
}
