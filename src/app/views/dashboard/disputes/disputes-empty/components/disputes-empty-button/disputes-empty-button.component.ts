import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IFilledOnlyTextButtonConfig } from '@shared/components/buttons/filled-onlytext-button/filled-onlytext-button.component';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';

@Component({
  selector: 'brave-disputes-empty-button',
  templateUrl: './disputes-empty-button.component.html',
})
export class DisputesEmptyButtonComponent implements OnInit {
  config: IFilledOnlyTextButtonConfig = {
    buttonSize: 'lg',
    backgroundColor: 'bg-indigo-800',
    activeColor: 'bg-indigo-900',
    color: 'text-white',
    full: false,
  };
  clickRoute = routes.root.dashboard.report.full

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
