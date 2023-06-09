import { IBreachCard } from "../../../shared/interfaces/breach-card.interface";

export interface IDataBreachesView {
  breachCards: IBreachCard[];
  unreviewed: IBreachCard[];
  reviewed: IBreachCard[];
  isEmpty: boolean;
}
