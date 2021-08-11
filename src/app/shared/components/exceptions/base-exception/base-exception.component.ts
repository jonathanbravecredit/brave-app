import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DEFAULT_EXCEPTION } from '@shared/components/exceptions/base-exception/constants';
import { ExceptionHelper } from './helpers';
import { IBaseExceptionCategory } from './interfaces';

@Component({
  selector: 'brave-base-exception',
  templateUrl: './base-exception.component.html',
})
export class BaseExceptionComponent implements OnInit {
  @Input() code: string = DEFAULT_EXCEPTION.code;
  @Output() actionButtonClicked: EventEmitter<string> = new EventEmitter();
  exceptionCategory: IBaseExceptionCategory | undefined;

  constructor() {}

  ngOnInit(): void {
    console.log('base code ===> ', this.code);
    if (this.code) {
      const exception = ExceptionHelper.getExceptionByCode(this.code);
      console.log('base exception ===> ', exception);
      if (exception) {
        this.exceptionCategory = ExceptionHelper.getExceptionCategoryByType(exception.categoryType);
        console.log('base exceptionCategory ===> ', this.exceptionCategory);
      } else {
        this.exceptionCategory = ExceptionHelper.getExceptionCategoryByType('try_later_s');
        console.log('base exceptionCategory ===> ', this.exceptionCategory);
      }
    }
  }
}
