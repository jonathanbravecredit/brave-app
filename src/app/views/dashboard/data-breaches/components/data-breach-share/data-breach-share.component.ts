import { Component, OnInit } from '@angular/core';
import { IFilledOnlyTextButtonConfig } from '@shared/components/buttons/filled-onlytext-button/filled-onlytext-button.component';
import { dataBreachShareContent } from '@views/dashboard/data-breaches/components/data-breach-share/content';

@Component({
  selector: 'brave-data-breach-share',
  templateUrl: './data-breach-share.component.html',
})
export class DataBreachShareComponent implements OnInit {
  buttonConfig: IFilledOnlyTextButtonConfig = {
    buttonSize: 'sm',
    backgroundColor: 'bg-pink-500',
    activeColor: 'bg-pink-500',
    color: 'text-black',
    full: true,
  };
  content = dataBreachShareContent;
  constructor() {}

  ngOnInit(): void {}

  onShareClick(): void {
    window.location.href = `mailto:?body=Hello!%0A%0AI%20just%20learned%20about%20a%20data%20breach%20I%20wanted%20to%20share%20with%20you%2C%20in%20case%20it%20affected%20you...%20I%20found%20it%20with%20a%20free%20new%20app%2C%20Brave%20Credit.%0A%0ATo%20see%20the%20breach%20and%20learn%20what%20steps%20to%20take%20if%20you%20were%20compromised%2C%20just%20register%20by%20going%20to%3A%20%0A%0Ahttps%3A%2F%2Fbrave.credit%0A%0AAfter%20you%20register%2C%20click%20on%20the%20'credit%20breaches'%20section%20on%20your%20dashboard.%0A%0APlease%20review%20it%20so%20that%20if%20you%20were%20affected%20you%20can%20take%20steps%20to%20protect%20your%20credit%20scores%20and%20identity!%20Hopefully%20everything's%20good.`;
  }
}
