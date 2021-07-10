import { Component, Input, OnInit } from '@angular/core';
import { ExceptionHelper } from './helpers';
import { IBaseExceptionCategory } from './interfaces';

@Component({
  selector: 'brave-base-exception',
  templateUrl: './base-exception.component.html'
})
export class BaseExceptionComponent implements OnInit {
  @Input() code: string = '';
  exceptionCategory: IBaseExceptionCategory | undefined;

  constructor() { }

  ngOnInit(): void {
    if (this.code) {
      const exception = ExceptionHelper.getExceptionByCode(this.code);
      if (exception) {
        this.exceptionCategory = ExceptionHelper.getExceptionCategoryByType(exception.categoryType);
      }
    }
  }
}
