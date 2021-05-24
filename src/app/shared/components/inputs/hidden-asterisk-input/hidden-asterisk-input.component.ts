import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

/**
 * For use within hidden code form.
 * Only works in a form.
 */
@Component({
  selector: 'brave-hidden-asterisk-input',
  templateUrl: './hidden-asterisk-input.component.html',
})
export class HiddenAsteriskInputComponent implements OnInit {
  @ViewChild('hiddenInput') hiddenInput: ElementRef | undefined;

  @Input() size: string = 'text-sm';
  @Input() index: number = 0;
  @Input() value: string = '';

  @Output() valueChanged: EventEmitter<any> = new EventEmitter();
  @Output() onMoveNext: EventEmitter<any> = new EventEmitter();
  @Output()
  onComponentReady: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  private _masked: boolean = false;
  public componentFormGroup: FormGroup | undefined;
  public formSub$: Subscription | undefined;

  get masked() {
    return this._masked;
  }
  set masked(value: boolean) {
    this._masked = value;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.componentFormGroup = this.fb.group({
      input: [this.value, Validators.required],
    });
    this.formSub$ = this.componentFormGroup.controls.input.valueChanges.subscribe(
      (value) => {
        this.valueChanged.emit(value);
        if (value?.length) this.onMoveNext.emit();
      }
    );
    this.onComponentReady.emit(this.componentFormGroup);
  }

  ngOnDestroy() {
    if (this.formSub$) this.formSub$.unsubscribe();
  }

  /**
   * Sets the focus to the hiddien input native element
   */
  focusMe() {
    const el: HTMLInputElement = this.hiddenInput?.nativeElement;
    if (el) el.focus();
  }

  /**
   * Removes any value stored in the input element
   */
  clearMe() {
    const el: HTMLInputElement = this.hiddenInput?.nativeElement;
    if (el) {
      el.value = '';
      el.click();
    }
  }
}
