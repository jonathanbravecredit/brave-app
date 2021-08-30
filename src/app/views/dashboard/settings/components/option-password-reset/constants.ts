import { IOutlineInputeConfig } from '@shared/components/inputs/outline-input/outline-input.component';

export const CODES_CONFIG: IOutlineInputeConfig[] = [
  {
    size: 'base',
    label: 'Email',
    name: 'email',
    type: 'text',
    placeholder: 'Email',
    autocomplete: 'off',
    required: true,
  },
  {
    size: 'base',
    label: 'New Password',
    name: 'password',
    type: 'password',
    placeholder: 'New Password',
    autocomplete: 'off',
    required: true,
  },
  {
    size: 'base',
    label: 'Code',
    name: 'code',
    type: 'text',
    placeholder: 'Code',
    autocomplete: 'off',
    required: true,
  },
];
