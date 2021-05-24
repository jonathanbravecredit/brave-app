import { Component, Input, OnInit } from '@angular/core';

export interface IOutlineOnlyTextItem {
  value: string;
}

@Component({
  selector: 'brave-outline-onlytext-select',
  templateUrl: './outline-onlytext-select.component.html',
})
export class OutlineOnlytextSelectComponent implements OnInit {
  @Input() items: IOutlineOnlyTextItem[] = [];

  public selected: IOutlineOnlyTextItem;
  public isOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {
    // this.selected = this.items[0]; // default to first one
  }
}
