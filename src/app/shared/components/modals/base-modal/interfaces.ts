export type TModalType = 'default' | 'alert';
export type TModalButtonType = 'action' | 'alternative' | 'danger' | string;

export interface IBaseModalButton {
  text: string;
  id: string;
  type: TModalButtonType;
}
