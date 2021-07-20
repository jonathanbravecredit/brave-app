import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'brave-base-exception-view',
  templateUrl: './base-exception.view.html',
})
export class BaseExceptionView implements OnInit {
  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void {}
}
