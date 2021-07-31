import { IBaseModalButton, TModalButtonType } from "./interfaces";

export const BASE_MODAL_DEFAULT_BUTTONS: IBaseModalButton[] = [
  {
    text: 'Confirm',
    id: 'confirm',
    type: 'action'
  },
  {
    text: 'Cancel',
    id: 'cancel',
    type: 'danger'
  }
];

export const BASE_MODAL_DEFAULT_BUTTON_STYLE_OBJECT = {
  ['action']: { background: 'bg-indigo-800', color: 'text-white' },
  ['danger']: { background: 'bg-red-500', color: 'text-white' },
  ['alternative']: { background: 'bg-transparent', color: 'text-indigo-800' }
};
