import { Component, OnInit } from '@angular/core';
import { forbearanceTipsContent } from '@views/dashboard/forbearance/components/forbearance-tips/content';

@Component({
  selector: 'brave-forbearance-tips',
  templateUrl: './forbearance-tips.component.html',
})
export class ForbearanceTipsComponent implements OnInit {
  content = forbearanceTipsContent;
  constructor() {}

  ngOnInit(): void {}
}
